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
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
