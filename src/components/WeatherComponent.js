import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import weather from './weather.json';

export default class WeatherComponent extends Component {
    render() {
        var selectLoc = '';
        if(this.props.getLocation === 'Baldwin City, KS'){
            selectLoc = weather.weatherInfo["Baldwin City, KS"].map( (info) =>{
                return (
                    <Card>
                        <Card.Header>{info.day}</Card.Header>
                        <Card.Body>
                            <Card.Title>{info.currentTemp}</Card.Title>
                        </Card.Body>
                    </Card>
                )
            })
        }
        else if(this.props.getLocation === 'Kansas City, MO'){
            selectLoc = weather.weatherInfo["Kansas City, MO"].map( (info) =>{
                return (
                    <Card>
                        <Card.Header>{info.day}</Card.Header>
                        <Card.Body>
                            <Card.Title>{info.currentTemp}</Card.Title>
                        </Card.Body>
                    </Card>
                )
            })
        }
        else if(this.props.getLocation === 'Raytown, MO'){
            selectLoc = weather.weatherInfo["Raytown, MO"].map( (info) =>{
                return (
                    <Card>
                        <Card.Header>{info.day}</Card.Header>
                        <Card.Body>
                            <Card.Title>{info.currentTemp}</Card.Title>
                        </Card.Body>
                    </Card>
                )
            })
        }
        
        return (
            <p>
                <CardDeck>{selectLoc}</CardDeck>
            </p>
            
        )
    }
    /* componentDidMount() {
        var location = this.loc.SelectLocationComponent();
        const selectLoc = weather.weatherInfo[location].map( (info) =>{
            return (
                <Card>
                    <Card.Header>{info.day}</Card.Header>
                    <Card.Body>
                        <Card.Title>{info.currentTemp}</Card.Title>
                    </Card.Body>
                </Card>
            )
        })
        return (
            <CardDeck>{selectLoc}</CardDeck>
        )
    } */
}
