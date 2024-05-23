import { createSession } from "better-sse";
import express from "express";

const app = express();
const PORT = 3001;

app.get("/token-events", async (req, res) => {
  const session = await createSession(req, res);

  session.push("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
