import React from 'react';

class CityResult extends React.Component {

  render() {
    let elems = [];   // used to hold many JSX elements

    /*
      // Maps string zipcodes to JSX elements - METHOD 1 {fancy ES6 syntax}
      elems = this.props.zipcodes.map((elem, index) => {
              return (<div>
                        <label key={index}>{elem}</label>
                      </div>)
      });
    */

    // Can also be done with a normal for-loop - METHOD 2 {traditional javascript}
    for(let i=0; i<this.props.zipcodes.length; ++i) {
      let strZipCode = this.props.zipcodes[i];
      elems.push( <div>  <label key={i}> {strZipCode} </label>  </div>);
    }

    
    
    return (
      <div>
        <h3>Result</h3>
        {elems}
      </div>
    );
  }
}

export default CityResult;