import React, { Component } from 'react'
import GifSearch from './GifSearch'

class Paginate extends Component {

    state = {
        index: 1
    }

    handleSubmit = event => {
        // prevents page reload
        event.preventDefault()

        // if (GifSearch.state === "" || undefined) {
        //     this.fetchCurated(this.state.index)
        // } else {

            // this.props.fetchGIFs(GifSearch.state, this.state.index)
            this.props.fetchCurated(this.state.index)

        // }
        // console.log(GifSearch.state)
    }

    incrementPage = () => {
        if (this.state.index < 8) {
            let newIndex = this.state.index + 1
            this.setState({
                index: newIndex
            })
            //console.log(this.state.index)
        }
    }

    decrementPage = () => {
        if (this.state.index > 1) {
            let newIndex = this.state.index - 1
            this.setState({
                index: newIndex
            })
        }
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <button onClick={this.decrementPage}> prev </button>
                    Page {this.state.index}
                <button onClick={this.incrementPage}> next </button>
            </form>
            <br></br>
        </div>
        )
    }

}

export default Paginate