import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return <footer>
        <div id="footer-hr"><hr /><img src="./img/small-logo.png" alt="footer logo" /><hr /></div>
        <p>{this.props.copyright}</p>
        <p>{this.props.license}</p>
    </footer>
    }
}