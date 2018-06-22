import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
import Heading from './Heading'

class Currency extends Component {
    
    state = {
        currentSEK: '',
        date: '',
        array: []
      }

    componentDidMount() {
        this.fetchCurrency();
    }


    fetchCurrency = () => {
        fetch('http://data.fixer.io/api/latest?access_key=ee41ea7ca9306078507904b7ee45150b')
        .then(response => response.json())
        .then((data) => {
            this.setState({ currentSEK: data.rates.SEK.toFixed(2), date: data.date, array: data  })
        },
        (error) => {
            this.setState({ error })
        });
    }
    
    calculateCurrency = () => {
        
    }
    
    


  render() {

      
    return (

        <Widget widgetStyling="currencyContainer">
        

                <Icon icon="cash" />
                <Heading heading="Exchange rate" />
              
                1 EUR = {this.state.currentSEK} SEK <br/>
                Uppdaterat: {this.state.date}
        <button onClick={this.fetchCurrency} className="btn btn-primary">Update currency</button>
        
            
        </Widget>

        
    );
  }
}

export default Currency;

//
//'http://data.fixer.io/api/latest?access_key=ee41ea7ca9306078507904b7ee45150b&from=EUR&toSEK'
//
// 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount