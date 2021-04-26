import React from "react";
import Container from 'react-bootstrap/Container';
import SelectLocationComponent from './SelectLocationComponent';
const MultiDayView = () => (
        <Container className="p-3"> 
                <SelectLocationComponent/>
        </Container>
);
export default MultiDayView;