// @ts-types="@types/express"
import express from "express";

const app: express.Express = express();
const port: number = 3000;

app.get("/", (_req: express.Request, res: express.Response) => {
    res.send("<div style='margin-top: 6rem;text-align: center;'><h1 style='color: navy; font-size: 36px; font-weight: bold;'>Hello from Express running on Deno!</h1></div>");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});