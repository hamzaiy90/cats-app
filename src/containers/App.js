import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      searchField: '',
      starwars: []
    }
    // this.onSearchChange = this.onSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({
        users: data
      }));
  }

  onSearchChange = (e) => {
    this.setState({
      searchField: e.target.value
    });
    console.log(e.target.value);
  }

  render() {
    const { users, searchField } = this.state;
    const filteredList = users.filter(user => {
      return user.name.toLowerCase().includes(searchField);
    });
    if (!users.length) {
      return (
      <div>
        <h3>Loading...</h3>
        <img className="loading" src={`https://media.giphy.com/media/3y0oCOkdKKRi0/giphy.gif`} alt="homer-loading"/>
      </div>
      )
    } else {
      return (
        <div className="main-container">
          <h1>CatFriends</h1>
          <Searchbox onSearchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
            <Cardlist robots={filteredList}/>
            </ErrorBoundry>
          </Scroll>
          <button onClick={this.onClickDisplay}>Display</button>
        </div>
      )
    }
  }
}

export default App
