import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import MultiDayView from './MultiDayView';
import CurrentDayView from './CurrentDayView';

const SelectViewComponent = () => {
    const [active, setActive] = useState(1);
    const SetView = (active) => {
        setActive(active);
    };

    const ActiveView = () => {
        switch (active) {
          case 1:
            return <MultiDayView />;
          default:
            return <CurrentDayView />;
        }
    };

    return(
        <div className="button-toolbar">
          <Button className="button" onClick={() => SetView(2)}>Today's Weather</Button>
          <Button className="button" onClick={() => SetView(1)}>5-Day Forcast</Button>
          
          {ActiveView()}
        </div>
    );
};
export default SelectViewComponent;
