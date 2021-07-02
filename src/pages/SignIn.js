import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DSENTLogo } from '../images/dsent_logo_white.svg';

import PageIllustration from '../partials/PageIllustration';

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-tint-dark">


      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center mb-10">
                
            <Link to="/">
            <DSENTLogo/>
            </Link>

                </div>

         

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1 text-white">Investor Login</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
              
      
             
                <form>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email or User ID</label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
                      <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Your Password" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                    
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-10">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-dsent-green hover:bg-white hover:text-gray-900 w-full">Login</button>

                      <Link to="/">
                        <div className="pt-5">
                      <p className="text-white text-center hover:text-green">Go back</p>
                      </div>
                      </Link>

                    </div>
                  </div>
                </form>
              
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;