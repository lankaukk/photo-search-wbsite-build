import React from 'react'

const GifList = (props) => {
  // console.log(props);
  return (
    <div className="picCard">
      {props.gifs.map(gif =>     
        <a key={gif.url} target="_blank" href={gif.photographer_url}>{gif.photographer}
          <br></br>
          <img key={gif.url} src={gif.url} alt="pexel"></img>
          <br></br>
        </a>
      )}
    </div>
  )
}

export default GifList