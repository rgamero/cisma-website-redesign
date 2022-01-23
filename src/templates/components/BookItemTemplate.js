import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../components/Content';
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';

const BookItemTemplate = ({
  content,
  contentComponent,
  title,
  helmet,
  featuredImage,
  size,
  pages,
  weight,
  isbn,
  price,
  edition,
  relatedContent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <PageContent content={content} />
            <PreviewCompatibleImage imageInfo={featuredImage} />
            <p>{size}</p>
            <p>{pages}</p>
            <p>{weight}</p>
            <p>{isbn}</p>
            <p>{price}</p>
            <p>{edition}</p>
            <div>{relatedContent}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

BookItemTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  helmet: PropTypes.object.isRequired,
  featuredImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    .isRequired,
  size: PropTypes.string.isRequired,
  pages: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  edition: PropTypes.string.isRequired,
  relatedContent: PropTypes.string.isRequired,
};

export default BookItemTemplate;
