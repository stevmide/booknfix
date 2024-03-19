import React, { useState, ChangeEvent } from 'react';
import Layout from "@/components/Frontend/layout"
import CustomSelect from '@/components/Frontend/customSelect';


const Workers: React.FC = () => {
 

  return (
    <Layout>
      <div className="mx-auto max-w-screen-xl">
        <CustomSelect />
      </div>
    </Layout>
  );
};

export default Workers;
