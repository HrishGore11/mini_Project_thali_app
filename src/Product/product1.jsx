import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Grid } from "@mui/material";
import { connect } from "react-redux";
import { addToCart } from "../redux/Thali/thali-actions";
const Product1 = ({ productData, addToCart }) => {
  return (
    

    <Card sx={{ height: "540px", boxShadow: "3", borderRadius: "20px" }}>
      <CardMedia
        component="img"
        height="300"
        image={productData.Image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productData.Name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: "50px" }}
        >
          {productData.Description}
        </Typography>
      </CardContent>
      <Typography sx={{ marginTop: "40px" }}>
        Price: ₹ {productData.Price}
      </Typography>
      <Button
        sx={{ marginTop: "10px" }}
        size="small"
        color="primary"
        onClick={() => addToCart(productData.id)}
      >
        ADD To Cart
      </Button>
    </Card>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id))
  };
};

export default connect(null, mapDispatchToProps)(Product1);
