import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 py-20 rounded-lg mt-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
          Fresh Organic Produce Delivered to Your Doorstep
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Enjoy farm-fresh fruits and vegetables with our flexible subscription plans.
        </p>
        <Button size="lg" className="text-lg px-8 py-4">
          Start Your Subscription
        </Button>
      </div>
    </div>
  );
}