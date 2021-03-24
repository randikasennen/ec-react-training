import { TextField } from '@material-ui/core';
import useStyles from './style.js';
import './index.css';

export default function TextInput(props) {
    const { onChange, ...restProps } = props;

    const classes = useStyles();

    return <TextField className={classes.textField} {...restProps} onChange={(e) => onChange(e.target.value)} />
}