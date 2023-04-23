import {
  Box,
  Stack,
  Switch,
  LinearProgress,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { SidebarTopElement } from "./Sitebartop";
import React from "react";
import { filterData } from "@/assets/Mock/filter";

export const PopularFilter = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Popular filters</Typography>
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};

export const Sustainability = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Sustainability</Typography>
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              className="flex item-start justify-start"
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Box className="w-full mt-2 flex items-start justify-between">
                <Box>
                  <Typography className=" text-sm ">
                    {item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation}
                  </Typography>
                  <Typography className=" text-xs">
                    Properties taking steps to make your stay more sustainable
                  </Typography>
                </Box>
                <span>{item.count}</span>
              </Box>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};

export const Propertyrating = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Property rating</Typography>
      <Typography className="text-xs">
        Includes stars and other ratings
      </Typography>
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};

export const DistanceFromcity = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Distance from centre of Kolkata</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const Funthings = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Fun things to do</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const CancellationPolicy = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Cancellation policy</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const Meals = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Meals</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const PropertyType = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Property type</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const PrivateBathroom = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Private bathrooms</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        {/* <FormGroup>
            {data.options.map((item) => (
              <FormControlLabel
                key={item.urlId}
                control={
                  <Checkbox
                    value={
                      item.value.text
                        ? item.value.text
                        : item.value.translationTag.translation
                    }
                  />
                }
                label=<Typography className=" w-full flex text-sm  items-center justify-between">
                  {item.value.text
                    ? item.value.text
                    : item.value.translationTag.translation}
                  <span>{item.count}</span>
                </Typography>
              />
            ))}
          </FormGroup> */}
      </FormControl>
    </Stack>
  );
};
export const Landmarks = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Landmarks</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const BedPrefered = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Bed preference</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const ReviewScore = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Review score</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const Facilities = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Facilities</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const RoomFacilities = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Room facilities</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const Neighbourhood = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Neighbourhood</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const Brands = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Brands</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const Accessibility = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Property accessibility</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const RoomAccessibility = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>Room accessibility</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <FormControl sx={{}} component="fieldset" variant="standard">
        {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
        <FormGroup>
          {data.options.map((item) => (
            <FormControlLabel
              key={item.urlId}
              control={
                <Checkbox
                  value={
                    item.value.text
                      ? item.value.text
                      : item.value.translationTag.translation
                  }
                />
              }
              label=<Typography className=" w-full flex text-sm  items-center justify-between">
                {item.value.text
                  ? item.value.text
                  : item.value.translationTag.translation}
                <span>{item.count}</span>
              </Typography>
            />
          ))}
        </FormGroup>
      </FormControl>
    </Stack>
  );
};
export const ShowMap = ({ data }) => {
  return (
    <Stack className="border p-2">
      <Typography>View on map</Typography>
      {/* <Typography className="text-xs">Includes stars and other ratings</Typography> */}
      <div className="   inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>
    </Stack>
  );
};
