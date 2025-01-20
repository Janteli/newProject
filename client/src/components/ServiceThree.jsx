import React from 'react'

const ServiceThree = () => {
  return (
    <section className="flex flex-row gap-20">
      <div className="md:w-2/3 w-full flex md:gap-48 gap-0 pl-1">
        <div className="px-2 py-14">
          <h1 className="text-sm font-normal text-gray-700">
          3.Crypto and Blockchain Compliance Solutions
          </h1>
        </div>
        <div className="pl-2 pr-0 py-4">
          <ul class="list-disc list-inside text-gray-600 space-y-2  font-normal">
            <li class="text-xs font-normal">
            Customized regulatory strategies for crypto companies, including exchanges, custodians, and DeFi platforms.
            </li>
            <li class="text-xs font-normal">
            Advisory on like-for-like cryptocurrency permissible investments (e.g., ETH for ETH, BTC for BTC) to meet state-specific requirements.
            </li>
            <li class="text-xs font-normal">
            Blockchain compliance assessments, including wallet audits, custody protocols, and transaction reporting.
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

export default ServiceThree