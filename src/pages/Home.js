import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/FeaturesHome';
import HeroFeatures from '../partials/HeroFeatures';
import Target from '../partials/Target';
import Footer from '../partials/Footer';
import FeaturesZigzag from '../partials/FeaturesZigzag';
import CtaQuestion from '../partials/CtaQuestion';

function Home() {
  return (

    
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesZigzag />
        <HeroFeatures /> 
        <Target />
        <CtaQuestion />


      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;