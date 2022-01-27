/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import AppProvider from './src/context';

export const wrapRootElement = ({ element }) => (
  <MDXProvider>
    <AppProvider>{element}</AppProvider>
  </MDXProvider>
);
