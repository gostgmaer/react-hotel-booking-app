import {
  Expand,
  ExpandMore,
  HelpOutline,
  QuestionMark,
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Covidworn = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box className="w-full">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className=" w-full"
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            "&>.MuiAccordionSummary-content": {
              m: 0,
            },
          }}
        >
          <Typography sx={{ flexShrink: 0 }} className=" text-sm font-semibold">
            <IconButton className=" text-red-600">
              <HelpOutline />
            </IconButton>{" "}
            Coronavirus (COVID-19) Support
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Get the travel advice you need. Read more about possible travel
            restrictions before you go.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Covidworn;
