import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class New extends Component {
  constructor() {
    super();
    console.log("hello iam a constructor from new component");
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-09-23&sortBy=publishedAt&apiKey=9af9fbefa6e74ad7a07cf42df3abca3e'
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log("my api parsedData:", parsedData);
    this.setState({ articles: parsedData.articles })
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsNest - Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element, index) => {
            return <div className='col-md-4' key={index}>
              <NewsItem title={element.title} description={element.content} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default New
