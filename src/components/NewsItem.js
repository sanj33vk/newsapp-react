import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, description, imgUrl, url} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <img src={!imgUrl?'https://images.livemint.com/img/2023/01/21/600x338/Navy_1674306746511_1674306746743_1674306746743.jpg':imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={url} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
        </div>
        </div>
      </div>
    )
  }
}
