import React from 'react';
import { Link } from 'react-router-dom';

function CaseStudies() {


  return (

    
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            
            <h1 className="h1 mb-4">Investor Relations</h1>
            <p className="text-xl">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>

          {/* Articles */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">

            {/* 1st article */}
            <article className="flex flex-col h-90">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={require('../images/news-10.jpg').default} width="352" height="198" alt="News 10" />
                </figure>
              </a>
              <div className="flex-grow flex flex-col h-full py-6 pr-6 ">
                <h3 className="h4 mb-2">
                  <a className="transition duration-150 ease-in-out" href="#0">Blue Horizon</a>
                </h3>
                <p className="text-lg flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua.</p>
                <div>
                  <a className="btn-sm bg-dsent-green hover:bg-black mt-6" href="#0">
                    <span>Learn more</span>
                    <svg className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 2nd article */}
            <article className="flex flex-col h-90">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={require('../images/news-11.jpg').default} width="352" height="198" alt="News 11" />
                </figure>
              </a>
              <div className="flex-grow flex flex-col h-full py-6 pr-6 ">
                <h3 className="h4 mb-2">
                  <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">YesWeTrust</a>
                </h3>
                <p className="text-lg flex-grow">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut et dolore magna aliqua.</p>
               
                <div>
                  <a className="btn-sm text-white bg-dsent-green hover:bg-black hover:text-white mt-6" href="#0">
                    <span className="weight-bold">Learn more</span>
                    <svg className="w-3 h-3 fill-current text-white hover:text-black flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
             
              </div>
            </article>


             {/* 2nd article */}
             <article className="flex flex-col h-full">
          
              <div className="flex-grow flex flex-col h-full p-8 bg-tint-dark">
                <h2 className="h2 text-white mb-2">
                  Active investor in DSENT?
                </h2>
                <p className="text-lg text-white flex-grow">Get our latest updates and stay connected from virtually anywhere, from any type of device.</p>
                <div className="flex flex-wrap -mx-3 mt-6">
                  <div className="w-full px-3"> 
                  <Link to="/signin">
                    <button className="btn uppercase text-black bg-white hover:bg-black hover:text-white w-full">Investor Portal <svg className="w-3 h-3 fill-current hover:fill-red text-black hover:text-white flex-shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
       
                 </button> 
                 </Link>
                    
                  </div>
                </div>
              </div>
            </article>

           

          </div>

        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
