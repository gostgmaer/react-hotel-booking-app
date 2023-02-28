import { Button, Container, makeStyles, TextField } from "@mui/material";
import React, { useState } from "react";

import history from "../../routes/history";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    minHeight : '63vH', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function handleEmailChange(e) {
    let value = e.target.value;
    setUserEmail(value);
  }

  function handlePasswordChange(e) {
    let value = e.target.value;
    setUserPassword(value);
  }

  function handleForm(e) {
    e.preventDefault();
    if (!userEmail || !userPassword) {
      alert("Please enter email and password");
    } else if (userEmail && userPassword) {
      if (userEmail === "admin" && userPassword === "admin") {
        sessionStorage.setItem("user", userEmail);
        //props.history.push("/cases");
        window.location.href = "/cases";
      } else {
        alert("Invalid email or password");
      }
    }
  }

  return (
    <Container component="main" maxWidth="xs" className={'uttu-cls'}>
      
      <div className={classes.paper}>
        <img
          alt="logo"
          width="150"
          src="https://www.inadev.com/assets/images/logo.png"
        />
        {/* <h2 style={{ display: "block", color: "#003f5eab" }}>
          Virtual Waiting Room
        </h2> */}
        <form className={classes.form} noValidate onSubmit={handleForm}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={userEmail}
            onChange={(e) => handleEmailChange(e)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={userPassword}
            onChange={(e) => handlePasswordChange(e)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}