import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Propertycard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className=" bg-transparent border-none">
      <CardMedia
        sx={{ height: 140 }}
        image="https://cf.bstatic.com/xdata/images/hotel/square600/412005153.webp?k=c50f810d7791e1157b3a4e9fd3ff83d93a5070fd9b8ce12e9737a88b0f3cd686&o=&s=1"
        title="green iguana"
      />
      <CardContent className="flex flex-col gap-1 item-start p-0 bg-transparent mt-2">
        <Typography gutterBottom variant="h6" fontWeight={'600'} fontSize={'16px'}>
          Moustache Rishikesh Luxuria
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rishikesh, India
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Starting from <span>Rs. 13,949</span>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Propertycard;



