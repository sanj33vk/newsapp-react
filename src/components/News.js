import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor(){
    super();
    console.log('this is constructor');
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }
  async componentDidMount(){
    let url ='https://newsapi.org/v2/top-headlines?country=in&apiKey=4b1f7b3cce00474a90d18098beddd700&page=1&pageSize=20';
    let data = await fetch(url);
    let parsedData = await data.json(); 
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }
  handlePrevClick= async ()=>{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=4b1f7b3cce00474a90d18098beddd700&
    page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    console.log(parsedData);
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles
    })
  }
  handleNextClick= async ()=>{
    if(this.state.page+1 >Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=4b1f7b3cce00474a90d18098beddd700&
    page=${this.state.page+1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json(); 
    console.log(parsedData);
    this.setState({
      page: this.state.page+1,
      articles: parsedData.articles
    })
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Newsapp: Top Headlines!</h2>
        <div className='row'>
        {this.state.articles.map((element)=>{
            return <div className='col-md-4' key= {element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):''} 
                description={element.description?element.description.slice(0,90):''} 
                imgUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
        })}
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}> &larr; Prev</button>
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>

        </div>
      </div>
    )
  }
}
