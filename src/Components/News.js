import React, { Component } from "react";
import NewsItem from "./NewsItem";
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b8539e5ef0564e018412bb0393bc46cb&page=1&pagesize=12";
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b8539e5ef0564e018412bb0393bc46cb
    &page=${
      this.state.page - 1
    }&pagesize=12`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {
    }
     else {
      let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b8539e5ef0564e018412bb0393bc46cb
      &page=${
        this.state.page + 1
      }&pagesize=12`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="my-4">NewsMonkey - Top Headlines</h2>

        <div className="row">
          {this.state.articles &&
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
            {" "}
            &larr; Previous
          </button>
          <button className="btn btn-success" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
