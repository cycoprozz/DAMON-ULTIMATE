import asyncio
import aiohttp
from bs4 import BeautifulSoup
from fastapi import FastAPI, HTTPException
from typing import Dict, List, Optional

app = FastAPI()

class WebScraper:
    def __init__(self, base_url: str):
        self.base_url = base_url
        self.visited_urls = set()
        self.data = {}

    async def scrape_page(self, session: aiohttp.ClientSession, url: str) -> Dict:
        if url in self.visited_urls:
            return {}
        
        try:
            async with session.get(url) as response:
                if response.status != 200:
                    return {}
                
                self.visited_urls.add(url)
                html = await response.text()
                soup = BeautifulSoup(html, 'html.parser')
                
                # Extract page data
                page_data = {
                    'title': soup.title.string if soup.title else '',
                    'meta_description': soup.find('meta', {'name': 'description'})['content'] if soup.find('meta', {'name': 'description'}) else '',
                    'content': {},
                    'links': []
                }
                
                # Extract main content
                main_content = soup.find('main') or soup.find('article') or soup.body
                if main_content:
                    # Get headings
                    headings = main_content.find_all(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
                    page_data['content']['headings'] = [h.get_text(strip=True) for h in headings]
                    
                    # Get paragraphs
                    paragraphs = main_content.find_all('p')
                    page_data['content']['paragraphs'] = [p.get_text(strip=True) for p in paragraphs]
                    
                    # Get images
                    images = main_content.find_all('img')
                    page_data['content']['images'] = [{'src': img.get('src', ''), 'alt': img.get('alt', '')} for img in images]
                
                # Get internal links for further crawling
                for link in soup.find_all('a', href=True):
                    href = link['href']
                    if href.startswith('/') or href.startswith(self.base_url):
                        if href.startswith('/'):
                            full_url = f"{self.base_url.rstrip('/')}{href}"
                        else:
                            full_url = href
                        if full_url not in self.visited_urls:
                            page_data['links'].append(full_url)
                
                return page_data
        except Exception as e:
            print(f"Error scraping {url}: {str(e)}")
            return {}

    async def scrape_website(self) -> Dict:
        async with aiohttp.ClientSession() as session:
            # Start with the base URL
            initial_data = await self.scrape_page(session, self.base_url)
            self.data[self.base_url] = initial_data
            
            # Create a list of URLs to scrape
            urls_to_scrape = initial_data.get('links', [])
            
            # Scrape all found pages
            while urls_to_scrape:
                url = urls_to_scrape.pop(0)
                if url not in self.visited_urls:
                    page_data = await self.scrape_page(session, url)
                    if page_data:
                        self.data[url] = page_data
                        # Add new found links to the queue
                        urls_to_scrape.extend([u for u in page_data.get('links', []) if u not in self.visited_urls])
            
            return self.data

# MCP Server routes
@app.post("/scrape")
async def scrape_website(url: str = "https://cariblifemedia.com"):
    scraper = WebScraper(url)
    data = await scraper.scrape_website()
    return {"status": "success", "data": data}

@app.get("/status")
async def get_status():
    return {"status": "running"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
