import React from 'react';
import PropTypes from 'prop-types';
import Content from '../../components/Content';
import YouTubeVideo from '../../components/YouTubeVideo';
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
  videoURL,
  videoTitle,
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
            <PageContent content={content} className="contenido" />
            <PreviewCompatibleImage imageInfo={featuredImage} />
            <p>{size}</p>
            <p>{pages}</p>
            <p>{weight}</p>
            <p>{isbn}</p>
            <p>{price}</p>
            <p>{edition}</p>
            {videoURL && (
              <YouTubeVideo videoURL={videoURL} videoTitle={videoTitle} />
            )}
            {relatedContent && (
              <Content
                content={relatedContent}
                className="contenido-relativo"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

BookItemTemplate.defaultProps = {
  isbn: '',
  relatedContent: undefined,
  videoURL: undefined,
  videoTitle: '',
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
  isbn: PropTypes.string,
  price: PropTypes.string.isRequired,
  edition: PropTypes.string.isRequired,
  relatedContent: PropTypes.node,
  videoURL: PropTypes.string,
  videoTitle: PropTypes.string,
};

export default BookItemTemplate;
