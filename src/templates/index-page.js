import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import IndexPageTemplate from './components/IndexPageTemplate';
import Layout from '../components/Layout';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.mdx;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        carouselLinks={frontmatter.carousel_links}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    mdx(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(layout: FIXED)
              }
            }
            text
          }
          heading
          description
        }
        carousel_links {
          url
          image {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
          }
          title
          subtitle
        }
      }
    }
  }
`;
