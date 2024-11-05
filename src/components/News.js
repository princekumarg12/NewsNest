import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class New extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general'

  };
  static propTypes = {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
   };
  constructor() {
    super();
    console.log("hello iam a constructor from new component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=${this.props.newsDate}&sortBy=publishedAt&apiKey=9af9fbefa6e74ad7a07cf42df3abca3e&page=1&pageSize=${this.props.pageSize}`;
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=${this.props.newsDate}&sortBy=publishedAt&apiKey=9af9fbefa6e74ad7a07cf42df3abca3e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles || [], totalResults: parsedData.totalResults, loading: false })
  }

  handlePrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=${this.props.newsDate}&sortBy=publishedAt&apiKey=9af9fbefa6e74ad7a07cf42df3abca3e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=${this.props.newsDate}&sortBy=publishedAt&apiKey=9af9fbefa6e74ad7a07cf42df3abca3e&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: parsedData.articles || [],
      page: this.state.page - 1,
      loading: false,
    })
  }
  handleNextClick = async () => {
    if (this.state.page + 1 < Math.ceil(this.state.totalResults / 4)) {
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=${this.props.newsDate}&sortBy=publishedAt&apiKey=9af9fbefa6e74ad7a07cf42df3abca3e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=${this.props.newsDate}&sortBy=publishedAt&apiKey=9af9fbefa6e74ad7a07cf42df3abca3e&page=1&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles: parsedData.articles || [],
        page: this.state.page + 1,
        loading: false,
      })
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsNest - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className='row'>
          {this.state.loading === false && this.state.articles.length > 0 ? (this.state.articles.map((element, index) => {
            return <div className='col-md-4' key={index}>
              <NewsItem title={element.title} description={element.content} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })) : (
            <div className='col-12'>
              <p>No articles available at the moment.</p> {/* Message for empty state */}
            </div>
          )}
        </div>
        <div className='container d-flex justify-content-between m-2'>
          <button type="button" onClick={this.handlePrevClick} className="btn btn-dark">Previous &#8592; </button>
          <button type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &#8594;</button>

        </div>
      </div>
    )
  }
}

export default New
