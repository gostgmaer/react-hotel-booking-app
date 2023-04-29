import { baseImageUrl } from "@/services/config";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";

const Propertycard = ({ data }) => {
  // console.log(data);
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className=" w-full !bg-transparent !shadow-none !border-none"
    >
      <Image
        alt={data.basicPropertyData.name}
        src={
          baseImageUrl +
          data.basicPropertyData.photos.main.highResUrl.relativeUrl
        }
        height={220}
        width={300}
      />
     
      <CardContent className="flex flex-col pb-0 item-start !p-0 bg-transparent mt-2">
        <Typography gutterBottom className="!font-bold !text-sm">
          {data.basicPropertyData.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className=" !text-xs">
          {data.basicPropertyData.districtName}
        </Typography>
        <Typography
          variant="body2"
          className="!text-xs flex items-center gap-2"
          color="text.secondary"
        >
          Starting from
          <span>
            {data.priceDisplayInfo.displayPrice.amountPerStay.amountRounded}
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Propertycard;
