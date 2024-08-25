import React, { useState } from "react";
import Box from '@mui/material/Box'
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { calcGems } from "./helpers";

const Calculator = ({ events }) => {
  const today = new Date();
  const todayString = dayjs(today.toString())
  const [monthlyPass, setMonthlyPass] = useState(false);
  const [battlePass, setBattlePass] = useState(false);
  const [shopPulls, setShopPulls] = useState(false);
  const [abyssStars, setAbyssStars] = useState({
    "Floor 9": 0,
    "Floor 10": 0,
    "Floor 11": 0,
    "Floor 12": 0,
    "Theater": 0,
  });
  const [endDate, setEndDate] = useState(todayString);
  const [gems, setGemsState] = useState("");
  const [bplvl, setBPLevel] = useState("");
  const [displayPulls, setPullsDisplay] = useState("");

  const handleMonthly = (e) => {
    setMonthlyPass(e.target.checked);
  };

  const handleBattlePass = (e) => {
    setBattlePass(e.target.checked);
  };

  const handleShop = (e) => {
    setShopPulls(e.target.checked);
  };

  const handleStars = (e) => {
    setAbyssStars({
      ...abyssStars,
      [e.target.name]: e.target.value
    });
  };

  const handleEndDate = (e) => {
    setEndDate(e.$d);
  };

  const onCalculate = () => {
    setPullsDisplay(calcGems(gems, bplvl, monthlyPass, battlePass, shopPulls, abyssStars, endDate, events));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card sx={{ minWidth: '100%' }}>
          <FormGroup style={{alignItems: "center"}}>
            <FormControlLabel onChange={handleMonthly} control={<Checkbox checked={monthlyPass} />} label="Monthly Welkin?" />
            <FormControlLabel onChange={handleBattlePass} control={<Checkbox checked={battlePass} />} label="Paid for Battle Pass for current patch?" />
            {battlePass && <>
              <Typography>Battle Pass current Level:</Typography>
              <br/>
              <TextField
                id="outlined-number"
                label="BP Level"
                type="number"
                size="small"
                value={bplvl}
                onChange={(e) => {
                  setBPLevel(e.target.value);
                }}
              />
              <br/>
            </>}
            <FormControlLabel onChange={handleShop} control={<Checkbox checked={shopPulls} />} label="Purchase Fates from Stardust shop at reset?" />
            <Box/>
            <Typography>Spiral Abyss Stars (select stars you expect to get each reset):</Typography>
            <br/>
            <div>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Typography>Floor 9:</Typography>
                <Select
                  value={abyssStars["Floor 9"]}
                  name="Floor 9"
                  onChange={handleStars}
                  size="small"
                  style={{width:"10rem"}}
                >
                  <MenuItem value={0}>0 Stars</MenuItem>
                  <MenuItem value={50}>3 Stars</MenuItem>
                  <MenuItem value={100}>6 Stars</MenuItem>
                  <MenuItem value={200}>9 Stars</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <Typography>Floor 10:</Typography>
                <Select
                  value={abyssStars["Floor 10"]}
                  name="Floor 10"
                  onChange={handleStars}
                  size="small"
                  style={{width:"10rem"}}
                >
                  <MenuItem value={0}>0 Stars</MenuItem>
                  <MenuItem value={50}>3 Stars</MenuItem>
                  <MenuItem value={100}>6 Stars</MenuItem>
                  <MenuItem value={200}>9 Stars</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <Typography>Floor 11:</Typography>
                <Select
                  value={abyssStars["Floor 11"]}
                  name="Floor 11"
                  onChange={handleStars}
                  size="small"
                  style={{width:"10rem"}}
                >
                  <MenuItem value={0}>0 Stars</MenuItem>
                  <MenuItem value={50}>3 Stars</MenuItem>
                  <MenuItem value={100}>6 Stars</MenuItem>
                  <MenuItem value={200}>9 Stars</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={3}>
                <Typography>Floor 12:</Typography>
                <Select
                  value={abyssStars["Floor 12"]}
                  name="Floor 12"
                  onChange={handleStars}
                  size="small"
                  style={{width:"10rem"}}
                >
                  <MenuItem value={0}>0 Stars</MenuItem>
                  <MenuItem value={50}>3 Stars</MenuItem>
                  <MenuItem value={100}>6 Stars</MenuItem>
                  <MenuItem value={200}>9 Stars</MenuItem>
                </Select>
              </Grid>
            </Grid>
            </div>
            <br/>
            <Grid item xs={6}>
                <Typography>Imaginarium Theater (select stars you expect to get each reset):</Typography>
                <br/>
                <Select
                  value={abyssStars["Theater"]}
                  name="Theater"
                  onChange={handleStars}
                  size="small"
                  style={{width:"10rem"}}
                >
                  <MenuItem value={0}>0 Stars</MenuItem>
                  <MenuItem value={60}>1 Stars</MenuItem>
                  <MenuItem value={120}>2 Stars</MenuItem>
                  <MenuItem value={220}>3 Stars</MenuItem>
                  <MenuItem value={280}>4 Stars</MenuItem>
                  <MenuItem value={340}>5 Stars</MenuItem>
                  <MenuItem value={440}>6 Stars</MenuItem>
                  <MenuItem value={500}>7 Stars</MenuItem>
                  <MenuItem value={620}>8 Stars</MenuItem>
                  <MenuItem value={680}>9 Stars</MenuItem>
                  <MenuItem value={800}>10 Stars</MenuItem>
                </Select>
              </Grid>
            <Typography style={{padding:'1rem'}}>Select end date for calculation:</Typography>
            <br/>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker 
                  label="End date"
                  onChange={handleEndDate}
                  value={endDate} />
            </LocalizationProvider>
            <br/>
            <Typography style={{padding:'1rem'}}>Starting Primogem Count:</Typography>
            <br/>
            <TextField
              id="outlined-number"
              label="Primogem"
              type="number"
              value={gems}
              onChange={(e) => {
                setGemsState(e.target.value);
              }}
            />
            <Box/>
            <Button variant="contained" onClick={onCalculate}>Calculate</Button>
          </FormGroup>
        </Card>
      </Grid>
      {displayPulls && <Grid item xs={12}>
        <Card sx={{ minWidth: '100%' }} style={{padding: "100px 0px", background: "pink", border: "2px solid cyan", color: "black"}}>
          <Typography style={{whiteSpace: 'pre-line'}}>{displayPulls}</Typography>
        </Card>
      </Grid>}
    </Grid>
  );
};

Calculator.propTypes = {
  events: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
}

export default Calculator;
