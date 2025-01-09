import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const FoodCard = ({ title, descrption, imageUrl }: any) => {
  console.log("Desc: ", descrption)
  return (
    <Card sx={{ width: 250, borderRadius: 2, margin: "0" }}>
      <CardMedia
        component="img"
        height="150"
        image={imageUrl}
        alt="Paella dish"
      />
      <CardContent style={{ textAlign: "left" }}>
        <Typography variant="h5" sx={{ color: 'text.secondary', marginBottom: 3 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          {descrption}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default FoodCard;