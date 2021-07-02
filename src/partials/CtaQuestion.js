import React from 'react';
import { ExternalLink } from 'react-external-link';


function CtaQuestion() {

  const dsentgradient ={
    background: 'linear-gradient(to right, #408F26, #50A230)'
  }
  
  
  return (
    <section style={dsentgradient}>

<div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="grid gap-20">

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <p className="text-xl mb-8 text-white leading-10">DSENT paves the way at the frontiers of a new digital finance industry, join us on our mission onto the future of finance:</p>
              
                  {/* CTA button */}
   


            <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3">
                  <ExternalLink  href="mailto:info@dsent.com"> 
                    <button className="btn text-black bg-white hover:bg-black hover:text-white w-full">Let's build the future together <svg className="w-3 h-3 fill-current hover:fill-red text-black hover:text-white flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg> </button>  </ExternalLink>
                    
                  </div>
                </div>
              
              </div>

            
              
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <h1 className="h1 mb-4 text-white">Where will you be in the new token economy?</h1>
                </div>
              </div>

              

            </div>

          </div>

        </div>
      </div>




    </section>
  );
}

export default CtaQuestion;
