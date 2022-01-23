import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const BooksPageTemplate = ({ title, content, contentComponent }) => {
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

BooksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func.isRequired,
};

const DistributionPage = ({ data }) => {
  const { mdx: post } = data;

  return (
    <Layout>
      <BooksPageTemplate
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

export const BooksPageQuery = graphql`
  query BooksPage($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        description
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        size
        pages
        weight
        isbn
        price
        edition
        related_content
      }
    }
  }
`;
