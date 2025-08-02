import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { prisma } from '../prisma';

export class AIAssistant {
  private openai: OpenAI;
  private context: ChatCompletionMessageParam[];

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.context = [
      {
        role: 'system',
        content: `You are an AI assistant for a media company. You help customers understand services,
        guide them through the website, and assist administrators with data analysis and research.
        You have access to the company's service catalog and can help customers make informed decisions.`
      }
    ];
  }

  // Customer assistance
  async handleCustomerQuery(query: string, userId?: string): Promise<string> {
    try {
      // Add user context if available
      if (userId) {
        const userContext = await this.getUserContext(userId);
        this.context.push({
          role: 'system',
          content: `Customer context: ${JSON.stringify(userContext)}`
        });
      }

      // Add user query
      this.context.push({
        role: 'user',
        content: query
      });

      const response = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: this.context,
        temperature: 0.7,
      });

      const answer = response.choices[0].message.content || 'I apologize, but I couldn\'t generate a response.';
      
      // Store interaction for analysis
      await this.storeInteraction(userId || 'anonymous', query, answer);

      return answer;
    } catch (error) {
      console.error('AI Assistant Error:', error);
      throw new Error('Failed to process your request');
    }
  }

  // Admin assistance
  async analyzeCompetitor(competitorUrl: string): Promise<any> {
    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'Analyze the competitor website and provide insights on their services, pricing, and market positioning.'
          },
          {
            role: 'user',
            content: `Analyze this competitor: ${competitorUrl}`
          }
        ],
        temperature: 0.7,
      });

      return {
        analysis: response.choices[0].message.content,
        url: competitorUrl,
        date: new Date(),
      };
    } catch (error) {
      console.error('Competitor Analysis Error:', error);
      throw new Error('Failed to analyze competitor');
    }
  }

  // Market research
  async generateMarketInsights(query: string): Promise<any> {
    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'Provide detailed market insights based on the query, including trends, opportunities, and potential challenges.'
          },
          {
            role: 'user',
            content: query
          }
        ],
        temperature: 0.7,
      });

      return {
        insights: response.choices[0].message.content,
        query,
        date: new Date(),
      };
    } catch (error) {
      console.error('Market Insights Error:', error);
      throw new Error('Failed to generate market insights');
    }
  }

  // Helper methods
  private async getUserContext(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        orders: {
          include: {
            items: true
          }
        }
      }
    });

    return {
      pastOrders: user?.orders || [],
      preferences: user?.profile?.preferences || {},
    };
  }

  private async storeInteraction(userId: string, query: string, response: string) {
    await prisma.aiInteraction.create({
      data: {
        userId,
        query,
        response,
        timestamp: new Date(),
      }
    });
  }

  // Clear context
  clearContext() {
    this.context = this.context.slice(0, 1); // Keep only the system message
  }
}
