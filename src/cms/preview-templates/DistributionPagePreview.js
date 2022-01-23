import React from 'react';
import PropTypes from 'prop-types';
import DistributionPageTemplate from '../../templates/components/DistributionPageTemplate';

const DistributionPagePreview = ({ entry, widgetFor }) => (
  <DistributionPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

DistributionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }).isRequired,
  widgetFor: PropTypes.func.isRequired,
};

export default DistributionPagePreview;
