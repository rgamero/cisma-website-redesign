import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import DistributionPageTemplate from './components/DistributionPageTemplate';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';

const DistributionPage = ({ data }) => {
  const { mdx: post } = data;

  return (
    <Layout>
      <DistributionPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.body}
      />
    </Layout>
  );
};

DistributionPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DistributionPage;

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
