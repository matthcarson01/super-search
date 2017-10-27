import React, { Component } from 'react';
import logo from './bam-logo.svg';
import axios from 'axios';
import './App.css';
import ResultCard from './components/ResultCard/ResultCard';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchResult: []
    };
  this.onSubmit = this.onSubmit.bind(this);
  this.onChange = this.onChange.bind(this);

   }

  onSubmit(event) {
    event.preventDefault();
    this.setState({searchResult:[]});
    axios.get(`/api/heroes/${this.state.userInput}`)
          .then(response => { this.setState({searchResult:response.data.results});
          console.log(this.state.searchResult);
        }).catch(console.log);
  }
  onChange(event){
    this.setState({userInput:event.target.value});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SearchBar onSubmit={this.onSubmit} onChange={this.onChange} />

        </header>
        <main>
          
          {this.state.searchResult.length === 0 && <h4>This Character Not Found!</h4>}
          {this.state.searchResult.length > 0 && <h3>{this.state.searchTerm}</h3>}
          {this.state.searchResult.length > 0 && this.state.searchResult
          .reduce((newArray,entry, ind) => {
            if(entry.image){
              newArray.push(<ResultCard char={entry} key={ind} />)
              return newArray;}
              else{return newArray;}
          },[])}
        </main>
      </div>
    );
  }
}

export default App;
