import React from 'react';
import { ChefHat, Utensils, Coffee, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Culinary Haven</h1>
        <p className="text-xl text-gray-600">Your one-stop destination for all things kitchen</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ChefHat className="mr-2" />
              Expert Recipes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover a world of culinary delights with our curated recipes from top chefs.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Utensils className="mr-2" />
              Kitchen Essentials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Find the perfect tools and appliances to elevate your cooking experience.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Coffee className="mr-2" />
              Cooking Classes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Join our interactive online cooking classes and master new culinary skills.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingCart className="mr-2" />
              Gourmet Shop
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explore our selection of premium ingredients and specialty food items.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Featured Product</h2>
        <div className="relative w-full h-64 mb-4">
          <img src="/placeholder.svg" alt="Featured kitchen product" className="mx-auto object-cover w-full h-full rounded-lg shadow-lg" />
        </div>
        <h3 className="text-2xl font-medium mb-2">Professional Chef's Knife Set</h3>
        <p className="text-gray-600 mb-4">Precision-crafted knives for the discerning home chef</p>
        <Button size="lg">
          Shop Now
        </Button>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center">Join Our Culinary Community</h2>
        <p className="text-center mb-6">Sign up for our newsletter to receive exclusive recipes, cooking tips, and special offers.</p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="rounded-l-none">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;