import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react'; 
import { useRouter } from 'next/router';




export default function Banner() {
  
  const router = useRouter();
  const [selectedService, setSelectedService] = useState('');
  const [selectedTypeOfService, setSelectedTypeOfService] = useState('');
  const [typesOfService, setTypesOfService] = useState([]);

  const serviceTypes = {
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
      { id: 15, name: 'Other Options'}
    ],
    4: [{ id: 16, name: 'Get a Quote', price: 0 }],
    5: [{ id: 17, name: 'Get a Quote', price: 0 }],
    6: [{ id: 18, name: 'Get a Quote', price: 0 }]
  };

  const handleServiceChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedService(selectedValue);
    setTypesOfService(serviceTypes[selectedValue]);
  };

  const handleTypeOfServiceChange = (event) => {
    const selectedValue = event.target.value;
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
        query: { service: selectedService, type: selectedType.name, price: selectedType.price }
      });
    }
    };
  }

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-4">
        <div className="max-w-xl text-center sm:text-left lg:pl-12">
          <h1 className="text-3xl font-extrabold sm:text-5xl ">
            <strong className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-top-grey to-top-grey">
              Find a Local Worker 
            </strong>
            <strong className="block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-top-blue to-top-blue">
              At your Doorstep
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
          We provide localized services by deploying 
          skilled local trade workers in close proximity 
          to your doorstep
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-left">

          <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg flex flex-col items-left w-full">
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
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0 lg:ml-16 lg:flex-1 lg:pl-8 pointer-events-none">
                <Image
                  alt="banner"
                  src="/img/bannerpic01.png"
                  className="hidden lg:block"
                  width={800}
                  height={800}
                />
              </div>      
       </div>
    </section>
  );
}
