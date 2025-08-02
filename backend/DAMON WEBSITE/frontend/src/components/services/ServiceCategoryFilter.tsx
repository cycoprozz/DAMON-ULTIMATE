'use client';

import { ServiceCategory } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ServiceCategoryFilterProps {
  categories: ServiceCategory[];
  onCategoryChange?: (categoryId: string | null) => void;
}

export default function ServiceCategoryFilter({ categories, onCategoryChange }: ServiceCategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => handleCategoryClick(null)}
        className="rounded-full"
      >
        All Services
      </Button>
      
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryClick(category.id)}
          className="rounded-full"
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
} 