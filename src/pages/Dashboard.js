import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">🌟 Welcome to Sasi Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white text-black rounded-xl p-6 shadow-xl">
          <div>
          <p className="text-gray-700 leading-relaxed">
              Long before cities and machines, the Earth was a canvas of pure wilderness — ancient forests teeming with life.
              The first man walked barefoot among giants of wood, listened to the roars of tigers, and watched birds trace stories in the sky.
              Nature was not just a home, but a teacher. Every tree, river, and breeze whispered survival, balance, and wisdom.
            </p>
           
          
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://www.shutterstock.com/shutterstock/videos/1073410448/thumb/1.jpg?ip=x480"
              alt="Dashboard Visual"
              className="w-full object-cover h-64 md:h-80 rounded-lg shadow-md"
            />
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default Dashboard;
