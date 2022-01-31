import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import DistributionPageTemplate from './components/DistributionPageTemplate';
import Layout from '../components/Layout';

const DistributionPage = ({ data }) => {
  const { frontmatter } = data.mdx;

  return (
    <Layout>
      <DistributionPageTemplate
        helmet={
          <Helmet titleTemplate="%s | Distribución">
            <title>{`${frontmatter.title}`}</title>
            <meta name="description" content={`${frontmatter.description}`} />
          </Helmet>
        }
        description={frontmatter.description}
        distributors={frontmatter.distributors}
        relatedContent={frontmatter.related_content}
      />
    </Layout>
  );
};

DistributionPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }).isRequired,
};

export default DistributionPage;

export const pageQuery = graphql`
  query DistributionPageTemplate {
    mdx(frontmatter: { templateKey: { eq: "distribution-page" } }) {
      frontmatter {
        title
        description
        distributors {
          url
          image {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
          name
          address
        }
        related_content
      }
    }
  }
`;
