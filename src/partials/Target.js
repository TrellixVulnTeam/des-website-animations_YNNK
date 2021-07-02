import React from 'react';


function Target() {
  return (
    <section className="bg-white" id="about">

<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="py-12 md:py-20">

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={require('../images/team/dsent_team.png').default} width="540" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
             
                <p className="headline mb-2">Connecting people with tokens</p>
                <h1 className="h1 mb-4">Behind DSENT</h1>
            <p className="text-xl leading-10 mb-5">Lead by a team of seasoned entrepreneuers, DSENT combines an interdisciplinary team of world-class blockchain experts, design professionals and technologists with a passion for blockchain technology and shaping the future of digital finance.</p>

          <h2>Owner managed</h2>
          <p class="mb-5 leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h2>An Inacta company</h2>
          <p class="mb-5 leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <h2>Embedded in the CV VC & CV Labs Ecosystem</h2>
          <p class="leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>

           

           

          </div>

    
      </div>  

      </div>
   
    </section>
  );
}

export default Target;
