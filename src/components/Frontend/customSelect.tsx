import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from "next/image";

interface ServiceType {
  id: number;
  name: string;
  price: number;
}

interface ServiceTypes {
  [key: string]: ServiceType[];
}

function CustomSelect() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedTypeOfService, setSelectedTypeOfService] = useState('');
  const [typesOfService, setTypesOfService] = useState<ServiceType[]>([]);

  const serviceTypes: ServiceTypes = {
    1: [
      { id: 1, name: 'Normal Wash - Car', price: 1500 },
      { id: 2, name: 'Full Wash - Car', price: 2000 },
      { id: 3, name: 'Normal Wash - SUV', price: 2000 },
      { id: 4, name: 'Full Wash - SUV', price: 2500 },
    ],
    2: [
      { id: 5, name: '2 Bedroom Appartment', price: 5000 },
      { id: 6, name: '3 Bedroom Appartment', price: 5500 },
      { id: 7, name: '3 Bedroom Duplex', price: 15000 },
      { id: 8, name: '4 Bedroom Duplex', price: 18000 },
      { id: 9, name: '5 Bedroom Duplex', price: 23000 },
      { id: 10, name: '6 Bedroom Duplex', price: 26000 },
      { id: 11, name: '7 Bedroom Duplex', price: 30000 },
    ],
    3: [
      { id: 12, name: 'Water Leaks', price: 2000 },
      { id: 13, name: 'Drain Repair', price: 2000 },
      { id: 14, name: 'Fixture Installation', price: 2000 },
      { id: 15, name: 'Other Options', price: 0}
    ],
    4: [{ id: 16, name: 'Get a Quote', price: 0 }],
    5: [{ id: 17, name: 'Get a Quote', price: 0 }],
    6: [{ id: 18, name: 'Get a Quote', price: 0 }]
  };

  const handleServiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: string = event.target.value;
    setSelectedService(selectedValue);
    if (serviceTypes[selectedValue]) {
      setTypesOfService(serviceTypes[selectedValue]);
    }
  };

  const handleTypeOfServiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue: string = event.target.value;
    setSelectedTypeOfService(selectedValue);
  };

  const handleSubmit = () => {
    if (selectedTypeOfService === "15" || selectedTypeOfService === "16" || selectedTypeOfService === "17" || selectedTypeOfService === "18") {
      // Redirect to the form page
      router.push('/quote');
    } else {
    // Redirect to checkout page with selected service and price
    const selectedType = typesOfService.find(service => service.id === parseInt(selectedTypeOfService));
    if (selectedType) {
      router.push({
        pathname: '/checkout',
        query: { service: selectedService, name: selectedType.name, price: selectedType.price }
      });
    }
    };
  }


  return (

    <div>
    
       <h1 className="text-top-grey text-3xl font-bold mt-6 text-center">Find a Local Professional</h1>      
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:px-4">
        <div className="max-w-xl mb-8 sm:mb-0 sm:mr-4 lg:mr-12 w-full">
          <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
                What service do you require?
              </label>
              <select
                id="role"
                className="custom-select appearance-none block bg-white border border-gray-400 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-full"
                value={selectedService}
                onChange={handleServiceChange}
              >
                <option value="">Please select service</option>
                <option value="1">Car Wash</option>
                <option value="2">Cleaning</option>
                <option value="3">Plumber</option>
                <option value="4">Electrician</option>
                <option value="5">Carpentry</option>
                <option value="6">Gardener</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                Type of service
              </label>
              <select
                id="location"
                className="appearance-none block bg-white border border-gray-400 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 w-full mb-4"
                value={selectedTypeOfService}
                onChange={handleTypeOfServiceChange}
              >
                <option value="">Please select type of service</option>
                {typesOfService.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
              <button onClick={handleSubmit} className="bg-top-blue hover:bg-mid-blue text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Next
              </button>
            </div>
          </div>
        </div>
      

    {/* Another Card with Google-style Shadow and Text */}
    <div className="flex-1">
    <div className="">
        <Head>
          <title>Book&apos;n&apos;Fix - Local Artisans On-Demand</title>
          <meta name="description" content="Book reliable local artisans for any repair, installation, or maintenance project with Book'n'Fix. Effortless booking, expert service, 100% satisfaction guaranteed." />
        </Head>
        <div className="flex flex-col items-center mt-0 mb-2">
          <h1 className="text-3xl font-bold text-center mb-4">Why choose Book&apos;n&apos;Fix?</h1>
          <p className="text-gray-700 text-center max-w-sm"></p>
        </div>
        <h2 className="text-2xl font-semibold mb-4"></h2>
        <ul className="list-disc space-y-4">
          <li className="text-gray-700">
            <span className="text-top-blue font-bold mr-2">Effortless Booking:</span> Say goodbye to endless phone calls and scheduling headaches. Book appointments directly through our app or website.
          </li>
          <li className="text-gray-700">
            <span className="text-top-blue font-bold mr-2">Reliable Artisans:</span> Our vetted professionals have a proven track record of quality workmanship and customer satisfaction.
          </li>
          <li className="text-gray-700">
            <span className="text-top-blue font-bold mr-2">Expertise at Your Doorstep:</span> No matter your needs, we have a skilled artisan for the job - plumbing, electrical, furniture assembly, and more!
          </li>
          <li className="text-gray-700">
            <span className="text-top-blue font-bold mr-2">Efficient Service:</span> Get your projects completed quickly and efficiently, minimizing disruption to your routine.
          </li>
        
        </ul>
        <div className="text-center mt-8">
          {/* <a href="#" className="text-white bg-blue-500 px-4 py-2 rounded-md font-bold hover:bg-blue-700">Download the App</a>
          <span className="ml-4">or</span>
          <a href="#" className="text-blue-500 underline hover:text-blue-700 font-bold">Visit our Website</a> */}
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default CustomSelect