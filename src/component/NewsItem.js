import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title, description,imageUrl,newsUrl}=this.props
    return (
      <div>
       <div className="card" style={{width:" 18rem"}}>
            <img src={imageUrl?imageUrl:"https://static.toiimg.com/thumb/msid-107465975,width-1070,height-580,imgsize-1531606,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} className="card-img-top" alt="..."/>
       <div className="card-body">
             <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">Read more</a>
        </div>
    </div>
      </div>
    )
  }
}

export default NewsItem
