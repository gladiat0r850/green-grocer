import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    title: '10 Delicious Recipes Using Seasonal Vegetables',
    excerpt: 'Discover mouthwatering dishes that make the most of this season\'s harvest.',
    date: '2023-09-15',
    category: 'Recipes',
  },
  {
    id: 2,
    title: 'The Benefits of Eating Organic: What You Need to Know',
    excerpt: 'Learn why choosing organic produce can be better for your health and the environment.',
    date: '2023-09-10',
    category: 'Health',
  },
  {
    id: 3,
    title: 'Meet Our Farmers: The Faces Behind Your Food',
    excerpt: 'Get to know the local farmers who grow the delicious produce you enjoy.',
    date: '2023-09-05',
    category: 'Community',
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">GreenGrocer Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <p className="text-sm text-gray-500">Category: {post.category}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{post.date}</span>
              <Link href={`/blog/${post.id}`} className="text-primary hover:underline">
                Read More
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}