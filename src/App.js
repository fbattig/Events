import React, {Component} from 'react'
import './App.css';


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

const isSearched= (searchItem)=> (item) => !searchItem || item.title.toLowerCase().includes(searchItem.toLowerCase());

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
      <form>
        <input 
        value={searchTerm}
        type="text"
        onChange={this.onSearchChange}
         />
      </form>

        {list.filter(isSearched(searchTerm)).map(item => {
          const onHandleDismiss = () => this.onDismiss(item.objectId);
            return (
            <div key={item.objectId}>
              <span>
                < a href={item.url}>{item.title} </a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button onClick={onHandleDismiss}>
                    Dismiss
                </button>
              </span>
            </div>
          )
        }
        )}
      </div>
    )
  }
}

export default App;
