import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">
        <div
          className="spinner-border mt-2"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      </div>
    )
  }
}
