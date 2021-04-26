import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import WeatherComponent from "./WeatherComponent";
import SelectViewComponent from './SelectViewComponent';

    
    function SelectLocationComponent(){
        const [location,setLocation]=useState([]);
        const handleSelect=(e)=>{
          setLocation(e)
        }
                
        return (
            <div>
                <Card className="text-center">
                <Card.Header>
                    <div> Select a Location: 
                    <DropdownButton onSelect={handleSelect} title={location}>
                        <Dropdown.Item eventKey="Baldwin City, KS">Baldwin City, KS</Dropdown.Item>
                        <Dropdown.Item eventKey="Kansas City, MO">Kansas City, MO</Dropdown.Item>
                        <Dropdown.Item eventKey="Raytown, MO">Raytown, MO</Dropdown.Item>
                    </DropdownButton>
                    </div>
                </Card.Header>
                <Card.Body>
                    <WeatherComponent getLocation={location} />
                </Card.Body>
                <Card.Footer>
                    <SelectViewComponent />
                </Card.Footer>
                </Card>
            </div>
        );
    }

export default SelectLocationComponent;