import React, { Component } from 'react';
import Widget from './Widget'
import Div from './Div'
import Icon from './Icon'
import Heading from './Heading'

class Weather extends Component {
    
    state = {
        weather: '',
        weatherDescription: '',
        weatherTemp: '',
        weaterIcon: '',
        weaterIcon2: ''
      }

      componentDidMount() {
          this.fetchWeather();

      }

      

     fetchWeather = () => {
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=Stockholm&units=metric&id=2673722&APPID=8244bd30246e88c12211bc724930e918')
            .then(response => response.json())
            .then((data) => {
                this.setState({ weather: data.list["0"], 
                               weatherDescription: data.list["0"].weather["0"].description, 
                               weatherTemp: data.list["0"].main.temp,
                               weatherIcon: data.list["0"].weather["0"].icon,
                               weatherIcon2: 'http://openweathermap.org/img/w/' + data.list["0"].weather["0"].icon + '.png'
                              })
            },
            (error) => {
                this.setState({ error })
            });
        }
     
        weatherTips = () => {
            let description = this.state.weatherDescription;
            let temp = this.state.weatherTemp;
            
            let rain = description.search("rain");
            if(rain >= 0){ return "don't forget to bring an umbrella!";}
            
            let sun = description.search("sun");
            if((sun >= 0) && (temp > 26)){ return "so off to the beach!?";}
            
            let scatteredClouds = description.search("scattered");
            if(scatteredClouds >= 0){ return "anything is possible!";}

//            if(temp < 0){ return "let's just stay inside, shall we?";}
        }

  render() {
      //forecast?q=' + city + '&units=metric
      
      console.log(this.state.weatherDescription)
      
      var str = this.state.weatherDescription;
        var n = str.search("scattered");
      console.log(n);
    
    return (
        <Widget widgetStyling="weatherContainer">

        
                <Icon icon="cloud" />
                <Heading heading="Weather" />
        
                <Div extraDivClass="currentWeatherIcon">
                    <img src={'http://download.spinetix.com/content/widgets/icons/weather/' + this.state.weatherIcon + '.png'}
                          alt='weather icon'>
                    </img>
        
                </Div>
        
                <Div style="width:100%;text-align:center;">
                    <span className="textBig"> {this.state.weatherTemp} °C </span>
                </Div>
        
                <Div style="width:90%;text-align:center;">
                    <span className="textSubtle"> It's {this.state.weatherDescription} outside, </span>
                </Div>
        
                <Div style="width:90%;text-align:center;">
                    <span className="textSubtle"> {this.weatherTips()} </span>
                </Div>

        
        
        
    
        

  

        
        </Widget>


        
    );
  }
}

export default Weather;
