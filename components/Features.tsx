import { Leaf, Truck, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="h-12 w-12 text-accent" />,
    title: 'Locally Sourced',
    description: 'We partner with local farmers to bring you the freshest produce.',
  },
  {
    icon: <Truck className="h-12 w-12 text-accent" />,
    title: '100% Organic',
    description: 'All our products are certified organic and free from harmful pesticides.',
  },
  {
    icon: <Calendar className="h-12 w-12 text-accent" />,
    title: 'Flexible Delivery',
    description: 'Choose your delivery frequency and easily modify your subscription.',
  },
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose GreenGrocer?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}