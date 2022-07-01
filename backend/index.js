const app = require("./app/app");

// todo: Initialize app
app.listen(app.get("port"), (error) => {
  if (error) throw error;
  console.log("Server running on http://127.0.0.1:" + app.get("port"));
});
