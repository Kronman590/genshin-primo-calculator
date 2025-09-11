import React, { useState } from "react";
// import Box from '@mui/material/Box';
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
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { calcGems } from "./helpers";

const Calculator = ({ events }) => {
  const today = new Date();
  const todayString = dayjs(today.toString());
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

  const handleStars = (e) => {
    setAbyssStars({ ...abyssStars, [e.target.name]: e.target.value });
  };

  const onCalculate = () => {
    setPullsDisplay(calcGems(gems, bplvl, monthlyPass, battlePass, shopPulls, abyssStars, endDate, events));
  };

  const onMax = () => {
    setAbyssStars({
      "Floor 9": 200,
      "Floor 10": 200,
      "Floor 11": 200,
      "Floor 12": 200,
      "Theater": 800,
    });
  };

  const endgameMap = {
    "Floor": [
      { stars: 0, val: 0 },
      { stars: 3, val: 50 },
      { stars: 6, val: 100 },
      { stars: 9, val: 200 }
    ],
    "Theater": [
      { stars: 0, val: 0 },
      { stars: 1, val: 60 },
      { stars: 2, val: 120 },
      { stars: 3, val: 220 },
      { stars: 4, val: 280 },
      { stars: 5, val: 340 },
      { stars: 6, val: 440 },
      { stars: 7, val: 500 },
      { stars: 8, val: 620 },
      { stars: 9, val: 680 },
      { stars: 10, val: 800 },
      { stars: 11, val: 900 },
      { stars: 12, val: 1000 },
    ],
  }

  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={12}>
        <Card sx={{ padding: 2, width: '100%' }}>
          <FormGroup sx={{ alignItems: "center" }}>
            <FormControlLabel control={<Checkbox checked={monthlyPass} onChange={(e) => setMonthlyPass(e.target.checked)} />} label="Monthly Welkin?" />
            <FormControlLabel control={<Checkbox checked={battlePass} onChange={(e) => setBattlePass(e.target.checked)} />} label="Paid for Battle Pass for current patch?" />
            {battlePass && (
              <>
                <Typography>Battle Pass current Level:</Typography>
                <TextField
                  label="BP Level"
                  type="number"
                  size="small"
                  value={bplvl}
                  onChange={(e) => setBPLevel(e.target.value)}
                  sx={{ mt: 1, width: '10rem' }}
                />
              </>
            )}
            <FormControlLabel control={<Checkbox checked={shopPulls} onChange={(e) => setShopPulls(e.target.checked)} />} label="Purchase Fates from Stardust shop at reset?" />
            <Typography sx={{ mt: 2 }}>Spiral Abyss Stars (select stars you expect to get each reset):</Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              {Object.keys(abyssStars).map((floor) => (
                <Grid item xs={3} key={floor}>
                  <Typography>{floor}:</Typography>
                  <Select
                    value={abyssStars[floor]}
                    name={floor}
                    onChange={handleStars}
                    size="small"
                    sx={{ width: "10rem", mt: 1 }}
                  >
                    {endgameMap[floor.split(" ")[0]].map((pair) => (
                      <MenuItem key={pair.stars} value={pair.val}>{pair.stars} Stars</MenuItem>
                    ))}
                  </Select>
                </Grid>
              ))}
            </Grid>
            <Button variant="contained" size="small" onClick={onMax} sx={{ mt: 2 }}>Maximize endgame stars</Button>
            <Typography sx={{ mt: 2 }}>Select end date for calculation:</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="End date" onChange={(newDate) => setEndDate(newDate)} value={endDate} sx={{ mt: 1 }} />
            </LocalizationProvider>
            <Typography sx={{ mt: 2 }}>Starting Primogem Count:</Typography>
            <TextField
              label="Primogem"
              type="number"
              value={gems}
              onChange={(e) => setGemsState(e.target.value)}
              sx={{ mt: 1, width: '10rem' }}
            />
            <Button variant="contained" onClick={onCalculate} sx={{ mt: 2 }}>Calculate</Button>
          </FormGroup>
        </Card>
      </Grid>
      {displayPulls && (
        <Card sx={{ padding: 2, width: '80%', background: "pink", border: "2px solid cyan", color: "black" }}>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{displayPulls}</Typography>
        </Card>
      )}
    </Grid>
  );
};

Calculator.propTypes = {
  events: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))).isRequired,
};

export default Calculator;