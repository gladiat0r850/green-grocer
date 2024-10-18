import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SeasonalProducts from '@/components/SeasonalProducts';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <SeasonalProducts />
    </div>
  );
}