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

class HttpErrLoading extends Component {
  state = {
    articles: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await axios.get(`/search?query=react`);

    this.setState({
      articles: response.data.hits,
      isLoading: false,
    });
  }

  render() {
    // console.log(this.state);
    const { articles } = this.state;
    return (
      <div>
        {articles.length > 0 ? (
          <ArticleList articles={articles} />
        ) : (
          <p>Loading HttpErrLoading...</p>
        )}
      </div>
    );
  }
}

export default HttpErrLoading;
