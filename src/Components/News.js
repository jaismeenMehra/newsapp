import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';




export default class News extends Component {
  static defaultProps={
    pageSize : 9,
    country: 'in',
    category: "general",  

  }

  static propTypes ={
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,

  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }


async updateNews(){
  const url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8539e5ef0564e018412bb0393bc46cb&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });

}

  async componentDidMount() {
    this.updateNews();
    
  }

  handlePrevClick = async () => {
    this.setState({page: this.state.page -1});
    this.updateNews();
  };

  handleNextClick = async () => {
    
    this.setState({page: this.state.page +1});
    this.updateNews();
    
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="my-4 text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner/>}


        <div className="row">
          { !this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="col-lg-4  col-md-6 col-sm-12 my-4"
                  key={element.url}
                >
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author ={ element.author}
                    date = {element.publishedAt}
                    source = {element.source.name}
                  />
                </div>
              );
            })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-success"
            onClick={this.handlePrevClick}
          >
            
            &larr; Previous
          </button>
          <button 
            disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) }
            className="btn btn-success" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
