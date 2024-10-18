import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    id: 1,
    title: '10 Delicious Recipes Using Seasonal Vegetables',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2023-09-15',
    category: 'Recipes',
  },
  {
    id: 2,
    title: 'The Benefits of Eating Organic: What You Need to Know',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    date: '2023-09-10',
    category: 'Health',
  },
  {
    id: 3,
    title: 'Meet Our Farmers: The Faces Behind Your Food',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    date: '2023-09-05',
    category: 'Community',
  },
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id));

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-4">
            {post.date} | Category: {post.category}
          </p>
          <p className="text-gray-700">{post.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}