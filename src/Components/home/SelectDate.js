import * as React from "react";
import PropTypes from "prop-types";
import Tooltip from "@mui/material/Tooltip";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


import { DateRangePicker } from "@mui/x-date-pickers-pro";


function Label({ componentName, valueType, isProOnly }) {
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a href="/x/introduction/licensing/#pro-plan">
            <span className="plan-pro" />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}

Label.propTypes = {
  componentName: PropTypes.string.isRequired,
  isProOnly: PropTypes.bool,
  valueType: PropTypes.string.isRequired,
};

export default function CommonlyUsedComponents() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        localeText={{ start: "Check-in", end: "Check-out" }}
      ></DateRangePicker>
    </LocalizationProvider>
  );
}
