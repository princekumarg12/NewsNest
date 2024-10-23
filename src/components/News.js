import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class New extends Component {
  articles = [
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Officer who shot Chris Kaba did nothing wrong, colleague says",
      "description": "Mr Kaba's family say Martyn Blake's aquittal has failed \"all those affected by police violence\".",
      "url": "https://www.bbc.co.uk/news/articles/ce8d8grkzyyo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1864/live/a9ec6600-9045-11ef-b662-41b5b09eed2d.jpg",
      "publishedAt": "2024-10-22T10:07:16.2547112Z",
      "content": "Mr Blake's former colleague, who asked not to be named and has since left the force, told the BBC's Today programme that he believed a system similar to Army court martials would be more appropriate … [+1019 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Sports announced for Glasgow 2026 Commonwealth Games",
      "description": "The scaled-down games will feature 10 sports across four venues between 23 July and 2 August 2026.",
      "url": "https://www.bbc.co.uk/news/articles/cly3yv91595o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/116c/live/b18ed740-8fd1-11ef-80a8-4be99bc37a5c.jpg",
      "publishedAt": "2024-10-22T08:52:13.1068115Z",
      "content": "Analysis by Chris McLaughlin, BBC Scotland sports news correspondent\r\nOrganisers have spent the past few weeks in talks with sporting bodies and delivering the news to some that they must sit this on… [+1061 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Government borrowing for September third highest on record",
      "description": "Borrowing - the difference between spending and tax revenue - came in lower than expected on Tuesday.",
      "url": "https://www.bbc.co.uk/news/articles/c981857nl79o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/3fbb/live/996800f0-8fb4-11ef-b404-7961912ff1c6.jpg",
      "publishedAt": "2024-10-22T07:07:16.2784453Z",
      "content": "Government borrowing rose last month, marking the third-highest September since records began in January 1993.\r\nOfficial figures show that borrowing - the difference between spending and tax revenue … [+283 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Vladimir Putin hosts Brics summit to show West pressure not working",
      "description": "Russian President Vladimir Putin is welcoming more than 20 world leaders to the Brics summit.",
      "url": "https://www.bbc.co.uk/news/articles/cly3ylwg4eqo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/8bfc/live/bfb9eaa0-8fc0-11ef-be67-d3b2237ffc84.jpg",
      "publishedAt": "2024-10-22T06:07:10.5119407Z",
      "content": "Russian officials have indicated that another 30 countries want to join Brics or seek closer ties with the club. Some of these nations will take part in the summit. In Kazan this week expect a lot of… [+2719 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Water bills set to rise by more than expected",
      "description": "The regulator will allow higher bills to fund growing costs and investment, the BBC understands.",
      "url": "https://www.bbc.co.uk/news/articles/c8elewdzy59o",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/be27/live/5629ca00-8fd5-11ef-80a8-4be99bc37a5c.jpg",
      "publishedAt": "2024-10-22T02:37:13.4838714Z",
      "content": "Later this week, the government will also announce plans that are expected to lead to the biggest overhaul of the water industry since privatisation in the late 1980s. \r\nThe aim is to protect custome… [+909 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "S2 meteorite: What happened when a rock as big as London hit Earth?",
      "description": "It was 200 times bigger than the one that wiped out the dinosaurs nearly three billion years later.",
      "url": "https://www.bbc.co.uk/news/articles/c4g4g455p8lo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/96b6/live/eeb3f650-8fc7-11ef-8e6d-e3e64e16c628.jpg",
      "publishedAt": "2024-10-22T02:22:13.590683Z",
      "content": "These impacts are similar to what geologists have found about other big meteorite impacts and what was suspected for S2.\r\nBut what Prof Drabon and her team found next was surprising. The rock evidenc… [+993 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "More prisoners to be freed early to ease overcrowding in jails",
      "description": "Some 1,100 prisoners will be released, excluding those convicted of murder, sex crimes and terrorism.",
      "url": "https://www.bbc.co.uk/news/articles/cly6y67dkpzo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/2d83/live/1944db80-8fcf-11ef-b3c2-754b6219680e.jpg",
      "publishedAt": "2024-10-22T02:07:10.2311458Z",
      "content": "One of Labour's first acts after winning the election was to implement the early release scheme, drawn up by the previous government.\r\nUnder the initiative, prisoners can be let out if they have comp… [+1162 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Newspaper headlines: 'Gun cop cleared' and 'workplace reforms could cost £5bn'",
      "description": "The acquittal of the policeman who shot Chris Kaba and plans for new workers' rights lead the papers.",
      "url": "https://www.bbc.co.uk/news/articles/cp3931el05zo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/d38f/live/8a389090-8fff-11ef-89ae-5575c76d98e6.png",
      "publishedAt": "2024-10-22T01:07:13.4814079Z",
      "content": "Image caption, The news that police officer Martyn Blake has been cleared of the murder of Chris Kaba, who was shot during a police stop in south London in 2022, leads many of the papers. At the time… [+226 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "ITV newsreader Andrea Byrne: 'Infertility made me feel so guilty'",
      "description": "Andrea Byrne says she felt her husband would be \"better off\" without her during fertility treatment.",
      "url": "https://www.bbc.co.uk/news/articles/cwylz8d1q2qo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/969e/live/9c952930-8fad-11ef-89ae-5575c76d98e6.png",
      "publishedAt": "2024-10-22T01:07:12.4504141Z",
      "content": "Byrne, who also hosts the Making Babies fertility podcast, said writing her book was \"emotional\" and \"in a way cathartic\".\r\n\"I know its a bit of a cliched word but it does provide a little bit of clo… [+1302 chars]"
    },
    {
      "source": { "id": "bbc-news", "name": "BBC News" },
      "author": "BBC News",
      "title": "Two trains crash in Powys blocking lines and closing road",
      "description": "There is a large emergency services presence at the scene, residents say.",
      "url": "https://www.bbc.co.uk/news/articles/c5y0yg7m8meo",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/e0a6/live/fb523fa0-8fec-11ef-a321-c556fffa7976.jpg",
      "publishedAt": "2024-10-21T21:37:15.4185842Z",
      "content": "Emergency services are at the scene after two trains crashed.\r\nNetwork Rail and Transport for Wales (TfW) said the crash happened between the 18:31 BST service from Shrewsbury to Aberystwyth and the … [+295 chars]"
    }
  ]
  constructor() {
    super();
    console.log("hello iam a constructor from new component");
    this.state = {
      articles: this.articles,
      loading: false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        {/* {this.state.articles.map((element) => { console.log(element) })} */}
        <div className='row'>
          {this.state.articles.map(element => {
            return <div className='col-md-4' key={element.url}>
              <NewsItem title={element.title} description={element.content} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default New
