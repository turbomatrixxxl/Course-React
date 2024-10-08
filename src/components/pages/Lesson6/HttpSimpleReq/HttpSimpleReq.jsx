import React, { Component } from 'react';
import axios from 'axios';

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

class HttpSimpleReq extends Component {
  state = {
    articles: [],
  };

  async componentDidMount() {
    const response = await axios.get(`/search?query=react`);

    this.setState({
      articles: response.data.hits,
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
          <p>Loading HttpSimpleReq...</p>
        )}
      </div>
    );
  }
}

export default HttpSimpleReq;
