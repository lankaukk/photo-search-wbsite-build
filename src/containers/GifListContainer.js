import React, { Component } from 'react';
import GifList from '../components/GifList';
// import GifSearch from '../components/GifSearch';
// import Paginate from '../components/Paginate';
import PicSearchPaginate from '../components/PicSearchPaginate';

const API_KEY = "563492ad6f9170000100000101d30fe3cde6484f8767eda7a28ba586"

class GifListContainer extends Component {

  state = {
    gifs: []
  }

  render() {
    return(
      <div>
        {/* <GifSearch fetchGIFs={this.fetchGIFs} />
        <Paginate fetchGIFs={this.fetchGIFs} fetchCurated={this.fetchCurated} /> */}

        <PicSearchPaginate fetchGIFs={this.fetchGIFs} fetchCurated={this.fetchCurated}/>

        <GifList gifs={this.state.gifs} />
        
      </div>
    )
  }

  fetchGIFs = (query, index) => { 
    // if (query === "" || undefined) {
    //   this.fetchCurated() }
    // else (
      fetch(`https://api.pexels.com/v1/search?query=${query}&page=${index}&per_page=10`, {
      headers: {
        Authorization: API_KEY
      }})
      .then(response => response.json())
      // .then(result => console.log(result.photos))
      .then(result => {
        
        this.setState({ 
          gifs: result.photos.map( pic => ({ 
            url: pic.src.original, 
            photographer: pic.photographer, 
            photographer_url: pic.photographer_url}) )
        });
        
      })
      .catch(err => console.log(err))
      
    // )
    console.log("query:", query, "page:", index)
  }

  fetchCurated = (index = 1) => { 
      fetch(`https://api.pexels.com/v1/curated?&page=${index}&per_page=10`, {
      headers: {
        Authorization: API_KEY
      }})
      .then(response => response.json())
      .then(result => {
        this.setState({ 
          gifs: result.photos.map( pic => ({ 
            url: pic.src.original, 
            photographer: pic.photographer, 
            photographer_url: pic.photographer_url}) )
        });
      })
      .catch(err => console.log(err))
      console.log("curatedquery", "page:", index)
    
  }

  componentDidMount() {
    this.fetchCurated()
  }
}

export default GifListContainer