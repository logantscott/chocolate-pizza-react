import React, { Component } from 'react'
import { recipe } from './recipe.js';
import { articles } from './articles.js';

export default class Body extends Component {

    render() {
        return <main>
        <article>
            <h1>{this.props.title}</h1>
            <div id="content">
                <section id="content">
                    <div id="byline">
                        <span id="article-details">{this.props.details}</span>
                        <span id="print">
                        <img src="./img/print-icon.png" alt="print article" />
                        Print
                        </span>
                    </div>
                    <img src="./img/choco-pizza.png" alt="chocolate pizza" />
                    {articles.chocpizza.content.map((paragraph, i) => (
                        <Article key={i} paragraph={paragraph} />
                    ))}
                </section>
                <section id="recipe" className="recipe">
                    <ul>
                        {recipe.map((listitem, i) => (
                            <Ingredient key={i} listitem={listitem} />
                        ))}

                    </ul>
                </section>
            </div>
        </article>
        <hr />
        <div id="article-footer">
            <div id="author">
                <img src="./img/van-pic.png" alt="biopic" />
                <h3>Vanessa Stevenson</h3>
                <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
            </div>
            <button id="share-recipe">Share Recipe</button>
        </div>
    </main>
    }
}

export class Ingredient extends Component {

    state = {
        toggleClass: false
      };

    toggleFunction = () =>
    this.setState({
      toggleClass: !this.state.toggleClass
    });

    render() {
        return (
            <li 
                onClick={this.toggleFunction} 
                className={this.state.toggleClass ? 'strike': null}
            >
                {this.props.listitem.id}
            </li>
        )
    }
}

export class Article extends Component {

    render() {
        return (
        <p>{this.props.paragraph}</p>
        )
    }
}