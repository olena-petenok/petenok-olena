import React from 'react';

import PortraitImage from '../images/about-author/portrait.jpg';

function PhotoAboutAuthor() {
  return (
    <section className="uk-width-1-1 uk-width-1-3@s">
      <div className="aos-item" data-aos="zoom-in-up">
        <div className="portrait-image-block">
          <div className="aos-item__inner portrait-image-shadow">
            <img src={PortraitImage} alt="portrait" className="portrait-image block-shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}

function VerticalAboutAuthorBlockText(props) {
  return ( <p className="text-item-colors-underline active">{props.text}</p> );
}

function VerticalAboutAuthorBlockTextLink(props) {
  return (
    <p className="text-item-colors-underline active">
      <a href={props.href} target="_blank" className="text-item-colors-underline-link">{props.text}</a>
    </p>
  );
}

function VerticalAboutAuthorBlock(props) {
  const text = props.text.map((item) => {
    if (item.href == "") {
      return ( <VerticalAboutAuthorBlockText key={item.id} text={item.value} /> );
    } else {
      return ( <VerticalAboutAuthorBlockTextLink key={item.id} text={item.value} href={item.href} /> );
    }
  });

  return (
    <div className={`uk-width-${props.ukWidth}`}>
      <div className="text-block block-shadow">
        <p className="subtitle-text text-item-colors-underline">{props.subtitle}</p>
        <div className="main-text">{text}</div>
      </div>
    </div>
  );
}

function HorizontalAboutAuthorBlock(props) {
  const blocks = props.blocks.map((item) =>
    <VerticalAboutAuthorBlock key={item.id} ukWidth={item.ukWidth} subtitle={item.subtitle} text={item.text} />
  );

  return (
    <section className={`uk-width-${props.ukWidth}`}>
      <div className="aos-item" data-aos={`zoom-in-${props.upDown}`}>
        <div className="aos-item__inner double-text-block">
          <h1 className="title-text text-item-colors-underline">{props.title}</h1>
          <div className="uk-grid">{blocks}</div>
        </div>
      </div>
    </section>
  );
}

function AboutAuthorContent(props) {
  const sections = props.aboutAuthor.map((item) =>
    <HorizontalAboutAuthorBlock key={item.id} ukWidth={item.ukWidth} upDown={item.upDown} title={item.title} blocks={item.blocks} />
  );

  return (
    <section className="main-background about-author">
      <div className="uk-container">
        <div className="uk-grid">
          <PhotoAboutAuthor />
          {sections}
        </div>
      </div>
    </section>
  );
}

export default AboutAuthorContent;
