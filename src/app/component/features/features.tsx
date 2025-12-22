import React from 'react';
import { Clock, AlertCircle, Stethoscope } from 'lucide-react';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function Features() {
  const features: FeatureItem[] = [
    {
      id: 1,
      title: '24/7 Emergency',
      description: 'Ouisque placerar vinos locus ut scalerisque. Fusce luctus odio or nibh luctus, in parttitor theo locus egoistos isot gerientior.',
      icon: <Clock className="w-8 h-8 text-blue-600" />,
    },
    {
      id: 2,
      title: 'Emergency Case',
      description: 'Ouisque placerar vinos locus ut scalerisque. Fusce luctus odio or nibh luctus, in parttitor theo locus egoistos isot gerientior.',
      icon: <AlertCircle className="w-8 h-8 text-red-600" />,
    },
    {
      id: 3,
      title: 'Qualified Doctor',
      description: 'Ouisque placerar vinos locus ut scalerisque. Fusce luctus odio or nibh luctus, in parttitor theo locus egoistos isot gerientior.',
      icon: <Stethoscope className="w-8 h-8 text-green-600" />,
    },
  ];

  return (
    <section className="py-16 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gray-100 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}