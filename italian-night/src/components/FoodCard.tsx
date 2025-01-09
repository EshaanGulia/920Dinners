import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';

const FoodCard = ({ title, descrption, imageUrl }: any) => {
  return (
    <Card
      sx={{
        width: 300,
        height: 350,
        borderRadius: 3,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Adds shadow for a "pop" effect
        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
        "&:hover": {
          transform: "scale(1.05)", // Slightly enlarge on hover
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)", // Stronger shadow on hover
        },
      }}
    >
        {/* Image Section */}
        <CardMedia
          component="img"
          height="180"
          image={imageUrl}
          alt={title}
          sx={{
            objectFit: "cover", // Ensures the image scales correctly
            borderTopLeftRadius: 12, // Matches card radius
            borderTopRightRadius: 12,
          }}
        />

        {/* Content Section */}
        <CardContent
          sx={{
            textAlign: "left",
            backgroundColor: "#fff", // White background for contrast
            padding: 2,
          }}
        >
          <Grid container spacing={1}>
            <Grid size={8}>
              {/* Title */}
              <Typography
                variant="h6"
                sx={{
                  color: "#333", // Darker text for readability
                  fontWeight: "bold",
                  marginBottom: 1,
                  fontFamily: "'Playfair Display', serif", // Elegant font
                }}
              >
                {title}
              </Typography>

            </Grid>
          </Grid>


          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: "#555", // Slightly muted color for description
              fontSize: "0.9em",
              lineHeight: 1.6,
              fontFamily: "'Roboto', sans-serif", // Modern font
            }}
          >
            {descrption}
          </Typography>
        </CardContent>
    </Card>
  );
};

export default FoodCard;
