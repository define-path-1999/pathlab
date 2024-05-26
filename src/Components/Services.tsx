import React from 'react';

const services = [
  {
    title: 'Hematology',
    description: 'Detailed analysis and study of blood to diagnose and monitor blood disorders.',
    icon: '🩸',
  },
  {
    title: 'Biochemistry',
    description: 'Comprehensive biochemical analysis of body fluids to understand your health.',
    icon: '🧬',
  },
  {
    title: 'Microbiology',
    description: 'Examination and study of microorganisms to detect infections and other diseases.',
    icon: '🔬',
  },
  {
    title: 'Immunology',
    description: 'Assessment of the immune system to diagnose immunological disorders.',
    icon: '🛡️',
  },
  {
    title: 'Molecular Assays',
    description: 'Advanced molecular techniques for the detection and monitoring of diseases.',
    icon: '🧪',
  },
  {
    title: 'Wellness Packages',
    description: 'Comprehensive health check-ups tailored to your individual needs.',
    icon: '🏥',
  },
  {
    title: 'Histology/Cytology',
    description: 'Microscopic examination of tissues and cells to detect abnormalities.',
    icon: '🦠',
  },
];

const Services: React.FC = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We provide a wide range of medical diagnostic services to cater to your health needs.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <span className="text-white text-2xl">{service.icon}</span>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">{service.title}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
