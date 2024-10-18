import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const products = [
  { id: 1, name: 'Weekly Fruit Basket', price: 29.99, image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=300&q=80', category: 'fruits' },
  { id: 2, name: 'Monthly Veggie Box', price: 39.99, image: 'https://images.unsplash.com/photo-1518843875459-f738682238a6?auto=format&fit=crop&w=300&q=80', category: 'vegetables' },
  { id: 3, name: 'Organic Salad Mix', price: 9.99, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=300&q=80', category: 'mixed' },
  // Add more products as needed
];

export default function ProductList() {
  const [filter, setFilter] = useState('all');

  const filteredProducts = products.filter(product => 
    filter === 'all' || product.category === filter
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Products</SelectItem>
            <SelectItem value="fruits">Fruits</SelectItem>
            <SelectItem value="vegetables">Vegetables</SelectItem>
            <SelectItem value="mixed">Mixed Baskets</SelectItem>
          </SelectContent>
        </Select>
        <Input
          type="search"
          placeholder="Search products..."
          className="max-w-sm"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <p className="text-lg font-semibold">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}