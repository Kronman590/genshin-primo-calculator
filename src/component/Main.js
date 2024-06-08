import React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import Calculator from "./Calculator";
import Events from "./Events";

const Main = () => {
  const [value, setValue] = React.useState(0);
  const [selectedEvents, setEvents] = React.useState([]);

  const handleChange = (event, newValue) => {
    if (newValue !== value) {
      setValue(newValue);
    }
  };

  return (
    <>
      <div className="header">
          <h1>Genshin Impact Free Primogem Calculator</h1>
          <p>This calculator will take into account the various time-based methods of obtaining primogems to help set expectations when saving.<br/></p>
      </div>
      <Tabs value={value} onChange={handleChange} textColor='inherit' indicatorColor=''>
        <Tab label="Calculator"  />
        <Tab label="Events"  />
      </Tabs>
      <div className="body" style={{display: (value == 0 ? "" : "none")}}>
          <Container fixed
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Calculator events={selectedEvents}/>
          </Container>
        </div>
      <div className="body" style={{display: (value == 1 ? "" : "none")}}>
          <Container fixed
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Events selectedEvents={selectedEvents} setEvents={setEvents}/>
          </Container>
        </div>
      <div className="header">
        <p><b>Assumptions:</b><br/>Battle Pass advances 1.5 levels every day, counting only the primogems & Intertwined Fate.<br/>
          Imaginarium Theater and Spiral Abyss gems are obtained on reset (1st and 16th of each month respectively).<br/>
          Only Intertwined Fates are counted from the Stardust shop. Assumed all 5 are purchased.<br/>
          All gems available today have already been claimed.<br/>
          Event gems are obtained by default when they begin (i.e. login events last 2 weeks, but rewards are obtained in the first 7 days).<br/>
          Any events yet to be completed but past their initial days can be selected in the Events tab, and the gems available in past days will be added to the total.</p>
          <a href="https://github.com/Kronman590/genshin-calculator/issues">Issues? Create a ticket on Github</a>
      </div>
    </>
  );
};

export default Main;
