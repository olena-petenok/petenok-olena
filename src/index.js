import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './js/Header';
import Footer from './js/Footer';
import IndexContent from './js/IndexContent';
import AboutAuthorContent from './js/AboutAuthorContent';

import DataLogoLinks from './json/SharedData/DataLogoLinks.json';
import DataMenuLanguageLinks from './json/SharedData/DataMenuLanguageLinks.json';
import DataFooterContacts from './json/SharedData/DataFooterContacts.json';

import EnDataMenuLinks from './json/EnData/EnDataMenuLinks.json';
import EnDataHeaderMenuSmallLinks from './json/EnData/EnDataHeaderMenuSmallLinks.json';
import EnDataIndex from './json/EnData/EnDataIndex.json';
import EnDataAboutAuthor from './json/EnData/EnDataAboutAuthor.json';

import RuDataMenuLinks from './json/RuData/RuDataMenuLinks.json';
import RuDataHeaderMenuSmallLinks from './json/RuData/RuDataHeaderMenuSmallLinks.json';
import RuDataIndex from './json/RuData/RuDataIndex.json';
import RuDataAboutAuthor from './json/RuData/RuDataAboutAuthor.json';

import UaDataMenuLinks from './json/UaData/UaDataMenuLinks.json';
import UaDataHeaderMenuSmallLinks from './json/UaData/UaDataHeaderMenuSmallLinks.json';
import UaDataIndex from './json/UaData/UaDataIndex.json';
import UaDataAboutAuthor from './json/UaData/UaDataAboutAuthor.json';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
UIkit.use(Icons); // loads the Icon plugin
import 'uikit/dist/css/uikit.min.css';

import './styles/style.sass';

/*
const Page = (props) => (
  <div>
    <Header activeLanguage={props.aLang} activeLink={props.aLink} logo={props.logo} links={props.links} languages={props.languages} linksSmall={props.linksSmall} />
    {props.children}
    <Footer links={props.links} contacts={props.contacts} />
  </div>
);
*/

const Index = (props) => (
  <div>
    <Header activeLanguage={props.aLang} activeLink={props.aLink} logo={props.logo} links={props.links} languages={props.languages} linksSmall={props.linksSmall} />
    <IndexContent index={props.index} />
    <Footer links={props.links} contacts={props.contacts} />
  </div>
);

const AboutAuthor = (props) => (
  <div>
    <Header activeLanguage={props.aLang} activeLink={props.aLink} logo={props.logo} links={props.links} languages={props.languages} linksSmall={props.linksSmall} />
    <AboutAuthorContent aboutAuthor={props.aboutAuthor} />
    <Footer links={props.links} contacts={props.contacts} />
  </div>
);

/*
const NotFound = () => (
  <div>
    <Header logo={LogoLinksData} links={MenuLinksData} languages={MenuLanguageLinksData} linksS={HeaderMenuSmallLinksData} />
    <p>404 not found</p>
    <Footer links={MenuLinksData} contacts={FooterContactsData} />
  </div>
);*/

/*
const NotFound = () => (
  <div>
    <p>404 not found</p>
  </div>
);
*/

/*alert(JSON.stringify(DataLogoLinks));*/

ReactDOM.render(
  <Router>
    <Route exact path='/' component={ () => <Index aLang={0} aLink={0} logo={DataLogoLinks} links={EnDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={EnDataHeaderMenuSmallLinks}contacts={DataFooterContacts} index={EnDataIndex} /> } />
    <Route exact path='/about-author' component={ () => <AboutAuthor aLang={0} aLink={1} logo={DataLogoLinks} links={EnDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={EnDataHeaderMenuSmallLinks} contacts={DataFooterContacts} aboutAuthor={EnDataAboutAuthor} /> } />
    <Route exact path='/ua' component={ () => <Index aLang={1} aLink={0} logo={DataLogoLinks} links={UaDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={UaDataHeaderMenuSmallLinks} contacts={DataFooterContacts} index={UaDataIndex} /> } />
    <Route exact path='/ua/about-author' component={ () => <AboutAuthor aLang={1} aLink={1} logo={DataLogoLinks} links={UaDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={UaDataHeaderMenuSmallLinks} contacts={DataFooterContacts} aboutAuthor={UaDataAboutAuthor} /> } />
    <Route exact path='/ru' component={ () => <Index aLang={2} aLink={0} logo={DataLogoLinks} links={RuDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={RuDataHeaderMenuSmallLinks} contacts={DataFooterContacts} index={RuDataIndex} /> } />
    <Route exact path='/ru/about-author' component={ () => <AboutAuthor aLang={2} aLink={1} logo={DataLogoLinks} links={RuDataMenuLinks} languages={DataMenuLanguageLinks} linksSmall={RuDataHeaderMenuSmallLinks} contacts={DataFooterContacts} aboutAuthor={RuDataAboutAuthor} /> } />
  </Router>,
  document.getElementById('root')
);
