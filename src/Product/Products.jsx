import React from "react";
import { connect } from "react-redux";
import Product1 from "./product1";
import { Grid } from "@mui/material";

const Products = ({ products }) => {
  return (
    <div className="App">
      <Grid container spacing={10}>
        {products.map((prod) => {
          return (
            <Grid item xs={4} md={4}>
              <Product1 productData={prod} key={prod.id} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.thali.products
});

export default connect(mapStateToProps)(Products);
