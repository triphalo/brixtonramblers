import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';

const Gallery = ({ images }) => {
  const [index, setIndex] = useState(-1);

  if (!images) return null;

  const slides = images.map(img => ({
    src: img.src,
    title: img.title,
    description: img.desc,
  }));

  return (
    <>
      <div className="gallery">
        {images.map((obj, i) => (
          <a
            key={obj.src}
            href={obj.src}
            onClick={e => {
              e.preventDefault();
              setIndex(i);
            }}
            className={obj.full ? 'landscape' : ''}
          >
            <img src={obj.thumbnail} alt={obj.title || ''} />
          </a>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions]}
      />
    </>
  );
};

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.array,
};

export default Gallery;
