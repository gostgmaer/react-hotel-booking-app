import { Stack, Typography } from "@mui/material";

export const SimplePropertycard = ({data}) => {
    console.log(data);
  return (
    <Stack>
      <img
        className=" h-32 w-40"
        src="https://cf.bstatic.com/xdata/images/hotel/square600/412005153.webp?k=c50f810d7791e1157b3a4e9fd3ff83d93a5070fd9b8ce12e9737a88b0f3cd686&o=&s=1"
        alt=""
      />
      <Typography>Lachung, India</Typography>
    </Stack>
  );
};

export default SimplePropertycard;
