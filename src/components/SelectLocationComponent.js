import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import MultiDayView from "./MultiDayView";
import CurrentDayView from './CurrentDayView';


 export default class SelectLocationComponent extends Component{
    constructor(props) {
        super(props);
        this.state = { viewOption: 1, location: []}
        this.handleSelect = this.handleSelect.bind(this);
        this.onClick = this.onClick.bind(this);
        this.multi = this.multi.bind(this);
    }

    handleSelect=(e)=>{
        this.setState({location: e})
    } 
    onClick(){
        this.setState({viewOption: 2})
    }
    multi(){
        this.setState({viewOption: 1})
    }

    selectView(){
        var view = '';
        if(this.state.viewOption === 1){
            view = <MultiDayView getLocation={this.state.location}/>;
        }
        else if(this.state.viewOption === 2){
            view = <CurrentDayView getLocation={this.state.location}/>;
        }
        return (
            <div>
                {view}
            </div>
        )
    }

    render(){
        return(
            <div>
                <Card className="text-center">
                <Card.Header>
                    <div> Select a Location: 
                    <DropdownButton onSelect={this.handleSelect} title={this.state.location}>
                        <Dropdown.Item eventKey="Baldwin City, KS">Baldwin City, KS</Dropdown.Item>
                        <Dropdown.Item eventKey="Kansas City, MO">Kansas City, MO</Dropdown.Item>
                        <Dropdown.Item eventKey="Raytown, MO">Raytown, MO</Dropdown.Item>
                    </DropdownButton>
                    </div>
                </Card.Header>
                <Card.Body>
                    {this.selectView()}
                </Card.Body>
                <Card.Footer>
                    <div className="button-toolbar">
                        <Button className="button" size='lg' onClick={this.onClick}>Today's Weather</Button>
                        <Button className="button" size='lg' onClick={this.multi}>5-Day Forcast</Button>
                    </div>
                </Card.Footer>
                </Card>
            </div>
        )
    }
} 