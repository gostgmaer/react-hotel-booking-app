import { baseImageUrl } from "@/services/config";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";


const SimplePropertycard = ({ data }) => {
  const imgUrl = data.imageUrl.replace("<SIZE>", "300x240");

  return (
    <Stack className="gap-2">
      <img
        className=" h-32 object-cover w-full"
        src={`${baseImageUrl}${imgUrl}`}
        alt={data.title}
      />
      <Typography className="font-semibold text-sm">{data.title}</Typography>
    </Stack>
  );
};

export default SimplePropertycard;

export const ExploreCard = ({ data }) => {
const imgUrl = data.image.url.replace("<SIZE>", "300x240");

  return (
    <Stack>
      <img
        className=" h-32 object-cover w-full mb-2"
         src={`${imgUrl}`}
        alt={data.title}
      />
      <Box >
       
        <Typography className=" text-sm font-semibold">{data.title}</Typography>
        <Typography className="text-xs">{data.subtitle}</Typography>
      </Box>
    </Stack>
  );
};

export const QuickPlanCard = ({ data }) => {
  const imgUrl = data.imageUrl.replace("<SIZE>", "300x240");

  return (
    <Stack>
      <Image
        className=" h-32 object-cover w-full mb-2"
        src={`${baseImageUrl}${imgUrl}`}
        alt={data.title}
        height={100}
        width={100}
      />
      <Box>
        {" "}
        <Typography className=" text-sm font-semibold">{data.title}</Typography>
        <Typography className="text-xs">{data.distance}</Typography>
      </Box>
    </Stack>
  );
};

export const SimpleBigcard = ({ data }) => {
  // console.log(data);
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className=" w-full bg-transparent shadow-none border-none"
    >
      <CardMedia
        sx={{ height: 200 }}
        image={data.image.url}
        title= {data.title}
      />
      <CardContent className="flex flex-col gap-1 item-start p-0 bg-transparent mt-2">
        <Typography gutterBottom className="font-bold text-md">
         {data.title}
        </Typography>

        <Typography variant="body2" className="text-xs" color="text.secondary">
       {data.subtitle}
        </Typography>
      </CardContent>
    </Card>
  );
};

export const UniquePlaceCard = ({ data }) => {
  //const imgUrl = data.imageUrl.replace("<SIZE>", "300x240");

  // console.log(data);
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className=" w-full bg-transparent shadow-none border-none"
    >
      <CardMedia
        sx={{ height: 200 }}
        image="https://cf.bstatic.com/xdata/images/hotel/square600/412005153.webp?k=c50f810d7791e1157b3a4e9fd3ff83d93a5070fd9b8ce12e9737a88b0f3cd686&o=&s=1"
        title="green iguana"
      />
      <CardContent className="flex flex-col gap-1 item-start p-0 bg-transparent mt-2">
        <Typography gutterBottom className="font-bold text-md">
          Moustache Rishikesh Luxuria
        </Typography>

        <Typography variant="body2" className="text-xs" color="text.secondary">
          <span> 9.5</span> <span>Very Good</span>
        </Typography>
      </CardContent>
    </Card>
  );
};
