import React from 'react';               // npm package
import axios from 'axios';               // npm package for ajax calls
import CityResult from './cityResult';   // import CityResult component from cityResult.js file


class App extends React.Component {
  constructor(props) {
    super(props);

    // TO RELATE TO JAVA
    // - States are like class members
    // - These values are expected change
    this.state = {
      zipArr: [],         // Used to hold arr of objects from ajax/fetch get request
      found: false        // Used for when ajax/fetch is successful or failed
    }
  }

  // ---------------------------------------

  /**
   * This method is called by <input /> in the render function. 
   * Specifically by the onChange prop in the <input />!
   * 
   * PLEASE READ DOCUMENTATION to understand how to get form input data
   * @param event {Event Object} - https://www.w3schools.com/jsref/obj_event.asp
   */
  searchCity = ( event ) => {
    let userInput = event.target.value;         // Get the text from <input /> tags from 
    userInput = userInput.toUpperCase();        // Convert the text to upper case (url params are case sensitive)
    console.log(userInput);

    // Makes an ajax/fetch request to URL with the parameter 'userInput'
    //      (Ex: http://ctp-zip-api.herokuapp.com/city/SPRINGFIELD)
    axios.get('http://ctp-zip-api.herokuapp.com/city/' + userInput)
    .then( (res) => {                        // -------- If successful, 'res' contains https response

      // Update both states/variables 'zipArr' and 'found'
      // Then re-render this component (calls render() again)
      this.setState({zipArr : res.data, found : true});
    })
    .catch( (err) => {                       // -------- If failed, 'err' is returned

      // Update 'found' state/variable and re-render 
      // this component (call render() again).
      this.setState({found: false});
    });
  }

  // ---------------------------------------

  render() {
    let comp; // To hold a JSX element/component

    if(this.state.found)  // if ajax get-request was successful...
      comp =<CityResult key='something' zipcodes={(this.state.zipArr)}/>;
    else                  // else ajax get-request failed
      comp = <h2>No results</h2>

    return (
      <div className="App">
        <h1>Enter a City</h1>
        <input type="text" onChange={this.searchCity}/>
        
        {/* This is a comment inside of JSX */}
        {/* 'comp' will either show <CityResult> component or <h2> element */}
        {comp}  
      </div>
    );
  }
}

export default App;
