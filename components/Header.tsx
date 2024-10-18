import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          GreenGrocer
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/products" className="text-gray-600 hover:text-primary">Products</Link></li>
            <li><Link href="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
            <li><Link href="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-600 hover:text-primary">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="default">Sign In</Button>
        </div>
      </div>
    </header>
  );
}