function index(req, res) {
  res.json({
    message: "Welcome to my app!!",
    documentation_url: "",
    base_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/clothes", description: "Shows all clothes"},
      {method: "POST", path: "/api/clothes", description: "Adds new clothing"}
    ]
  });
}

module.exports = {
  index: index
};
