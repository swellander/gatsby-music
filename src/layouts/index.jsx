import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import LandingPhoto from '../assets/img/landing.jpg';


import './index.css';



const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet
      title="Brandon Nelson"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
          {children()}
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
