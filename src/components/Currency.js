import React, { Component } from 'react';

class Currency extends Component {
    
    state = {
        currencyData: ''
      }

    componentDidMount() {
        this.fetchCurrency();
    }


    fetchCurrency = () => {
        fetch('http://data.fixer.io/api/latest?access_key=ee41ea7ca9306078507904b7ee45150b')
        .then(response => response.json())
        .then((data) => {
            this.setState({ currencyData: data })
        },
        (error) => {
            this.setState({ error })
        });
    }


  render() {
      
      console.log(this.state.currencyData);
      
    return (
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
        
            <div className="innerWidget currencyContainer">
                <span className="iconSize">
                    <ion-icon name="cash"></ion-icon>
                </span>
                1 EUR
            </div>
        
        </div>


        
    );
  }
}

export default Currency;

//
//'http://data.fixer.io/api/latest?access_key=ee41ea7ca9306078507904b7ee45150b&from=EUR&toSEK'
//
// 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount