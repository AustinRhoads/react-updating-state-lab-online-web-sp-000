// Code YouTubeDebugger Component Here
import React from 'react'  



export default class YouTubeDebugger extends React.Component{

    constructor(){
        super()
        this.state ={
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

thingy = () => {

    this.setState({
       settings: {
        ...this.state.settings,
        bitrate: 12
       }
    })
}



dewhicky = () => {
    this.setState({
        settings: {
            ...this.state.settings,
            video: {
                resolution: '720p'
              }
        }
    })
}

    render(){
        return(
            <div>
           <button className='bitrate' onClick={this.thingy}>{this.state.settings.bitrate}</button>
           <button className = "resolution" onClick={this.dewhicky}>{this.state.settings.video.resolution}</button>
           </div>
        )
    }
}