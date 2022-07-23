import React, { useState, useEffect } from "react";
import Cartitem from "../Cart/Cartitem";
import { connect } from "react-redux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.Qty;
      price += item.Qty * item.Price;
    });
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice]);

  const Alert = (item1) => {
    if (cart.length < 2) {
      alert("Minimum Item should be 2 to proceed the CheckOut");
    } else {
      alert("Your Thali is Successfully going to Placed");
    }
  };
  return (
    <div>
      <Grid container spacing={2} sx={{ marginTop: "90px" }}>
        <Grid item xs={8}>
          {cart.map((item) => {
            return <Cartitem key={item.id} itemData={item} />;
          })}
        </Grid>
        <Grid item xs={4}>
          <CardContent
            sx={{
              bgcolor: "aliceblue",
              width: "239px",
              height: "210px",
              boxShadow: "3",
              borderRadius: "20px"
            }}
          >
            <Typography variant="h5" component="div">
              Cart Summary
            </Typography>
            <br />
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Total : ({totalItems}Items)
            </Typography>
            <br />
            <Typography variant="h6">Price : ₹ {totalPrice}</Typography>
            <Button
              sx={{
                alignitem: "center",
                marginY: "42px",
                boxShadow: "3",
                borderRadius: "7px"
              }}
              variant="contained"
              size="medium"
              endIcon={<ShoppingCartCheckoutOutlinedIcon />}
              onClick={() => Alert()}
            >
              Proceed To CheckOut
            </Button>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.thali.cart
  };
};

export default connect(mapStateToProps)(Cart);
