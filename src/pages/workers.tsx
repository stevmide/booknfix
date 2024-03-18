import React, { useState } from 'react';
import Layout from "@/components/Frontend/layout"
import CustomSelect from '@/components/Frontend/customSelect';

const Workers: React.FC = () => {

  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };
  
  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl">
       

        <CustomSelect value={selectedService} onChange={handleServiceChange} />
      </div>
    </Layout>

  )
}

export default Workers