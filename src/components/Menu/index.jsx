import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

const Menu = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function getData() {
      axios
        .get(
          "https://dev.menu.ninja/api/menu/156?key=8j5vfe%24*pfb**rzt&pretty=1"
        )
        .then((response) => {
          console.log(response.data.menu.items);
          setData(response.data.menu.items);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    getData();
  }, []);

  const displaydata = (item) => {
    //alert(item.overrideDuration);
    /*{
      Object.keys(item.nutritionLabelling).map((list) =>
        alert(list, item.nutritionLabelling[list].itemid)
      );
    }
    {
      data &&
        data.map((group) =>
          Object.keys(group.nutritionLabelling).map((list) =>
            alert(group.nutritionLabelling[list].Item)
          )
        );
    }*/
    //Object.keys(item.nutritionLabelling)
    //console.log(item.nutritionLabelling);
    const data = item.nutritionLabelling;
    const keys = Object.keys(data.Item);
    const entries = Object.entries(data.Item);
    console.log("Nutritional values");
    entries.forEach((val) => console.log(val[0] + ":" + val[1]));
    //console.log(nutrition);
  };
  return (
    <Container style={{ marginTop: "50px" }}>
      <Grid container spacing={5}>
        {data &&
          data.map((item) => (
            <Grid item xs={12} sm={12} md={4} lg={4} key={item.id}>
              <Card sx={{ maxWidth: 345 }} onClick={() => displaydata(item)}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.details}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Menu;
