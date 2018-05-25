import React, {Component} from 'react'
import './App.css';
import Search from './Search';
import Table from './Table';


const list = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    point: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://facebook.github.io/redux/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    point: 5,
    objectId: 1,
  },
]

class App extends Component{

constructor(props) {
  super(props);
  this.state = {
    list: list,
    searchTerm: '',
  };
  
  this.onDismiss = this.onDismiss.bind(this);
  this.onSearchChange = this.onSearchChange.bind(this);
}

onDismiss(Id) {
  const updatedList = this.state.list.filter(item => item.objectId !== Id);
  this.setState({ list:updatedList });
}

onSearchChange(event){
 this.setState({ searchTerm: event.target.value});
 }

  render(){
    const { list, searchTerm} = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        />

        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />

      </div>
    )
  }
}

export default App;
