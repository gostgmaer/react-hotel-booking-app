import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { baseImageUrl } from "@/services/config";
const CardwithDeatils = ({ data }) => {
  //const imgUrl = data.imageUrl.replace("<SIZE>", "300x240");
 // console.log(data);
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className=" bg-transparent shadow-none border-none"
    >
      <CardMedia
        sx={{ height: 220 }}
        image={baseImageUrl+data.basicPropertyData.photos.main.lowResJpegUrl.relativeUrl}
        title="green iguana"
      />
      <CardContent className="flex flex-col gap-1 item-start p-0 bg-transparent mt-2">
        <Typography gutterBottom className="font-bold text-md">
          {data.basicPropertyData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.basicPropertyData.location.city},
          {data.basicPropertyData.location.country}
        </Typography>

        <Typography
          className=" flex gap-2 justify-start items-center"
          variant="body2"
          color="text.secondary"
        >
          <span className=" p-1 rounded bg-blue-950 text-white">
            {data.basicPropertyData.reviews.totalScore.toFixed(1)}
          </span>
          <span> {data.basicPropertyData.reviews.text}</span>
          <span> {data.basicPropertyData.reviews.reviewsCount} reviews</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardwithDeatils;
