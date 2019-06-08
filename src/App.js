import React from 'react';
import axios from 'axios';
import './App.css';
import CityResult from './cityResult';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipArr: [],
      found: false
    }
  }


  searchCity = ( event ) => {
    let userInput = event.target.value;
    userInput = userInput.toUpperCase();
    console.log(userInput);

    axios.get('http://ctp-zip-api.herokuapp.com/city/'+userInput)
    .then((res)=> {
      //console.log(res)
      this.setState({zipArr : res.data, found : true});
    })
    .catch((err) => { 
      // console.log("Didnt work :( ==>"+err) 
      this.setState({found: false});
    });
  }

  render() {
    let comp;
    if(this.state.found)
      comp =<CityResult key='something' zipcodes={(this.state.zipArr)}/>;
    else 
      comp = <h2>No results</h2>

    return (
      <div className="App">
        <h1>Enter a City</h1>
        <input type="text" onChange={this.searchCity}/>
        {comp}
        
      </div>
    );
  }
}

export default App;
