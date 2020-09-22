import React, { useState, useEffect }from 'react';
import Features from './features';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '1ch'
    },
    onSwitch: {
        background: '#FE6B8B',
        borderRadius: 50,
        
    }
});

function NewTrack(props) {
    const classes = useStyles();

    return (
        <Features />
    )
}

export default NewTrack;