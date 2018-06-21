import React, { Component } from 'react';

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
            this.setState({ currentSEK: data.rates.SEK, date: data.date, array: data  })
        },
        (error) => {
            this.setState({ error })
        });
    }
    
    calculateCurrency = () => {
        
    }
    
    


  render() {
     
      console.log(this.state.array)
      let data = this.state.currentSEK
      
    return (
        <React.Fragment>
        <div className="widget col-12 col-sm-6 col-md-4 col-ld-4">
        
            <div className="innerWidget currencyContainer">
                <span className="iconSize">
                    <ion-icon name="cash"></ion-icon>
                </span>
              
                1 EUR = {this.state.SEK} SEK <br/>
                Uppdaterat: {this.state.date}
        <button onClick={this.fetchCurrency} className="btn btn-primary">Update currency</button>
            </div>
        
            
        </div>
</React.Fragment>

        
    );
  }
}

export default Currency;

//
//'http://data.fixer.io/api/latest?access_key=ee41ea7ca9306078507904b7ee45150b&from=EUR&toSEK'
//
// 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount