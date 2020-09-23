import React, { useState, useEffect }from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
    root: {
        margin: '.5rem',
        width: 350
    },
    switchBase: {
        color: '#222222',
        "&$checked": {
        color: '#FFFFFF' 
        },
        "&$checked + $track": {
        backgroundColor: '#FFFFFF'
        }
    },
    checked: {},
    track: {}, 
    onSwitch: {
        background: '#FE6B8B',
        borderRadius: 50,
        float: 'right',
    },
    valueSlider: {
        color: '#FE6B8B',
    },
    featureTitle: {
        float: 'left',
        fontSize: '1.2rem'
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
        // console.log(checked);
        setChecked((prev) => !prev);
    };

    const handleChange = (event, newValue) => {
        // console.log(value);
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <span className={classes.featureTitle}>{props.defaultName}</span>
            
            <Switch 
                color="primary"
                checked={checked} 
                onChange={toggleChecked} 
                className={classes.onSwitch}
                classes={{
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked
                }} 
                InputProps={{
                    className: classes.onSwitch
                }} />

            <Slider
                value={value}
                disabled={!checked}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                max={parseInt(props.max)}
                min={parseInt(props.min)}
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