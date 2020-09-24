import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
        borderBottomColor: '#1DB954',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
    inputField: {
        background: 'linear-gradient(70deg, #FE6B8B 30%, #FF8E53 90%)',
        // background: 'linear-gradient(70deg, #39a05d 30%, #1db954 90%)',
        borderRadius: 5,
        boxShadow: '0 2px 4px 1px rgba(255, 105, 135, .3)',
        // boxShadow: '0 2px 4px 1px rgba(57, 160, 93, .3)',
        padding: '1px 1px',
        fontWeight: 600,
        color: '#333333',

    }
});

function TextInputField(props) {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField 
                className={classes.inputField}
                id="outlined-basic" 
                label={props.defaultText} 
                variant="outlined" 
                fullWidth
                // InputProps={{
                //     className: classes.inputField
                // }}
                onChange={(event) => props.onChange(event.target.value)}
                margin="normal"
            />
        </form> 
    );
}

export default TextInputField;