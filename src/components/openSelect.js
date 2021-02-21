import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {fetchCategories} from './../actions/fetchCategories.js';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const categor = useSelector(state => state.categories)
  const dispatch = useDispatch();
  const classes = useStyles();
  const [category, setCategory] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const clearInput = () => {
    document.getElementById("inputvalue").value = "";
  }

  const CreateMenu = categor.categories.map((category, index) => {
    return <MenuItem key={index} value={category}> {category} </MenuItem>
  });

  return (
    <div onLoad={() => dispatch(fetchCategories())}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label"> choose here </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
          onFocus={clearInput}
        >
          <MenuItem value="">
            <em>Choose</em>
          </MenuItem>
          {CreateMenu}
        </Select>
      </FormControl>
    </div>
  );
}