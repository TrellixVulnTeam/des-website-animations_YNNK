import React from 'react';


function HeroHome() {

  return (


<section id="home">
    <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-32 xl:pb-80">

    {/* Hero content */}
    
    <div className="relative pt-10 pb-10 md:pt-40 md:pb-16">
  

      <main className="md:mt-5 mx-auto max-w-6xl md:px-8 lg:mt-40">
            <div className="sm:text-center lg:text-left">
            <div className="headline mb-2">Welcome to DSENT AG </div>
              <h1 className="text-3xl  font-extrabold sm:text-5xl md:text-5xl">
                <span className="block xl:inline">Pioneers of the</span>{' '}
                <span className="block text-dsent-green xl:inline">Token economy</span>
              </h1>

              <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Tokenization technology
              </p>

              
              <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Client onboarding & KYC solutions
              </p>

              <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Digital Finance Infrastructure
              </p>

             
            </div>
          </main>
        </div>
      </div>
      <div className="lg:mt-10 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img className="mx-auto md:max-w-none" src={require('../images/dsent_lines.svg').default} alt="Features 02" />
      </div>
    </div>
    </div>
    </section>
  );
}

export default HeroHome;