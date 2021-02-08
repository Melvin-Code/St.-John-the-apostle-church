import React, { Component } from 'react'

export default class AboutCards extends Component {
    render() {
        return (<div className="wraper">
            <div id={this.props.ids} className="about-card">
            <div className={this.props.year? 'year': ''} >
                {this.props.year}
            </div>
            <p> &nbsp; &nbsp; &nbsp; &nbsp;{
                this.props.content
            }</p>
          </div>
          </div>
        )
    }
}
