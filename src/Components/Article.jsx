import React, { useState } from 'react';
import propTypes from 'prop-types';

const Article = ({ news: { thumbnail, title, body, webUrl } }) => {

  // To display bodyText with onClick event
  const [showBody, setShowBody] = useState(false);
  const changeBody = () => {
    setShowBody(!showBody);
  };

  // Add line breaks after full stops followed by a space
  const formattedBody = body.replace(/\. /g, '.<br/>');

  return (
    <div className="card" style={{ width: '60%' }}>
      <img src={thumbnail} className="card-img-top" alt="illustration of article" />

      <div className="card-body">
        <h5 className="card-title">
          <a href={webUrl} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h5>
        {showBody && <p dangerouslySetInnerHTML={{ __html: formattedBody }} />}
      </div>

      <button type="button" className="btn btn-info" onClick={changeBody}>More info</button>
    </div>
  );
};

Article.defaultProps = {
  news: {
    thumbnail: "thumbnail",
    title: "title",
    body: "body",
    webUrl: "webUrl",
  },
};

Article.propTypes = {
  news: propTypes.exact({
    thumbnail: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    body: propTypes.string,
    webUrl: propTypes.string.isRequired, 
  }),
};

export default Article;
