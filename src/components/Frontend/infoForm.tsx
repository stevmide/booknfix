import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

function InfoForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [info, setInfo] = useState('');
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate sending data to server (replace with your API call)
    const response = await fetch('/api/submit-user-info', {
      method: 'POST',
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      // Redirect to confirmation page after successful submission
      router.push('/confirmation');
    } else {
      console.error('Error submitting user information:', await response.text());
    }

    // Display the message
    setSubmitted(true);

    // Reset the form fields
    setName('');
    setEmail('');
    setPhone('');
    setInfo('');
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
      <div className="lg:w-1/2 lg:pr-8">
        <h1 className="text-3xl font-bold mb-6">Service Form</h1>
        <h2 className="text-xl mb-4">Give us more details of the type of service you need so we can give you a quote</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-700 mb-2">Phone Number</label>
            <input
              id="phone"
              type="number"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 mb-2">Email</label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="info" className="text-gray-700 mb-2">Type of Service</label>
            <textarea
              id="info"
              rows={4}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Please give us details of the service you require..."
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-top-blue hover:bg-mid-blue text-white rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        {submitted && <div className="text-xl text-green-600 mt-4">Submitted successfully! We&aposll get in touch with you.</div>}
      </div>

      <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
        <Head>
          <title>Book&aposn&aposFix - Local Artisans On-Demand</title>
          <meta name="description" content="Book reliable local artisans for any repair, installation, or maintenance project with Book&aposn&aposFix. Effortless booking, expert service, 100% satisfaction guaranteed." />
        </Head>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center mb-4">Here to serve you</h1>
          <p className="text-gray-700 text-center max-w-sm"></p>
        </div>
        <h2 className="text-2xl font-semibold mb-4 "></h2>
        <ul className="list-disc space-y-4 ml-12">
          <li className="text-gray-700">
            Please provide as much detail as possible about the job
          </li>
          <li className="text-gray-700">
            We need your contact details so our customer service can reach you
          </li>
          <li>
            We feature pre-vetted service providers who are licensed, insured, and have positive customer reviews.
          </li>
          <li>
            Customers can easily find qualified service providers close to their location, service type, and budget.
          </li>
          <li>
            We offer a secure payment gateway for customers to pay for services electronically, adding convenience and peace of mind.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InfoForm;
