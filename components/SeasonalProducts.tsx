import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const seasonalProducts = [
  {
    name: 'Autumn Squash',
    image: 'https://images.unsplash.com/photo-1506917728037-b6af01a7d403?auto=format&fit=crop&w=300&q=80',
    description: 'Delicious and nutritious autumn squash varieties.',
  },
  {
    name: 'Crisp Apples',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?auto=format&fit=crop&w=300&q=80',
    description: 'Freshly picked apples from local orchards.',
  },
  {
    name: 'Hearty Kale',
    image: 'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?auto=format&fit=crop&w=300&q=80',
    description: 'Nutrient-packed kale for your fall recipes.',
  },
];

export default function SeasonalProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Seasonal Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {seasonalProducts.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}