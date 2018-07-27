import React, { Component } from 'react';
import config from './config.json';
import './news.css';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            status: "",
            articles: []
        }
    }

    componentDidMount() {
        this.refresh();
        this.intervalID = setInterval(
            () => this.refresh(),
            1000 * 600
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    refresh() {
        fetch('https://newsapi.org/v2/top-headlines?country='+config.country+'&apiKey='+config.apikey)
        .then(response => response.json())
        .then(data => this.setState({
            loaded: true,
            status: data.status,
            articles: data.articles
        }))
    }

    render() {
        if (!this.state.loaded)
            return(<p>Loading...</p>);
        if (this.state.status !== "ok")
            return(<p>Could not load news: "{this.state.status}"</p>);
        return (
        <div className="news">
            {this.state.articles.slice(0,3).map(article => this.renderArticle(article))}
        </div>)
    }

    renderArticle(article) {
        return (
            <div key={article.url} className="news-article">
                <div className="news-article-header">{article.title}</div>
                <div className="news-article-body">{article.description}</div>
            </div>
        );
    }
}

export default News;