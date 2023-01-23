import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {

    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "80%", margin: '0 auto' }}>
          <div className='d-flex justify-content-end position-absolute' style={{right: 0}}>
            <span className="badge rounded-pill bg-danger">
              {source} </span>
          </div>
          <img src={imageUrl ? imageUrl : "https://image.cnbcfm.com/api/v1/image/107180284-1674053147436-gettyimages-1246313067-TESLA_MUSK_COURT.jpeg?v=1674266885&w=1920&h=1080"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <span className="badge rounded-pill text-bg-primary">verified&#10003;</span>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
