import React, { useState } from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Footer from '../partials/Footer';

function Imprint() {

  const [page,] = useState(1);

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow bg-white">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="flex flex-col md:flex-row">

              {/* Main content */}
              <main className="md:flex-auto md:pl-10 order-1">

                {/* FAQ’s – Frequently Asked Questions */}
                <div className={page !== 1 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">Imprint</h2>
                    <p>Last updated - June 30, 2021</p>
                  </div>
  
                      <h4 className="text-xl font-medium mb-2">Responsible for this website is:</h4>
                      <p className="text-lg leading-10">DSENT AG</p>
                      <p className="text-lg leading-10">Gotthardstrasse 26</p>
                      <p className="text-lg leading-10">6300 Zug</p>
                      <p className="text-lg leading-10">Switzerland</p>
                      <p className="text-lg leading-10">Managing Director: Daniel Rutishauser</p>
                      <p className="text-lg leading-10">Comerical Register: CHE-481.420.000</p>
       
                </div>

                {/* What is Open PRO */}
                <div className={page !== 2 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">What is Open PRO</h2>
                    <p className="text-gray-400">Last updated - <span className="text-purple-600">June 30, 2020</span></p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I use Open PRO without registration?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I import my sitemap to Open PRO?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I switch my subscription between essential, and premium plans?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I cancel my subscription at any time?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Is there an additional discount when paid annually?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What happens if I don’t renew my license after one year?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What kind of payment methods do you provide?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                  </ul>
                </div>

                {/* Open PRO plan’s features */}
                <div className={page !== 3 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">Open PRO plan’s features</h2>
                    <p className="text-gray-400">Last updated - <span className="text-purple-600">June 30, 2020</span></p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I use Open PRO without registration?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I import my sitemap to Open PRO?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I switch my subscription between essential, and premium plans?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I cancel my subscription at any time?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Is there an additional discount when paid annually?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What happens if I don’t renew my license after one year?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What kind of payment methods do you provide?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                  </ul>
                </div>

                {/* Get started */}
                <div className={page !== 4 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">Get started</h2>
                    <p className="text-gray-400">Last updated - <span className="text-purple-600">June 30, 2020</span></p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I use Open PRO without registration?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I import my sitemap to Open PRO?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I switch my subscription between essential, and premium plans?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I cancel my subscription at any time?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Is there an additional discount when paid annually?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What happens if I don’t renew my license after one year?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What kind of payment methods do you provide?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                  </ul>
                </div>

                {/* Payments FAQ’s */}
                <div className={page !== 5 ? 'hidden' : undefined}>
                  <div className="mb-8">
                    <h2 className="h2 mb-4">Payments FAQ’s</h2>
                    <p className="text-gray-400">Last updated - <span className="text-purple-600">June 30, 2020</span></p>
                  </div>
                  <ul className="-my-4">
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I use Open PRO without registration?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I import my sitemap to Open PRO?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">How can I switch my subscription between essential, and premium plans?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Can I cancel my subscription at any time?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">Is there an additional discount when paid annually?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What happens if I don’t renew my license after one year?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                    <li className="py-4">
                      <h4 className="text-xl font-medium mb-2">What kind of payment methods do you provide?</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis enim lobortis scelerisque fermentum.</p>
                    </li>
                  </ul>
                </div>

              </main>

        

            </div>
          </div>
        </div>

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Imprint;