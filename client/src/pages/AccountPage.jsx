import React from "react";

const AccountPage = () => {
  return (
    <div className="mt-24">
      <div className="bg-[url('https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64a562b9492999ffae211108_grain_less.png')] py-12  pb-0">
        <h2 className="text-3xl text-gray-100 text-center mb-8 pb-0">
          Payment account? <br /> We got you
        </h2>

        <p className="text-center text-md font-light text-gray-400 mb-4">
          With a local and trusted EU IBAN account you can focus on <br />{" "}
          customers and growing your crypto business.
        </p>

        <div className="flex justify-center items-center gap-1">
          <button className="bg-white text-black text-sm rounded-sm px-3 py-1">
            Get started today
          </button>
          <button className="text-white text-sm border border-gray-300 rounded-sm px-3 py-1 ">
            Book a demo
          </button>
        </div>

        <div className="relative bg-black text-white p-6 rounded-lg shadow-lg flex justify-center items-center w-[900px] h-[500px] mx-auto mt-10">
          {/* Glow Effect */}
          <div className="absolute inset-0 blur-3xl opacity-95 bg-gradient-to-r from-green-500 to-purple-500 rounded-lg z-10"></div>

          {/* Image */}
          <img
            src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64f9c80614d73468d96c09c5_product-dashboard-p-800.webp"
            alt="account"
            className="absolute inset-0 w-full h-full object-cotain z-20 rounded-lg"
          />

          <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-gray-900 to-transparent z-30 rounded-b-lg"></div>
        </div>
      </div>

      <section>
        <div className="mt-14">
          <h3 className="text-3xl text-center">
            A crypto first platform <br /> engineered for the future
          </h3>
          <p className="text-md font-light text-gray-400 text-center mt-4">
            We set out to solve one of the biggest challenges in the <br />{" "}
            industry. Januar Account is the answer.
          </p>
        </div>

        <div className="flex mt-12">
          {/* left */}
          <div className="w-1/2 flex flex-col mx-auto px-36 py-52">
            <p className="text-xs font-light bg-gray-400 px-1 py-1 rounded-sm w-24 mb-8">
              Operational Account
            </p>
            <h3 className="text-2xl leading-tight">
              A designated account for <br /> any operations
            </h3>

            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648183fb04cb8031b4a91639_divider.svg"
              className="w-32 mt-6"
            />

            <p className="text-xs text-gray-400 mt-6">
              Supports any transaction for your operational needs. One account,
              endless payment possibilities.
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 pr-24">
            <div className="bg-gray-200 py-28">
              <div className="h-[400px] w-[440px]  px-10">
                <img
                  src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/64a7cd2ea16d417f5e48973e_operational-account-v1-p-500.webp"
                  className="w-full inset-0 h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex px-24 pt-24 rounded-md ">
          <div className="w-1/2 ">
            <div className="bg-gray-200 p-20">
              <div className="  ">
                <img src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648afa66137ed0a59f60a5e9_multi-currency.webp" />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-1/2 flex flex-col mx-auto px-36 py-48">
            <p className="text-xs font-light bg-gray-400 px-1 py-1 rounded-sm w-32 mb-8">
              Foreign Exchange Trading
            </p>
            <h3 className="text-2xl leading-tight">
              Multi currency <br /> FX trading
            </h3>

            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648183fb04cb8031b4a91639_divider.svg"
              className="w-32 mt-6"
            />

            <p className="text-xs text-gray-400 mt-6">
              Integrated FX trading functionality means seamless conversion
              between currency pairs in a few simple clicks
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex ">
          {/* left */}
          <div className="w-1/2 flex flex-col mx-auto px-36 pt-28">
            <p className="text-xs font-light bg-gray-400 px-1 py-1 rounded-sm w-24 mb-8">
            Payment Approval Workflow
            </p>
            <h3 className="text-2xl leading-tight">
            Enhanced payment <br /> approval workflows
            </h3>

            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648183fb04cb8031b4a91639_divider.svg"
              className="w-32 mt-6"
            />

            <p className="text-xs text-gray-400 mt-6">
            Ensures transparency, oversight, and control over payouts. With payment approval, you can monitor and track all payment transactions, ensuring that funds are disbursed according to established policies and procedures.
            </p>
          </div>
          {/* right */}
          <div className="w-1/2 pr-24 ">
            <div className="bg-gray-200 pt-8 px-8 border rounded-md">
              <div className="h-[400px] w-[440px]  px-10">
                <img
                  src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648afa657bfa1382b5f989dd_payment-approval.webp"
                  className="w-full inset-0 h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex px-24 pt-24 rounded-md ">
          <div className="w-1/2 ">
            <div className="bg-gray-200 p-20">
              <div className="  ">
                <img src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648afa65dd4bd8e86d48d3f1_multi-account.png" />
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-1/2 flex flex-col mx-auto px-36 py-48">
            <p className="text-xs font-light bg-gray-400 px-1 py-1 rounded-sm w-32 mb-8">
            Multi account
            </p>
            <h3 className="text-2xl leading-tight">
            Option for multiple <br /> accounts for optimal <br/>structure
            </h3>

            <img
              src="https://cdn.prod.website-files.com/646f3c0d1e3793b7397635eb/648183fb04cb8031b4a91639_divider.svg"
              className="w-32 mt-6"
            />

            <p className="text-xs text-gray-400 mt-6">
            Multiple payment accounts for different operational purposes. Tailor your setup for optimal cashflow and manage your business finances with full flexibility.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl text-center">Expereince the <br/> power of instant</h3>
        </div>
      </section>
    </div>
  );
};

export default AccountPage;
