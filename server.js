const http = require("http");
const PORT = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Luxury Profile Display</title>

<style>
    body {
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(135deg, #000000, #3a3a3a);
        font-family: "Segoe UI", sans-serif;
        color: #ffffff;
    }

    .card {
        background: rgba(255, 255, 255, 0.08);
        padding: 40px 60px;
        border-radius: 20px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.15);
        text-align: center;
        box-shadow: 0 0 25px rgba(255, 215, 0, 0.25);
    }

    .name {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 10px;
        letter-spacing: 1px;
    }

    .code {
        font-size: 20px;
        margin-bottom: 20px;
        opacity: 0.85;
    }

    .quote {
        font-size: 18px;
        font-style: italic;
        color: #ffd700;
    }
</style>
</head>

<body>
    <div class="card">
        <div class="name">Thea Frances Chavez</div>
        <div class="code">SM - 4101</div>
        <div class="quote">"The elevator to success is out of order. You'll have to use the stairs, one step at a time" — Joe Girard.</div>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
