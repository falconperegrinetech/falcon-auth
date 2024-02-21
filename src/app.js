import dotenv from "dotenv";
import express, { json } from "express";

dotenv.config();

const app = express();

app.use(json());

const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
	res.json("Falcon Auth Service");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

export default app;
