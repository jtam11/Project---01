function index(req, res) {
  res.json({
    message: "Welcome to my app!!",
    documentation_url: "",
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/clothes", description: "Shows all clothes"},
      {method: "POST", path: "/api/clothes", description: "Adds new clothing"},
      {method: "DELETE", path: "/api/clothes/:clothingId", description: "Deletes an article of clothing"},
      {method: "PUT", path: "/api/clothes/:clothingId", description: "Updates an article of clothing"},
      {method: "GET", path: "/signup", description: "Show signup form"},
      {method: "POST", path: "/signup", description: "Create new user and log them in"},
      {method: "GET", path: "/login", description: "Show login form"},
      {method: "POST", path: "/login", description: "Log user in"},
      {method: "GET", path: "/logout", description: "Log user out"}
    ]
  });
}

module.exports = {
  index: index
};
