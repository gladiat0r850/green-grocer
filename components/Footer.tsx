import Link from 'next/link';
import { Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary mt-12 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">GreenGrocer</h3>
            <p className="text-sm text-gray-600">Fresh organic produce delivered to your doorstep.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-sm text-gray-600 hover:text-primary">Products</Link></li>
              <li><Link href="/about" className="text-sm text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-600 hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <p className="text-sm text-gray-600">123 Organic Lane, Green City, 12345</p>
            <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
            <p className="text-sm text-gray-600">Email: info@greengrocer.com</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary"><Facebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Twitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-primary"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">&copy; 2023 GreenGrocer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}