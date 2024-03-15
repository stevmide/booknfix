import React, { useState } from 'react';

function cleaner() {

   
        // Use state to keep track of the active tab
        const [activeTab, setActiveTab] = useState('');
      
        // Define the openPage function
        const openPage = (pageName) => {
            setActiveTab(pageName);
          };
        
      
  return (
    <>
      <div className="flex bg-gray-200 p-4">
        <button
          className={`tablink ${activeTab === '1 Bedroom Apt' ? 'active' : ''} bg-red-500 hover:bg-red-600 text-white px-4 py-2 mr-2`}
          onClick={() => openPage('1 Bedroom Apt')}
        >
          1 Bedroom Apt
        </button>

        <button
          className={`tablink ${activeTab === '2 Bedroom Apt' ? 'active' : ''} bg-green-500 hover:bg-green-600 text-white px-4 py-2 mr-2`}
          onClick={() => openPage('2 Bedroom Apt')}
        >
         2 Bedroom Apt
        </button>

        <button
          className={`tablink ${activeTab === '3 Bedroom Apt' ? 'active' : ''} bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-2`}
          onClick={() => openPage('3 Bedroom Apt')}
        >
          3 Bedroom Apt
        </button>

        <button
          className={`tablink ${activeTab === '2 Bedroom Terrace' ? 'active' : ''} bg-orange-500 hover:bg-orange-600 text-white px-4 py-2`}
          onClick={() => openPage('2 Bedroom Terrace')}
        >
          2 Bedroom Terrace
        </button>
      </div>

      <div className="p-4">
        <div id="1 Bedroom Apt" className={`tabcontent ${activeTab === '1 Bedroom Apt' ? 'block' : 'hidden'}`}>
          <h3>1 Bedroom Apt</h3>
          <p>Home is where the heart is..</p>
        </div>

        <div id="2 Bedroom Apt" className={`tabcontent ${activeTab === '2 Bedroom Apt' ? 'block' : 'hidden'}`}>
          <h3>2 Bedroom Apt</h3>
          <p>Some news this fine day!</p>
        </div>

        <div id="3 Bedroom Apt" className={`tabcontent ${activeTab === '3 Bedroom Apt' ? 'block' : 'hidden'}`}>
          <h3>3 Bedroom Apt</h3>
          <p>Get in touch, or swing by for a cup of coffee.</p>
        </div>

        <div id="2 Bedroom Terrace" className={`tabcontent ${activeTab === '2 Bedroom Terrace' ? 'block' : 'hidden'}`}>
          <h3>2 Bedroom Terrace</h3>
          <p>Who we are and what we do.</p>
        </div>
      </div>
    </>
  )
}


export default cleaner