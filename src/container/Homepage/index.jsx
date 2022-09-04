import React, { useState } from "react";

import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
} from "@mui/material";

import Form from "../../components/Form";
import Menu from "../../components/Menu";

function Homepage(props) {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Container style={{ padding: 0, margin: 0, maxWidth: "100%" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "left" }}
          >
            MY APP
          </Typography>
          <Button color="inherit" onClick={() => setDialogOpen(true)}>
            FORM
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <Form />
      </Dialog>
      <Menu />
    </Container>
  );
}

export default Homepage;
