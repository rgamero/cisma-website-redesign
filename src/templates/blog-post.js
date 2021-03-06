import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import BlogPostTemplate from './components/BlogPostTemplate';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';

const BlogPost = ({ data }) => {
  const { siteMetadata } = data.site;
  const { mdx: post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        content={post.body}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate={`%s | ${siteMetadata.title}`}>
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        relatedContent={post.frontmatter.related_content}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    Mdx: PropTypes.object,
  }).isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        related_content
        tags
      }
    }
  }
`;
