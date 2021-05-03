import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import '../index.css';
import weather from './weather.json';
import { WiCloud, WiDayCloudy, WiRain, WiDaySunny } from "weather-icons-react";

export default class CurrentDayView extends Component {
    render () {
        var selectLoc = '';
        if(this.props.getLocation === 'Baldwin City, KS'){
            selectLoc = weather.weatherInfo["Baldwin City, KS"].map( (info) =>{
                if(info.day === "Today"){
                    var wIcons = '';
                    if(info.weatherType === "Cloudy"){
                        wIcons = <WiCloud size={90} color='#000' />;
                    }
                    else if(info.weatherType === "Rain"){
                        wIcons = <WiRain size={90} color='#000' />;
                    }
                    else if(info.weatherType === "Partly Cloudy"){
                        wIcons = <WiDayCloudy size={90} color='#000' />;
                    }
                    else if(info.weatherType === "Sunny"){
                        wIcons = <WiDaySunny size={90} color='#000' />;
                    }
                    return (
                        <div>
                            <CardDeck>
                                <Card>
                                    <Card.Header>Current</Card.Header>
                                    <Card.Body>
                                    <Card.Title>{info.currentTemp}</Card.Title>
                                    {wIcons}
                                    </Card.Body>
                                    <Card.Footer>{info.weatherType}</Card.Footer>
                                </Card>                            
                                <Card>
                                    <Card.Header>{info.weatherDescription}</Card.Header>
                                    <Card.Body>
                                    <Card.Title>
                                        <CardDeck>
                                            <Card border="light" >
                                                <Card.Text>High: {info.highTemp}</Card.Text>
                                                <Card.Text>Low: {info.lowTemp}</Card.Text>
                                                <Card.Text>Feels like: {info.feelsLike}</Card.Text>                                            
                                            </Card>
                                            <Card border="light">
                                                <Card.Text>Chance of Rain: {info.chanceOfRain}</Card.Text>
                                                <Card.Text>Humidity: {info.humidity}</Card.Text>
                                                <Card.Text>Wind: {info.wind}</Card.Text>
                                            </Card>
                                        </CardDeck>
                                    </Card.Title>
                                    </Card.Body>
                                </Card>                            
                            </CardDeck>
                        </div>
                    )                         
                }
            })
        }
        else if(this.props.getLocation === 'Kansas City, MO'){
            selectLoc = weather.weatherInfo["Kansas City, MO"].map( (info) =>{
                if(info.day === "Today"){
                    var wIcons = '';
                    if(info.weatherType === "Cloudy"){
                        wIcons = <WiCloud size={90} color='#000' />;
                    }
                    else if(info.weatherType === "Rain"){
                        wIcons = <WiRain size={90} color='#000' />;
                    }
                    else if(info.weatherType === "Partly Cloudy"){
                        wIcons = <WiDayCloudy size={90} color='#000' />;
                    }
                    else if(info.weatherType === "Sunny"){
                        wIcons = <WiDaySunny size={90} color='#000' />;
                    }
                    return (
                        <div>
                            <CardDeck>
                                <Card>
                                    <Card.Header>Current</Card.Header>
                                    <Card.Body>
                                    <Card.Title>{info.currentTemp}</Card.Title>
                                    {wIcons}
                                    </Card.Body>
                                    <Card.Footer>{info.weatherType}</Card.Footer>
                                </Card>                            
                                <Card>
                                    <Card.Header>{info.weatherDescription}</Card.Header>
                                    <Card.Body>
                                    <Card.Title>
                                        <CardDeck>
                                            <Card border="light" >
                                                <Card.Text>High: {info.highTemp}</Card.Text>
                                                <Card.Text>Low: {info.lowTemp}</Card.Text>
                                                <Card.Text>Feels like: {info.feelsLike}</Card.Text>                                            
                                            </Card>
                                            <Card border="light">
                                                <Card.Text>Chance of Rain: {info.chanceOfRain}</Card.Text>
                                                <Card.Text>Humidity: {info.humidity}</Card.Text>
                                                <Card.Text>Wind: {info.wind}</Card.Text>
                                            </Card>
                                        </CardDeck>
                                    </Card.Title>
                                    </Card.Body>
                                </Card>                            
                            </CardDeck>
                        </div>
                    )                         
                }
            })
        }
        else if(this.props.getLocation === 'Raytown, MO'){
            selectLoc = weather.weatherInfo["Raytown, MO"].map( (info) =>{
                if(info.day === "Today"){
                    var wIcons = '';
                    if(info.weatherType === "Cloudy"){
                        wIcons = <WiCloud size={90} color='#000' />;
                    }
                    else if(info.weatherType === "Rain"){
                        wIcons = <WiRain size={90} color='#000' />;
                    }
                    else if(info.weatherType === "Partly Cloudy"){
                        wIcons = <WiDayCloudy size={90} color='#000' />;
                    }
                    else if(info.weatherType === "Sunny"){
                        wIcons = <WiDaySunny size={90} color='#000' />;
                    }
                    return (
                        <div>
                            <CardDeck>
                                <Card>
                                    <Card.Header>Current</Card.Header>
                                    <Card.Body>
                                    <Card.Title>{info.currentTemp}</Card.Title>
                                    {wIcons}
                                    </Card.Body>
                                    <Card.Footer>{info.weatherType}</Card.Footer>
                                </Card>                            
                                <Card>
                                    <Card.Header>{info.weatherDescription}</Card.Header>
                                    <Card.Body>
                                    <Card.Title>
                                        <CardDeck>
                                            <Card border="light" >
                                                <Card.Text>High: {info.highTemp}</Card.Text>
                                                <Card.Text>Low: {info.lowTemp}</Card.Text>
                                                <Card.Text>Feels like: {info.feelsLike}</Card.Text>                                            
                                            </Card>
                                            <Card border="light">
                                                <Card.Text>Chance of Rain: {info.chanceOfRain}</Card.Text>
                                                <Card.Text>Humidity: {info.humidity}</Card.Text>
                                                <Card.Text>Wind: {info.wind}</Card.Text>
                                            </Card>
                                        </CardDeck>
                                    </Card.Title>
                                    </Card.Body>
                                </Card>                            
                            </CardDeck>
                        </div>
                    )                         
                }
            })
        }
        return ( selectLoc )
    }
}