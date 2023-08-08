import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div>
        I am news component.
        <NewsItem/>
        <NewsItem/>
      </div>
    )
  }
}
