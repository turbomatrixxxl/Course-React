import React, { Component } from 'react';
import axios from 'axios';
// import clsx from 'clsx';

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(({ objectID, url, title }) => (
      <li key={objectID}>
        <a href={url} target="_blank" rel="noreferrer noopener">
          {title}
        </a>
      </li>
    ))}
  </ul>
);

class HttpErr extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get('/search?query=react');
      this.setState({ articles: response.data.hits });

      this.setState({ articles: response.data.hits });
    } catch (error) {
      this.setState({ error: `Cautarea a avut ca rezultat: ${error.message}` });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    // console.log(this.state.articles);
    const { articles, error, isLoading } = this.state;

    return (
      <div>
        {error && <p>{error}</p>}
        {isLoading && <p>Loading HttpErr...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default HttpErr;
