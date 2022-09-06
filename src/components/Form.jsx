import React, { useState } from "react";

import { Container, TextField, Grid, Button, Snackbar } from "@mui/material";

import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Form() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [validate, setValidate] = useState({
    name: true,
    email: true,
    company: true,
    enquiry: true,
  });
  const [open, setOpen] = useState("");

  const handleInputChange = (event) => {
    event.target.name === "name" && setName(event.target.value);
    event.target.name === "email" && setEmail(event.target.value);
    event.target.name === "company" && setCompany(event.target.value);
    event.target.name === "enquiry" && setEnquiry(event.target.value);
  };

  // eslint-disable-next-line no-useless-escape
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // eslint-disable-next-line no-useless-escape
  const nameformat = /^(?:[a-zA-Z]+|\d+ )$/;

  const handleValidate = () => {
    const temp = validate;
    //name === "" ? (temp.name = false) : (temp.name = true);
    nameformat.test(name) ? (temp.name = true) : (temp.name = false);
    mailformat.test(email) ? (temp.email = true) : (temp.email = false);
    //company === "" ? (temp.company = false) : (temp.company = true);
    //enquiry === "" ? (temp.enquiry = false) : (temp.enquiry = true);
    nameformat.test(company) ? (temp.company = true) : (temp.company = false);
    nameformat.test(enquiry) ? (temp.enquiry = true) : (temp.enquiry = false);

    setValidate(temp);
    temp.name && temp.company && temp.enquiry && temp.email
      ? setOpen("success")
      : setOpen("error");
  };

  const handleSubmit = (event) => {
    handleValidate();
  };

  //console.log(validate);

  return (
    <Container
      style={{ maxWidth: "100%", display: "flex", flexDirection: "column" }}
    >
      <Grid container style={{ margin: "20px 0", maxWidth: "100%" }}>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ padding: "10px" }}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={name}
            onChange={handleInputChange}
            error={!validate.name}
            helperText={!validate.name && "Please enter a valid name"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ padding: "10px" }}>
          <TextField
            fullWidth
            label="Company"
            name="company"
            value={company}
            onChange={handleInputChange}
            error={!validate.company}
            helperText={!validate.company && "Please enter a valid company"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ padding: "10px" }}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            error={!validate.email}
            helperText={!validate.email && "Invalid Email"}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} style={{ padding: "10px" }}>
          <TextField
            fullWidth
            label="Enquiry"
            name="enquiry"
            value={enquiry}
            onChange={handleInputChange}
            error={!validate.enquiry}
            helperText={!validate.enquiry && "Please enter a valid enquiry"}
          />
        </Grid>
      </Grid>

      <Button
        variant="outlined"
        onClick={handleSubmit}
        style={{ margin: "10px" }}
      >
        Submit
      </Button>
      <Snackbar
        open={open !== ""}
        onClose={() => setOpen("")}
        autoHideDuration={6000}
      >
        <Alert severity={open} sx={{ width: "100%" }}>
          {open === "error"
            ? "Please fill all the fields."
            : "Thank you for submitting the form."}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Form;
