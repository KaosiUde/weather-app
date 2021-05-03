import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import weather from './weather.json';
import { WiCloud, WiDayCloudy, WiRain, WiDaySunny } from "weather-icons-react";

export default class MultiDayView extends Component {
    render() {
        var selectLoc = '';
        if(this.props.getLocation === 'Baldwin City, KS'){
            selectLoc = weather.weatherInfo["Baldwin City, KS"].map( (info) =>{
                var wIcons = '';
                if(info.weatherType === "Cloudy"){
                    wIcons = <WiCloud size={55} color='#000' />;
                }
                else if(info.weatherType === "Rain"){
                    wIcons = <WiRain size={55} color='#000' />;
                }
                else if(info.weatherType === "Partly Cloudy"){
                    wIcons = <WiDayCloudy size={55} color='#000' />;
                }
                else if(info.weatherType === "Sunny"){
                    wIcons = <WiDaySunny size={55} color='#000' />;
                }
                return (
                    <Card>
                        <Card.Header>{info.day}</Card.Header>
                        <Card.Body>
                            <Card.Title>H:{info.highTemp} L:{info.lowTemp}</Card.Title>
                            {wIcons}
                        </Card.Body>
                        <Card.Footer>{info.weatherType}</Card.Footer>
                    </Card>
                )
            })
        }
        else if(this.props.getLocation === 'Kansas City, MO'){
            selectLoc = weather.weatherInfo["Kansas City, MO"].map( (info) =>{
                var wIcons = '';
                if(info.weatherType === "Cloudy"){
                    wIcons = <WiCloud size={55} color='#000' />;
                }
                else if(info.weatherType === "Rain"){
                    wIcons = <WiRain size={55} color='#000' />;
                }
                else if(info.weatherType === "Partly Cloudy"){
                    wIcons = <WiDayCloudy size={55} color='#000' />;
                }
                else if(info.weatherType === "Sunny"){
                    wIcons = <WiDaySunny size={55} color='#000' />;
                }
                return (
                    <Card>
                        <Card.Header>{info.day}</Card.Header>
                        <Card.Body>
                            <Card.Title>H:{info.highTemp} L:{info.lowTemp}</Card.Title>
                            {wIcons}
                        </Card.Body>
                        <Card.Footer>{info.weatherType}</Card.Footer>
                    </Card>
                )
            })
        }
        else if(this.props.getLocation === 'Raytown, MO'){
            selectLoc = weather.weatherInfo["Raytown, MO"].map( (info) =>{
                var wIcons = '';
                if(info.weatherType === "Cloudy"){
                    wIcons = <WiCloud size={55} color='#000' />;
                }
                else if(info.weatherType === "Rain"){
                    wIcons = <WiRain size={55} color='#000' />;
                }
                else if(info.weatherType === "Partly Cloudy"){
                    wIcons = <WiDayCloudy size={55} color='#000' />;
                }
                else if(info.weatherType === "Sunny"){
                    wIcons = <WiDaySunny size={55} color='#000' />;
                }
                return (
                    <Card>
                        <Card.Header>{info.day}</Card.Header>
                        <Card.Body>
                            <Card.Title>H:{info.highTemp} L:{info.lowTemp}</Card.Title>
                            {wIcons}
                        </Card.Body>
                        <Card.Footer>{info.weatherType}</Card.Footer>
                    </Card>
                )
            })
        }
        
        return (
                <CardDeck>{selectLoc}</CardDeck>            
        )
    }
}
