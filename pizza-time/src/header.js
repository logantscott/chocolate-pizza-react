import React, { Component } from 'react'
import { headerLinks } from './headerLinks.js';

export default class Header extends Component {
    render() {
        return <header>
                <div id="header-content">
                <div id="logo-header">
                    <img src={this.props.logo} alt="logo" className="App-logo" />
                    <span id="company">{this.props.title}</span>
                    <span id="motto">{this.props.motto}</span>
                </div>
                <div id="share-header">
                    {headerLinks.map(headerLink => (
                        <HeaderLinks key={headerLink.id} headerLink={headerLink} />
                    ))} 
                </div>
            </div>
            <hr />
        </header>
    }
}

export class HeaderLinks extends Component {
    render() {
        return ( 
                <a href={this.props.headerLink.href}>
                    <img 
                        src={this.props.headerLink.img} 
                        className={this.props.headerLink.className} 
                        alt={this.props.headerLink.alt} 
                    />
                </a>
        )
    }
}