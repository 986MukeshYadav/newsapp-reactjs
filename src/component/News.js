import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country:'in',
    pageSize:6
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number
  }
 
  capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  
}
    //articles =[]

    constructor(props){
        super(props);
        console.log("Hello I am a Constructor form News Component")
        this.state ={
            articles:[],
            loading:false,
            page:1,
            totalResults:0,
        
          
        }
        document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsTak`;
    }
    async updateNews(){
      this.props.setProgress(10);
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      this.props.setProgress(30);
      let parsedData = await data.json()
      this.props.setProgress(70);
      this.setState({articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
      });
      this.props.setProgress(100);
    }
    async componentDidMount(){
       this.updateNews();
    }

    handlePrevClick= async () => {
        this.setState({ page:this.state.page - 1});
        this.updateNews();
    }

    handleNextClick= async () => {
        this.setState({ page:this.state.page + 1});
        this.updateNews();
    }
  
    
  fetchMoreData = async () => {
    this.setState({page:this.state.page + 1})
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({
        articles:this.state.articles.concat(parsedData.articles),
        totalResults:parsedData.totalResults
      });
    }
  



  render() {
    return (
      <>
        <h2 className='text-center' style={{margin:"35px 0px"}}>NewsTak - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
       {this.state.loading && <Spinner/>}

       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >

        <div className="continer">
        <div className='row'>
         {this.state.articles.map((element)=>{
                return <div className='col-md-3' key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} 
                description={element.description?element.description.slice(0,85):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
               date={element.publishedAt}
               source={element.source.name}
                
                />
        </div>
        })}
    </div>
    </div>
    </InfiniteScroll>
      </>
      
      
    )
  }
}

export default News

