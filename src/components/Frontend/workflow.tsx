import React from 'react';

function WorkFlow() {
  return (
    <div className="bg-white flex flex-col items-center justify-center">
      <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl mb-8">
        How our service works
      </h2>

      <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4 sm:mb-0">1</div>
          <div className="text-center">
            <div className="font-bold text-black">Tell us what you need</div>
            <div className="font-semibold text-gray-600">On find a worker section</div>
          </div>
        </div>

        <div className="border-t-2 border-gray-500 h-1 my-2 sm:my-0 mx-0 sm:mx-2"></div>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4 sm:mb-0">2</div>
          <div className="text-center">
            <div className="font-bold text-black">Get a quote</div>
            <div className="font-semibold text-gray-600">Worker gets in touch</div>
          </div>
        </div>

        <div className="border-t-2 border-gray-500 h-1 my-2 sm:my-0 mx-0 sm:mx-2"></div>

        <div className="flex flex-col items-center">
          <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-white text-lg font-bold mb-4 sm:mb-0">3</div>
          <div className="text-center">
            <div className="font-bold text-black">Job Done</div>
            <div className="font-semibold text-gray-600">Feedback - Review</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkFlow;
