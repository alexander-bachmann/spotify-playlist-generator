import React, { useState, useEffect }from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        // margin: '1ch'
        // padding: '.1em 1.8em',
        width: 200
    },
    onSwitch: {
        background: '#FE6B8B',
        borderRadius: 50,
    },
    valueSlider: {
        color: '#FE6B8B',
    } 
});

function valuetext(value) {
    return `${value}`;
}

function Feature(props) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState([props.min, props.max]);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <FormControlLabel
                className={classes.root}
                control={
                    <Switch 
                        checked={checked} 
                        onChange={toggleChecked} 
                        className={classes.onSwitch}
                        InputProps={{
                            className: classes.onSwitch
                        }}
                    />}
            />

            <span>{props.defaultName}</span>

            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                className={classes.valueSlider}
                InputProps={{
                    className: classes.valueSlider
                }}
            />
            
        </div>
    )
}

export default Feature;