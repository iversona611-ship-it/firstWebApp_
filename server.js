const http = require("http");
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write("Hello I'm Teya!!!");
  res.write("From SM 4101.");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});