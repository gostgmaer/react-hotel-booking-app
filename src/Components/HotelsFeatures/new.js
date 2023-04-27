import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  Rating,
  colors,
} from "@mui/material";
import {
  EnergySavingsLeafOutlined,
  Favorite,
  KeyboardArrowRight,
  Menu,
} from "@mui/icons-material";
import { baseImageUrl } from "@/services/config";
import Link from "next/link";
import Image from "next/image";

const Hotelsfeatures = ({ data }) => {
  console.log(data);
  return (
    <Link
    className="HotelsfeaturesItem flex gap-3"
    href={`/hotel/${data.basicPropertyData.pageName}`}
  >
    <Box className=" flex gap-3 w-full items-start">
      <Box className="left flex-1/2 relative">
        <Image
        width={270}
        height={220}
          className=" w-56"
          src={
            baseImageUrl +
            data.basicPropertyData.photos.main.highResUrl.relativeUrl
          }
          alt=""
        />
        <Stack className=" absolute top-0 right-5">
          <IconButton>
            <Favorite></Favorite>
          </IconButton>
          <IconButton>
            <Favorite></Favorite>
          </IconButton>
        </Stack>
      </Box>
      <Box className="right flex-1">
        <div className="leftBlock"></div>
        <div className="rightBlock"></div>
        <Box className="top flex flex-col gap-2">
          <Box className="titleBlock flex gap-2 items-start">
            <div className="title flex-1 flex gap-1 items-center">
              <Typography
                variant="h3"
                className="text-sm flex flex-col items-start gap-0 font-semibold text-black"
              >
                {data.displayName.text}
                <Rating
                  size="small"
                  name="read-only"
                  value={data.basicPropertyData?.starRating?.value}
                  readOnly
                />
              </Typography>
            </div>
            <Stack
              direction={"row"}
              className="review flex-1/3 gap-2 items-start"
            >
              <div className="status flex flex-col items-end">
                <span className="text-sm text-gray-950 font-semibold">
                  {
                    data.basicPropertyData.reviewScore.totalScoreTextTag
                      .translation
                  }
                </span>
                <span className=" text-xs text-gray-500">
                  {" "}
                  {data.basicPropertyData.reviewScore.reviewCount} reviews
                </span>
              </div>
              <span className=" rounded text-white p-2 text-sm bg-blue-950">
                {data.basicPropertyData.reviewScore?.secondaryScore
                  ? data.basicPropertyData.reviewScore?.secondaryScore
                  : data.basicPropertyData.reviewScore?.score}
              </span>
            </Stack>
          </Box>
          <Box className="addressBlock flex flex-col gap-1">
            <Box
              color="#3971C2"
              className="location flex gap-2 items-center capitalize text-xs underline cursor-pointer"
            >
              <span> {data.location.displayLocation}</span>
              <span>show on map</span>
              <span className=" text-black">
                {data.location.mainDistance}
              </span>
            </Box>
            <Box className="icon">
              <p>
                {" "}
                <EnergySavingsLeafOutlined className="w-4 h-4"></EnergySavingsLeafOutlined>{" "}
                <span className="text-xs"> Travel Sustainable property</span>
              </p>
            </Box>
            <Box className="airport">
              <span className=" text-white text-sm bg-green-700 p-2">
                free airport Taxi
              </span>
            </Box>
          </Box>
        </Box>
        <Box className="buttom flex justify-between">
          <div className="bottomLeft text-xs flex flex-col items-start gap-1">
            <div style={{ padding: "5px" }} className="bottomleftbed">
              <span style={{ fontWeight: "bold" }}>
                Towers Exclusive, Guest room, 1 Queen
              </span>
              <span>1 double bed</span>
            </div>
            <div className="bottomleftfeature flex flex-col items-start gap-0 font-medium text-green-700">
              <p>Breakfast included</p>
              <p className=" flex  gap-1 items-center font-semibold">
                <span>FREE cancellation </span> •
                <span>No prepayment needed</span>
              </p>
              <p>You can cancel later, so lock in this great price today.</p>
              <p className=" font-semibold text-red-700">
                Only 5 rooms left at this price on our site
              </p>
            </div>
          </div>
          <Box className="bottomRight flex gap-1 flex-col capitalize items-end">
            <p className="text-xs text-gray-500 flex justify-end items-center gap-1">
              <span>2 night</span>, <span>2 adult</span>
            </p>
            <span className="price text-xl font-semibold">    {data.priceDisplayInfo.displayPrice.amountPerStay.amountRounded}</span>
            <span className="text-xs  text-gray-500 ">
             {data.priceDisplayInfo.chargesInfo.translation}
            </span>
            <Button
              variant="contained"
              className=" bg-blue-900 text-white font-normal capitalize"
              endIcon={<KeyboardArrowRight />}
            >
              See avaliabality
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Link>
  );
};

export default Hotelsfeatures;
