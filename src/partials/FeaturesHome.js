import React from "react";





function  FeaturesHome() {
  
  return (
    <section className="bg-white" id="mission">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Items */}
          <div className="grid gap-20">

            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">

    

             {/* Content */}
             <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:order-1">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">

                  <div className="headline mb-2">Our mission</div>

                  <h1 className="h1 mb-3">We engage since we believe, that:</h1>

                  </div>
              </div>



     {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-2">
                <div className="relative">

                <p className="text-xl mb-4 leading-10">similar to how the worldwide web transformed information, token economies will change entire value chains, enabling new business models and open participation in a global economy.</p>

                </div>
             
              </div>

            
 
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesHome;
