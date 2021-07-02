import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';





function Header() {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNavOpen.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            


            <Link to="/" className="block" aria-label="Cruip">
              <svg className="w-32" viewBox="0 0 170 52" xmlns="http://www.w3.org/2000/svg">
              <g id="DSENT Logo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="DSENT Logo" transform="translate(-102.000000, -94.000000)">
            <g id="DSENT Logo" transform="translate(102.000000, 94.000000)">
                <path d="M143.005014,27.8926106 L134.105123,16.5975432 L131.328405,16.5975432 L131.328405,34.8127012 L134.753424,34.8127012 L134.753424,22.5309368 L144.302815,34.8127012 L146.430632,34.8127012 L146.430632,16.5975432 L143.005014,16.5975432 L143.005014,27.8926106 Z M97.9784032,19.6116831 C96.6032381,16.8059326 93.6705922,16 90.842298,16 C87.4946437,16.0258235 83.809945,17.5590172 83.809945,21.3004182 C83.809945,25.3799266 87.2355633,26.367224 90.9460501,26.8092258 C93.3593359,27.0698627 95.1501091,27.7700993 95.1501091,29.4858589 C95.1501091,31.4604539 93.1254439,32.214139 90.9718382,32.214139 C88.7660567,32.214139 86.6646269,31.330736 85.8603982,29.329717 L83.0057163,30.8112638 C84.3550932,34.137087 87.2091755,35.2799259 90.920262,35.2799259 C94.968393,35.2799259 98.5487399,33.5395438 98.5487399,29.4858589 C98.5487399,25.1463142 95.0199691,24.1590167 91.2315183,23.6911915 C89.0521246,23.4311551 87.1833874,22.9891533 87.1833874,21.4043126 C87.1833874,20.0530843 88.4026245,18.9877159 90.9460501,18.9877159 C92.9179397,18.9877159 94.6307489,19.9756139 95.2532614,21.0145583 L97.9784032,19.6116831 Z M107.712509,19.9233664 L107.712509,34.8127012 L121.309431,34.8127012 L121.309431,31.4346304 L111.11114,31.4346304 L111.11114,27.328698 L120.945399,27.328698 L120.945399,24.1331932 L111.11114,24.1331932 L111.11114,19.9233664 L121.309431,19.9233664 L121.309431,16.5975432 L107.712509,16.5975432 L107.712509,19.9233664 Z M66.1361052,16.5975432 C63.9045355,16.5975432 61.2321694,16.5975432 59,16.5975432 L59,19.8452955 L66.1361052,19.8452955 C70.080484,19.8452955 71.7411173,22.6822743 71.8190813,25.5228565 C71.8970453,28.4937571 70.2616004,31.5127014 66.1361052,31.5127014 L62.3992305,31.5127014 L62.3992305,23.1711187 L59,23.1711187 L59,34.8127012 C61.2321694,34.8127012 63.9045355,34.8127012 66.1361052,34.8127012 C72.4937698,34.8127012 75.2962758,30.1614731 75.2189115,25.5492805 C75.1403478,21.0403818 72.3636299,16.5975432 66.1361052,16.5975432 Z M160.834782,34.8127012 L164.2598,34.8127012 L164.2598,19.714977 L170.02074,19.714977 L170.02074,16.5975432 C164.753372,16.5975432 160.316021,16.5975432 155.073842,16.5975432 L155.073842,19.714977 L160.834782,19.714977 L160.834782,34.8127012 L160.834782,34.8127012 Z" id="Fill-1" fill="#010604"></path>
                <path d="M24.5125733,24.5441754 L24.4909833,24.5567869 L17.1293822,11.7885803 C16.6753918,11.0000635 16.3725316,10.1659052 16.2130053,9.31973605 C15.6096839,6.13083727 17.0352257,2.76898127 20.0014561,1.0544227 C23.755123,-1.11595022 28.5541073,0.171620211 30.7209068,3.93043706 C32.8883061,7.68865336 31.6024998,12.4942217 27.8488329,14.6645946 C27.2461112,15.0129113 26.6176014,15.271146 25.9758977,15.4459049 L24.0567837,12.1164783 C24.73627,12.0960598 25.4211538,11.9116922 26.0514628,11.5471608 C28.0851238,10.3706914 28.7826018,7.76672433 27.6077442,5.73027315 C26.4340861,3.69322142 23.833087,2.99538708 21.799426,4.17125597 C20.6101751,4.85828049 19.8779132,6.03354883 19.709391,7.29829852 C19.5888466,8.19731574 19.7543702,9.14197446 20.2425448,9.98814364 L25.9591054,19.9037572 L24.5125733,24.5441754 Z M25.0781122,25.5879242 L29.8459108,24.6732928 L35.8737277,14.9438485 C36.3882901,14.1132935 37.1415423,13.5217558 37.9895508,13.2028659 C39.1824001,12.7542581 40.5623629,12.8455411 41.7288243,13.5704 C43.7247028,14.8099267 44.3388193,17.4349129 43.1009908,19.4335297 C41.8625626,21.4321465 39.2411729,22.047706 37.2452944,20.8075787 C36.6269799,20.4226288 36.1412042,19.9061593 35.8017609,19.3158227 L33.7776955,22.5821919 C34.2340848,23.0662319 34.7594422,23.4992255 35.3507692,23.8661591 C39.033069,26.1536384 43.8704355,25.0192072 46.1553805,21.3312548 C48.4403256,17.6433023 47.3068489,12.799299 43.6239493,10.5118197 C40.7128934,8.70357594 37.0809703,9.03327565 34.5585349,11.0715285 C33.889244,11.6126203 33.297917,12.2732208 32.8187382,13.046724 L25.0571219,25.5753127 L25.0781122,25.5879242 Z M24.4909833,27.324703 L27.7804645,30.8997528 L39.2147851,30.8997528 C40.1905346,30.8997528 41.0895195,31.2288519 41.8073881,31.7819547 C42.816722,32.5602622 43.4668219,33.7835742 43.4668219,35.1582238 C43.4668219,37.5099616 41.5633008,39.4154937 39.2147851,39.4154937 C36.8656697,39.4154937 34.9621486,37.5099616 34.9621486,35.1582238 C34.9621486,34.4291611 35.1444644,33.7427371 35.4671154,33.1427917 L31.6276882,33.1427917 C31.4573668,33.7859764 31.3674083,34.4615905 31.3674083,35.1582238 C31.3674083,39.4977685 34.8799865,43.0157665 39.2147851,43.0157665 C43.5483842,43.0157665 47.0615622,39.4977685 47.0615622,35.1582238 C47.0615622,31.7279056 44.8671753,28.8104535 41.8073881,27.7390796 C40.9959627,27.4538203 40.1233656,27.3000806 39.2147851,27.3000806 L24.4909833,27.3000806 L24.4909833,27.324703 Z M22.8231533,27.455622 L22.8447433,27.443611 L30.2063444,40.2118176 C30.6603348,40.9997339 30.9625952,41.8338921 31.1227213,42.6800613 C31.725443,45.8695606 30.3005009,49.2308161 27.3336708,50.9459752 C23.5806036,53.1157476 18.7810196,51.8281771 16.6142201,48.0699608 C14.4474205,44.311144 15.7332268,39.5055756 19.4868937,37.3358033 C20.0890157,36.9868861 20.7181252,36.7280508 21.3592292,36.5538925 L23.2789429,39.883319 C22.5988569,39.9037376 21.9139731,40.0887057 21.2842638,40.4526365 C19.2500031,41.629106 18.5531248,44.233073 19.7273827,46.2701248 C20.9016405,48.3065759 23.5020399,49.0044103 25.5363006,47.8279408 C26.7249518,47.1415169 27.4572137,45.9662485 27.6257359,44.7014988 C27.7456805,43.8024816 27.5813564,42.8578229 27.0925821,42.0116537 L21.3760215,32.0960402 L22.8231533,27.455622 Z M22.2570147,26.4118732 L17.4892161,27.3271051 L11.4619989,37.0559489 C10.9474365,37.8865039 10.1935845,38.4780416 9.34557607,38.7969315 C8.15332655,39.2449387 6.77276397,39.1542563 5.60630254,38.4293974 C3.61042406,37.1898706 2.99630761,34.5642839 4.23473581,32.5662676 C5.47256429,30.5676509 8.09395396,29.9532924 10.0898324,31.1922186 C10.7087467,31.5771685 11.1945224,32.093638 11.5333659,32.6845752 L13.5574314,29.4176054 C13.1010421,28.9335654 12.5762844,28.5011724 11.9849574,28.1336383 C8.30205788,25.8461589 3.46469135,26.9805901 1.17974634,30.6685426 C-1.10459895,34.3570955 0.0288777058,39.2004983 3.71177727,41.4885782 C6.62223347,43.2962214 10.2541566,42.9671223 12.7771917,40.9282689 C13.4458829,40.3877776 14.0378096,39.7265765 14.5163886,38.9536739 L22.278005,26.4250852 L22.2570147,26.4118732 Z M22.8447433,24.6750944 L19.5546624,21.1000446 L8.1209415,21.1000446 C7.14459229,21.1000446 6.24560737,20.771546 5.52833854,20.2178427 C4.51900456,19.4395352 3.86890472,18.2168237 3.86890472,16.8421741 C3.86890472,14.4904363 5.77242584,12.5843036 8.1209415,12.5843036 C10.4694572,12.5843036 12.373578,14.4904363 12.373578,16.8421741 C12.373578,17.5706363 12.1906625,18.2570603 11.8686112,18.8570056 L15.7080384,18.8570056 C15.8777601,18.213821 15.9683183,17.5388074 15.9683183,16.8421741 C15.9683183,12.5020288 12.4551404,8.98463143 8.1209415,8.98463143 C3.78734238,8.98463143 0.273564731,12.5020288 0.273564731,16.8421741 C0.273564731,20.2718918 2.46855128,23.1887433 5.52833854,24.2607177 C6.33976389,24.5453765 7.21236101,24.7003173 8.1209415,24.7003173 L22.8447433,24.7003173 L22.8447433,24.6750944 L22.8447433,24.6750944 Z" id="Fill-2" fill="#61B453"></path>
            </g>
        </g>
    </g>
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:flex-grow">

            {/* Desktop menu links */}
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
              <HashLink smooth to={'/'} className="text-gray-600 hover:text-black lg:px-8 md:px-4 py-2 flex items-center transition duration-150 ease-in-out">
                 Home
                </HashLink>
              </li>
              <li>  
              <HashLink smooth to={'/#mission'} className="text-gray-600 hover:text-black lg:px-8 md:px-4 py-2 flex items-center transition duration-150 ease-in-out">Our Mission</HashLink>
              </li>
              <li>
              <HashLink smooth to={'/#solutions'} className="text-gray-600 hover:text-black  lg:px-8 md:px-4 py-2 flex items-center transition duration-150 ease-in-out">Our Solutions</HashLink>
              </li>
              <li>
              <HashLink smooth to={'/#relations'} className="text-gray-600 hover:text-black  lg:px-8 md:px-4 py-2 flex items-center transition duration-150 ease-in-out">Investor Relations</HashLink>
              </li>

              <li>
              <HashLink smooth to={'/#about'} className="text-gray-600 hover:text-black lg:px-8 md:px-4 py-2 flex items-center transition duration-150 ease-in-out">About us</HashLink>
              </li>
              {/* 1st level: hover */}


  {/* Desktop sign in links */}
  <ul className="flex flex-grow justify-end flex-wrap items-center">
            
              <li>
              <Link to="/signin"  className="btn-sm font-bold text-white bg-dsent-green hover:bg-gray-900 ml-3">Investor Login</Link>
              </li>
            </ul>
          
             
             
            </ul>

       

          </nav>

          {/* Mobile menu */}
          <div className="md:hidden">

            {/* Hamburger button */}
            <button className={`hamburger ${mobileNavOpen && 'active'}`} aria-controls="mobile-nav" aria-expanded={mobileNavOpen} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
              <span className="sr-only">Menu</span>
              <svg className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <rect y="4" width="24" height="2" rx="1" />
                <rect y="11" width="24" height="2" rx="1" />
                <rect y="18" width="24" height="2" rx="1" />
              </svg>
            </button>

            {/*Mobile navigation */}
            <nav id="mobile-nav" ref={mobileNav} className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out" style={mobileNavOpen ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: .8 } }>
              <ul className="bg-gray-800 px-4 py-2">
                <li>
                <HashLink smooth to={'/#home'} className="flex text-gray-300 hover:text-gray-200 py-2">Home</HashLink>
                </li>
                <li>
                <HashLink smooth to={'/#mission'} className="flex text-gray-300 hover:text-gray-200 py-2">Our Mission</HashLink>
                </li>
                <li>
                <HashLink smooth to={'/#solutions'} className="flex text-gray-300 hover:text-gray-200 py-2">Our Solutions</HashLink>
                </li>
                <li>
                <HashLink smooth to={'/#relations'} className="flex text-gray-300 hover:text-gray-200 py-2">Investor Relations</HashLink>
                </li>
                <li>
                   <HashLink smooth to={'/#about'}  className="flex text-gray-300 hover:text-gray-200 py-2">About us</HashLink>
                </li>
                <li className="py-2 my-2 border-t border-b border-gray-700">
                <Link to="/signin" className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm font-bold text-white bg-dsent-green hover:bg-black transition duration-150 ease-in-out">Investor Login</Link>
                </li>
               
               
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
