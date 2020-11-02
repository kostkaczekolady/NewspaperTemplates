import React from 'react';
import './NewspaperTemplates.scss';
import photo from './photo.png';

const NewspaperTemplates = () => {

  return (
    <div className="container">
      <div className="newspaper">
      <section className="header-section">
          <h1 className="title pink">TIME <br/>TO TRAVEL</h1>
          <div className="subtitle">
            <h3>LOREM IPSUM DOLOR  <br/>SIT AMET CONSECTETUR ADIPISCING ELIT.</h3>
            <h4 className="subsection pink">IN VEL AREU VESTIBULUM.</h4>
          </div>
      </section>
      <div className="details-section">
        <p>09 FEBRUARY 2020</p>
        <p className="details-number">N°125896</p>
      </div>
      <div className="photo-section">
        <div className="side-info"><p>LOREM IPSUM DOLOR. SIT AMET CONSECTETUR ADIPISCING ELIT. LOREM IPSUM DOLOR. LOREM IPSUM DOLOR. </p></div>
        <div className="top-content">
          <h5 className="title">
            LOREM IPSUM DOLOR
          </h5>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
          <p> In vel area vestibulum <br/> pellentesque libero ut.</p>
        </div>
        <div className="down-content">
          <div className="left-side">
            <div className="title">
              <h2>LOREM IPSUM <br/> DOLOR SIT AMET</h2>
              <h2 className="pink">CONSECTETUR</h2>
            </div>
            <p className="note">
              Adipiscing elit. In vel arcu vestibulum pe len tesque libero ut. Luctus fectus. Mouris id dignissim libero orcu.
            </p>
          </div>
          <div className="right-side">
            <h6 className="title">LOREM IPSUM DOLOR</h6>
            <p className="content">Lorem ipsum dolor sit amet consectetur adipiscing elit. <br/> In vel area vestibulum pellentesque libero ut. <br/> Lorem ipsum dolor lorem ipsum dolor.</p>
            <p className="signature">~Lorem ipsum dolor sit amet~</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NewspaperTemplates;