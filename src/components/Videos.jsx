import React from 'react';

const Videos = ({name,embed}) => {
    return(
        <div className = "flex-item">
        <figure>
        <div className="video-responsive">
        <iframe 
         src= {`https://www.youtube-nocookie.com/embed/${embed}`}
         title="YouTube video player" 
        allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; 
        gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <figcaption className ="captionFont">{name}</figcaption> 
        </figure> 
        </div>

    )
}

export default Videos;