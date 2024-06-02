// src/icons.ts
import { FaCheckCircle, FaTint, FaVial, FaMicroscope, FaShieldAlt, FaFlask, FaHospital, FaBiohazard } from 'react-icons/fa';

export const testIcons: { [key: string]: JSX.Element } = {
  'CBC': <FaTint />,
  'Lipid Profile': <FaVial />,
  'Liver Function': <FaMicroscope />,
  'Glucose Fasting': <FaFlask />,
  'Kidney Function': <FaHospital />,
  'ESR': <FaBiohazard />,
  'TSH': <FaShieldAlt />,
  'Urine Routine Examination': <FaCheckCircle />,
};

// src/types.ts
export interface Test {
    name: string;
    count: number;
  }
  
  export interface PackageDetails {
    name: string;
    tests: Test[];
    originalFee: number;
    discountedFee: number;
  }
// src/components/HealthPackage.tsx
import React from 'react';
// import { PackageDetails } from '../types';
// import { testIcons } from '../icons';

const HealthPackage: React.FC = () => {
  const packageDetails: PackageDetails = {
    name: 'NIROGYAN-A',
    tests: [
      { name: 'CBC', count: 21 },
      { name: 'Lipid Profile', count: 9 },
      { name: 'Liver Function', count: 10 },
      { name: 'Glucose Fasting', count: 1 },
      { name: 'Kidney Function', count: 10 },
      { name: 'ESR', count: 1 },
      { name: 'TSH', count: 1 },
      { name: 'Urine Routine Examination', count: 23 },
    ],
    originalFee: 1000,
    discountedFee: 799,
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Health Package Details
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Detailed information about our comprehensive health package: {packageDetails.name}.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {packageDetails.tests.map((test, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 shadow-md">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-[#E82B7B] rounded-md shadow-lg">
                        {testIcons[test.name] || <FaCheckCircle className="text-white text-2xl" />}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900">{test.name}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Number of tests: {test.count}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-500 line-through mb-2">Original Fee: ₹{packageDetails.originalFee}</p>
          <p className="text-3xl font-bold text-green-600">Discounted Fee: ₹{packageDetails.discountedFee}</p>
        </div>
      </div>
    </div>
  );
};

export default HealthPackage;
