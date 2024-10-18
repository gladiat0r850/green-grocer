import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About GreenGrocer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            At GreenGrocer, we're passionate about delivering the freshest, organic produce right to your doorstep. Our mission is to make healthy eating convenient and sustainable for everyone.
          </p>
          <p className="mb-4">
            We partner with local farmers who share our commitment to sustainable agriculture and environmental stewardship. By choosing GreenGrocer, you're not just getting the best quality produce – you're also supporting local communities and reducing your carbon footprint.
          </p>
          <p>
            Our team is dedicated to providing exceptional service and ensuring that every delivery meets our high standards of quality and freshness.
          </p>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
            alt="Organic farm"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: 'Jane Doe', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80' },
          { name: 'John Smith', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80' },
          { name: 'Emily Brown', role: 'Lead Nutritionist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80' },
        ].map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}