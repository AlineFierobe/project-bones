const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://aowlyne:<password>@cluster0.jfuvnvu.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connexion ok !");
  })
  .catch((err) => {
    console.log(err);
  });
