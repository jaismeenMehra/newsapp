import React, { Component } from "react";

export default class NewsItem extends Component {
  // constructor(){
    //   super();
    //   console.log("hello I am a constructor");
    // }
    render() {
      let {title, description, imageUrl,newsUrl, author, date,source} = this.props;
      const d1 =new Date(date);
      const cd = new Date();
      const timeDifferenceMillis = cd - d1;
      const hoursDifference = Math.floor(timeDifferenceMillis / (1000 * 60 * 60));
      
    return (
      <div className="container">
         <div className="card" style={{ width: "18rem" }}>
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    
  </span>
    <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2016/02/01/00/56/news-1172463_640.jpg"} className="card-img-top card-img-size" alt="newsImg" />
    <div className="card-body">
    
      <h5 className="card-title">{title}...</h5>
      
      {hoursDifference <= 27 && <span className="badge bg-danger">New</span>}
      <p className="card-text">
        {description}...
      </p>
      <p className="card-text"><small className="text-muted">By {author?author: "Unknown"} on {d1.toGMTString()}</small></p>
      <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-success">
        Read More
      </a>
    </div>
  </div>
      </div>
    );
  }
}
