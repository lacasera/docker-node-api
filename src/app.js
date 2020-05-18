"use strict";

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to v2 of the api",
  });
});

app.get("/message", (req, res) => {
  res.status(200).json({
    message: "this is a new endpoint",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "api is heathy",
  });
});

module.exports = app;
