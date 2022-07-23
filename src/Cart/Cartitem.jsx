import React, { useState } from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../redux/Thali/thali-actions";

const Cartitem = ({ itemData, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(itemData.Qty);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData.id, e.target.value);
  };
  return (
    <div>
      <Card sx={{ width: "700px", height: "120px", margin: "20px 50px", boxShadow: "3", borderRadius: "20px"}}>
        <Box sx={{ display: "flex", flexDirection: "auto" }}>
          <CardMedia
            component="img"
            sx={{ width: "250px", height: "120px", objectfit: "contain" }}
            image={itemData.Image}
            alt={itemData.Name}
          />{" "}
          <CardContent sx={{ flex: "1 0 column", width: "410px" }}>
            <Grid container spacing={1}>
              <Grid item xs={11}>
                <Typography component="div" variant="h5">
                  {itemData.Name}
                </Typography>
                <Typography
                  component="div"
                >
                  Total price: ₹ {itemData.Price * itemData.Qty}
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <input
                  type="number"
                  value={input}
                  onChange={onChangeHandler}
                  label="Qty"
                  min="1"
                  style={{ width: "23px", height: "17px" }}
                />

                <IconButton
                  sx={{ paddingX: "0px" }}
                  aria-label="delete"
                  size="large"
                  onClick={() => removeFromCart(itemData.id)}
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, value) => dispatch(adjustQty(id, value))
  };
};
export default connect(null, mapDispatchToProps)(Cartitem);
