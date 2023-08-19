import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const SideBar = ({ value, handleChangeRadio }) => {
  return (
    <FormControl>
      <FormLabel
        id="demo-controlled-radio-buttons-group"
        sx={{ fontSize: "1rem", color: "#654620" }}
      >
        <b>Category</b>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChangeRadio}
      >
        <FormControlLabel value="drama" control={<Radio />} label="Drama" />
        <FormControlLabel value="romance" control={<Radio />} label="Romance" />
        <FormControlLabel
          value="adventure"
          control={<Radio />}
          label="Adventure"
        />
        <FormControlLabel value="comedy" control={<Radio />} label="Comedy" />
      </RadioGroup>
    </FormControl>
  );
};

export default SideBar;
