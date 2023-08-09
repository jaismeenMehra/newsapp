import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">

        <h2 className="my-4">NewsMonkey - Top Headlines</h2>

        <div className="row">
          <div className="col-md-4">
            <NewsItem title = "my title" description ="news description" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMnw6_7xH7Tl-NQov5ZQNYu6rfQn0RmM_MQ&usqp=CAU"/>
          </div>

          <div className="col-md-4">
            <NewsItem title = "my title" description ="news description" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMnw6_7xH7Tl-NQov5ZQNYu6rfQn0RmM_MQ&usqp=CAU"/>
          </div>

          <div className="col-md-4">
            <NewsItem title = "my title" description ="news description" imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMnw6_7xH7Tl-NQov5ZQNYu6rfQn0RmM_MQ&usqp=CAU"/>
          </div>

        </div>

      </div>
    )
  }
}
