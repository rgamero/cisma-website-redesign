import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Content from '../../components/Content';

const DistributionPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

DistributionPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func.isRequired,
};

export default DistributionPageTemplate;

export const distributionPageQuery = graphql`
  query DistributionPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;
