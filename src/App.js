import React, {Component} from 'react';
import "./App.css"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faHandPointer} from '@fortawesome/free-solid-svg-icons';
import {faTwitter} from  '@fortawesome/free-brands-svg-icons';
import {getQuotes} from './static-data';



let quotes = [];
class App extends Component {
  
  constructor(props){
      super(props);
      this.state = null;
      this.newQuote = this.newQuote.bind(this);
  }

  newQuote(){
     let rand = Math.floor(Math.random() * 10);
     this.setState({
       quote: quotes[rand].quote,
       author: quotes[rand].author
     });
  }


  componentDidMount(){
      quotes = getQuotes(10);
      let rand = Math.floor(Math.random() * 10);
      this.setState({quote: quotes[rand].quote, author: quotes[rand].author })
  }

  render(){
    return(
      <div id = "quote-box">
        {
          (!this.state)? 
          <div id ="quote">Please Wait</div>
          : 
          <div id = "quote-box">
            <Text quote = {this.state.quote} author = {this.state.author}/>
            <Buttons clickHandler = {this.newQuote} quote = {this.state.quote} author= {this.state.author}/>
          </div>
        }
      </div>
      
    );
  }
  
}

const Text = (props)=>{
  const {quote, author} = props;
  return (
      <>
          <div id = "quote">
            <FontAwesomeIcon icon = {faQuoteLeft} style ={{fontSize: "1.0em", marginRight: "0.4em" }} />
            {quote}
        </div>
        <span id = "author"> -{author}</span>
      </>
  );
}

const Buttons =(props)=>{
 const {quote, author} = props;
  let url = "https://www.twitter.com/intent/tweet?text="+quote+encodeURIComponent('#')+author.replace(/\s+/g, '');
  return (
    
    <div className = "buttons">
          
          <a href ={url} title="Tweet this quote!" rel ="noopener noreferrer" target="_blank" className= "btn btn-danger twitter-share-button" id ="tweet-code"><FontAwesomeIcon icon= {faTwitter} /> </a>
         <button id = "new-quote" onClick = {props.clickHandler} className = "btn btn-danger"> <FontAwesomeIcon icon ={faHandPointer} /></button> 
    </div>
  );
}

export default App;
