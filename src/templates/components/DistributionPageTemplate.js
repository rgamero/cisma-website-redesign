import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../components/Content';

const DistributionPageTemplate = ({
  title,
  description,
  helmet,
  distributors,
  relatedContent,
}) => (
  <section className="section">
    {helmet || ''}
    <div className="container content">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <p>{description}</p>
          {distributors.map((item) => (
            <div key={item.name} className="distributor-item">
              <h1>{item.name}</h1>
              <h2>{item.address}</h2>
            </div>
          ))}
          {relatedContent && (
            <Content content={relatedContent} className="contenido-relativo" />
          )}
        </div>
      </div>
    </div>
  </section>
);

DistributionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  helmet: PropTypes.object.isRequired,
  distributors: PropTypes.array.isRequired,
  relatedContent: PropTypes.node.isRequired,
};

export default DistributionPageTemplate;
