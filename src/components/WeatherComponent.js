import React from "react";
import Container from 'react-bootstrap/Container';
import SelectLocationComponent from './SelectLocationComponent';
const WeatherComponent = () => (
        <Container className="p-3"> 
                <SelectLocationComponent/>
        </Container>
);
export default WeatherComponent;