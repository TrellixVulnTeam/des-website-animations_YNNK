import React from 'react';


function FeaturesZigzag() {
  return (
    <section className="bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4">Our Tokenization solutions</h1>
            <p className="text-xl leading-10">We build better ways to buy, sell and release Token.
             Our technology platform Tokengate, our client onboarding solution KYCgate and our services for tokenization cover the whole lifecycle of a token creation process from end to end:</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={require('../images/placeholder/placeholder_olive.png').default} width="540" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <p className="headline mb-2">Connecting people with Tokens</p>
                  <h1 className="h1 mb-3">Tokengate</h1>
                  <p className="text-xl leading-10 mb-4">is a user-friendly and comprehensive token creation and management platform – it becomes easy for you to onboard investors and manage your tokens.</p>
                  
              
          
           
             {/* CTA button */}
             <div className="flex  mb-8">
              <a className="btn text-white bg-dsent-green hover:bg-purple-700" href="#0">More about Tokengate</a>
            </div>   {/* CTA button */}
         

                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={require('../images/placeholder/placeholder_olive.png').default} width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <p className="headline mb-2">Client onboarding made easy</p>
                  <h1 className="h1 mb-3">KYCgate</h1>
                  <p className="text-xl leading-10 mb-4">is a KYC & AML solutions for financial products. Easily integratable into existing compliance solutions, individuals and businesse entities can be securily onboarded through KYCgate with a state of the art onboarding procedure.</p>
                 
                </div>
              </div>
            </div>

       

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;