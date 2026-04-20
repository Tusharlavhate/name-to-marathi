const express = require("express");
const app = express();

app.use(express.json());

const name = {
  tushar: "तुषार",
  rohit: "रोहित",
  varun: "वरुण",
  aditya: "आदित्य",
  amit: "अमित"
};

app.post("/convert", (req, res) => {
  const text = req.body.text.toLowerCase();

  if (name[text]) {
    res.json({ marathi: name[text]});
  } else {
    res.json({ marathi: "Name not found"});
  }
});

app.get("/convert/:name", (req, res) => {
  const text = req.params.name.toLowerCase();
  
  if (name[text]) {
    res.json({ marathi: name[text]});
  } else {
    res.json({ message: "Name not found"});
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

