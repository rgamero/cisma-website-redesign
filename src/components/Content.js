import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

export const HTMLContent = ({ content, className }) => (
  <MDXRenderer className={className}>{content}</MDXRenderer>
);

const Content = ({ content, className }) => (
  <MDXRenderer className={className}>{content}</MDXRenderer>
);

Content.propTypes = {
  content: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
