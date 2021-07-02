import React from 'react';

function TeamImages() {
  return (
    <section className="relative -mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full h-0 pb-3/4">
            <figure className="absolute h-auto" style={{ bottom: '41%', width: '600px', maxWidth: '500px' }} data-aos="fade-right">
              <img src={require('../images/team/daniel_rutishauser.jpg').default} width="250" height="188" alt="Team mosaic 01" />
            </figure>
            <figure className="relative mx-auto h-auto" style={{ width: '600px', maxWidth: '500px', left: '55%', top:'40%' }} data-aos="fade-down" data-aos-delay="100">
              <img src={require('../images/team/roger_darin.jpg').default} width="250" height="188" alt="Team mosaic 01" />
            </figure>
            <figure className="absolute h-auto" style={{ top: '70.5%', right: '0', width: '600px', maxWidth: '500px'}} data-aos="fade-left" data-aos-delay="200">
              <img src={require('../images/team/christian_di_giorgio.jpg').default} width="250" height="188" alt="Team mosaic 01" />
            </figure>
            <figure className="absolute h-auto" style={{ bottom: '0', right: '55%', width: '600px', maxWidth: '300px' }} data-aos="fade-up" data-aos-delay="300">
              <img src={require('../images/team/jennifer_arman.jpg').default} width="250" height="188" alt="Team mosaic 01" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamImages;