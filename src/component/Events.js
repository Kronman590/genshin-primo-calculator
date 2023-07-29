import React from "react";
import PropTypes from 'prop-types';
import { eventList } from "./eventList";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Checkbox from '@mui/material/Checkbox';

function Row (props) {
  const [open, setOpen] = React.useState(false);
  const { data, stateEvents, setEvents } = props;
  data.events = data.events.filter((e) => e[2] > 0);
  const expandExtra = data.events.length > 1;
  const [selectedEvents, setSelectedEvents] = React.useState(
      expandExtra ? data.events.reduce((acc, ev) => {acc[ev[1]] = false; return acc;}, {[data.name]: false}) : 
      {[data.name]: false}
    );

  const handleCheckbox = (checked, events, date="") => {
    const newSelectedEvents = selectedEvents;
    if (date) {
      newSelectedEvents[date] = checked;
      if (!checked) 
        newSelectedEvents[data.name] = false;
    } else {
      Object.keys(newSelectedEvents).forEach(k => {
        if (!disableCheckbox(k))
          newSelectedEvents[k] = checked;
      })
    }
    setSelectedEvents(newSelectedEvents);
    if (checked) {
      setEvents([...stateEvents, ...(events.filter((e) => (!disableCheckbox(e[1]))))]);
    } else {
      setEvents(stateEvents.filter((e) => !events.includes(e)));
    }
  };

  const disableCheckbox = (evStart) => {
    const today = new Date();
    today.setHours(0,0,0,0);
    const endDate = new Date(data.endDate);
    endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset());
    const startDate = new Date(evStart);
    startDate.setMinutes(startDate.getMinutes() + startDate.getTimezoneOffset());
    return (today > endDate || today < startDate);
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          {expandExtra && <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>}
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {data.name}
        </TableCell>
        <TableCell align="center">{data.startDate}</TableCell>
        <TableCell align="center">{data.endDate}</TableCell>
        <TableCell align="center">{data.totalGems}</TableCell>
        <TableCell align="center">
          <Checkbox checked={selectedEvents[data.name]} disabled={disableCheckbox(data.startDate)} 
          onChange={(e) => {handleCheckbox(e.target.checked, data.events)}} />
        </TableCell>
      </TableRow>
      {expandExtra&& <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Date</TableCell>
                    <TableCell align="center">Primogems</TableCell>
                    <TableCell align="center">Uncompleted?</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.events.map((indvGemCount) => (
                    <TableRow key={indvGemCount[1]}>
                      <TableCell component="th" scope="row" align="center">
                        {indvGemCount[1]}
                      </TableCell>
                      <TableCell align="center">{indvGemCount[2]}</TableCell>
                      <TableCell align="center">
                        <Checkbox checked={selectedEvents[indvGemCount[1]]} disabled={disableCheckbox(indvGemCount[1])} 
                        onChange={(e) => {handleCheckbox(e.target.checked, [indvGemCount], indvGemCount[1])}} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>}
    </React.Fragment>
  );
}

Row.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    totalGems: PropTypes.number.isRequired,
    events: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
  }).isRequired,
  stateEvents: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
  setEvents: PropTypes.func.isRequired
}

const Events = ({ selectedEvents, setEvents }) => {
  const eventMap = [];
  eventList.forEach((e) => {
    const ojbInd = eventMap.findIndex((obj) => obj.name == e[0])
    if (ojbInd < 0)
      eventMap.push({
        name: e[0],
        startDate: e[1],
        endDate: eventList.at(-1)[1],
        totalGems: e[2],
        events: [e]
      });
    else {
      eventMap[ojbInd].totalGems += e[2];
      eventMap[ojbInd].events.push(e);
      if (e[2] == 0)
        eventMap[ojbInd].endDate = e[1]; 
    }
  })
  eventMap.sort((a,b) => (a.startDate - b.startDate));

  return (
    <div className="Events" style={{ minWidth: '100%' }}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="center">Event Name</TableCell>
              <TableCell align="center">Start Date</TableCell>
              <TableCell align="center">End Date</TableCell>
              <TableCell align="center">Total Primogems</TableCell>
              <TableCell align="center">Uncompleted?</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventMap.map((row) => (
              <Row key={row.name} data={row} stateEvents={selectedEvents} setEvents={setEvents} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

Events.propTypes = {
  selectedEvents: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
  setEvents: PropTypes.func.isRequired
}

export default Events;
