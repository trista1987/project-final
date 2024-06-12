import * as React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const ColorCheckbox = () => {
  return (
    <div>
      {/* <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" /> */}
      <Checkbox
        {...label}
        sx={{
          color: "#020209",
          '&.Mui-checked': {
            color: "#3B744E",
          },
        }}
      />
    </div>
  );
}
