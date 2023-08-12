import React, { Component } from "react";

export default class NewsItem extends Component {
  // constructor(){
  //   super();
  //   console.log("hello I am a constructor");
  // }
  render() {
    let {title, description, imageUrl,newsUrl} = this.props;
    return (
      <div>
         <div className="card" style={{ width: "18rem" }}>
    <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg"} className="card-img-top card-img-size" alt="newsImg" />
    <div className="card-body">
      <h5 className="card-title">{title}...</h5>
      <p className="card-text">
        {description}...
      </p>
      <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">
        Read More
      </a>
    </div>
  </div>
      </div>
    );
  }
}
