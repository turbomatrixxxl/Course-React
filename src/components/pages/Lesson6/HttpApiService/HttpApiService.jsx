import { Component } from 'react';
import axios from 'axios';
import api from '../../../../apiServices/api';
// import fetchArticlesWithQuerry from 'apiServices/api';

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

class HttpApiService extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const articles = api.fetchArticlesWithQuery('react');
      console.log(articles);
      this.setState({ articles });
    } catch (error) {
      this.setState({ ...this.state, error: error });
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
        {isLoading && <p>Loading HttpApiService...</p>}
        {articles.length > 0 && <ArticleList articles={articles} />}
      </div>
    );
  }
}

export default HttpApiService;
