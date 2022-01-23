import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import BookItemTemplate from './components/BookItemTemplate';
import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';

const BookItem = ({ data }) => {
  const { mdx: book } = data;

  return (
    <Layout>
      <BookItemTemplate
        content={book.body}
        contentComponent={HTMLContent}
        title={book.frontmatter.title}
        helmet={
          <Helmet titleTemplate="%s | Cisma Editorial">
            <title>{`${book.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${book.frontmatter.description}`}
            />
          </Helmet>
        }
        featuredImage={book.frontmatter.featuredimage}
        size={book.frontmatter.size}
        pages={book.frontmatter.pages}
        weight={book.frontmatter.weight}
        isbn={book.frontmatter.isbn}
        price={book.frontmatter.price}
        edition={book.frontmatter.edition}
        relatedContent={book.frontmatter.related_content}
      />
    </Layout>
  );
};

BookItem.propTypes = {
  data: PropTypes.shape({
    Mdx: PropTypes.object,
  }).isRequired,
};

export default BookItem;

export const bookItemQuery = graphql`
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
