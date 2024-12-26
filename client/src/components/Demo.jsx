import React from 'react'

const Demo = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-4">
          {/* Profile Card */}
          <div className="col-span-3 bg-white rounded-lg p-4 shadow-md">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-lg font-bold text-gray-800">
                Stine Pi Halmind
              </h2>
              <p className="text-sm text-gray-500">Verified broker at Januar</p>
              <div className="flex items-center mt-4">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-600">Verified</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="col-span-3 bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Bitcoin (BTC)
            </h3>
            <div className="h-32 bg-green-200 rounded-lg">
              {/* Replace this with a chart component */}
            </div>
            <p className="text-right text-lg font-bold text-gray-800 mt-2">
              94,316.66 EUR
            </p>
          </div>

          {/* Operations */}
          <div className="col-span-3 bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Operations
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">80,253.35 EUR</span>
                <div className="w-3/4 h-2 bg-green-300 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">53,378.08 DKK</span>
                <div className="w-1/2 h-2 bg-green-300 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">44.053 BTC</span>
                <div className="w-1/4 h-2 bg-green-300 rounded-full"></div>
              </div>
            </div>
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-full flex items-center justify-center w-full">
              <span className="text-lg font-bold">+</span>
            </button>
          </div>

          <div className="col-span-3 bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-sm font-semibold text-gray-600 mb-2">
              Operations
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">80,253.35 EUR</span>
                <div className="w-3/4 h-2 bg-green-300 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">53,378.08 DKK</span>
                <div className="w-1/2 h-2 bg-green-300 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">44.053 BTC</span>
                <div className="w-1/4 h-2 bg-green-300 rounded-full"></div>
              </div>
            </div>
            <button className="mt-6 bg-green-500 text-white px-4 py-2 rounded-full flex items-center justify-center w-full">
              <span className="text-lg font-bold">+</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-black text-white rounded-lg p-6 mt-6">
          <div className="grid grid-cols-3 gap-4">
            {/* Sidebar */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Accounts</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Clients</h4>
                <p className="text-sm">1,134,000.95 DKK</p>
              </div>
              <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                <h4 className="text-sm font-semibold mb-2">Investments</h4>
                <p className="text-sm">21,568.01 DKK</p>
              </div>
            </div>

            {/* Center Section */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold mb-4">Investments</h3>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h4 className="text-sm font-semibold">Euro</h4>
                <p className="text-sm">Completed: 21,568.01 EUR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Demo