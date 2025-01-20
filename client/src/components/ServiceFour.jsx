import React from 'react'

const ServiceFour = () => {
  return (
    <section className="flex flex-row gap-20">
    <div className="md:w-2/3 w-full flex md:gap-44 gap-8 pl-1">
      <div className="pl-3 pr-11 py-14">
        <h1 className="text-sm font-normal text-gray-700">
        4.Blockchain Infrastructure Consulting
        </h1>
      </div>
      <div className="px-2 py-4">
        <ul class="list-disc list-inside text-gray-600 space-y-2  font-normal">
          <li class="text-xs font-normal">
          Integration of blockchain technology into operations for increased transparency, security, and efficiency.
          </li>
          <li class="text-xs font-normal">
          Consultation on smart contracts, decentralized applications (DApps), tokenized payment systems, and blockchain analytics.
          </li>
          <li class="text-xs font-normal">
          Regulatory readiness for businesses adopting or expanding blockchain-based solutions.
          </li>
        </ul>
      </div>
    </div>
    <div
      className='md:w-1/3 hidden bg-[#8d77f9] bg-[url("https://cdn.prod.website-files.com/646f3c0d1e3793b…9003b88c5c472935ad39_statement-purple-pattern.png
")] md:flex justify-center items-center'
    >
      <div>
      <h1>Am I doing good?</h1>
      </div>
    </div>
  </section>
  )
}

export default ServiceFour