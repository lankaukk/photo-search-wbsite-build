import React, { Component } from 'react'

class GifSearch extends Component {

  state = {
    query: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.fetchGIFs(this.state.query, 1)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Pexels Browser</h1>

          <input placeholder="Search..." type="text" value={this.state.query} className="search bar" onChange={event => this.setState({query: event.target.value})} />


          
          {/* <input type="submit" value="Search" className="search button"></input> */}
          
        </form>
        <br></br>
      </div>
    )
  }

}

export default GifSearch