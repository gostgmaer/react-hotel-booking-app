import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";
import { baseImageUrl } from "@/services/config";
import Image from "next/image";
const CardwithDeatils = ({ data }) => {
  //const imgUrl = data.imageUrl.replace("<SIZE>", "300x240");
  // console.log(data);

  return (
    <Card
      sx={{ maxWidth: 345 }}
      className=" bg-transparent !shadow-none !border-none"
    >
      <Link
        href={`/hotel/${data.basicPropertyData.pageName}`}
        className="text-sm flex flex-col items-start gap-0 font-semibold text-blue-600"
      >
        <Image
          alt={data.basicPropertyData.name}
          src={
            baseImageUrl +
            data.basicPropertyData.photos.main.lowResJpegUrl.relativeUrl
          }
          height={220}
          width={300}
        />
      </Link>

      <CardContent className="flex flex-col gap-1 item-start p-0 bg-transparent mt-2">
        <Link
          href={`/hotel/${data.basicPropertyData.pageName}`}
          className="text-sm flex flex-col items-start decoration-transparent gap-0 font-semibold text-blue-600"
        >
          {data.basicPropertyData.name}
        </Link>

        <p>
          {data.basicPropertyData.location.city},
          {data.basicPropertyData.location.country}
        </p>

        <p className=" flex gap-2 justify-start items-center">
          <span className=" p-1 rounded bg-blue-950 text-white">
            {data.basicPropertyData.reviews.totalScore.toFixed(1)}
          </span>
          <span> {data.basicPropertyData.reviews.text}</span>
          <span> {data.basicPropertyData.reviews.reviewsCount} reviews</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default CardwithDeatils;
