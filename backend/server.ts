import express, {Express, Request, Response} from "express";
import cors from "cors";
import photoRoutes from "./routes/photoRoutes.js";
//import dotenv from "dotenv";

//dotenv.config();

const app: Express = express();

const port = parseInt(process.env.PORT || "3000");
app.use(express.json({limit: "50mb"}));

app.use(cors({
    origin: true
}));

// MUSS IMMER UNTER CORS SEIN
app.use("/photos", photoRoutes);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + Typescript server");
})

app.listen(port, "0.0.0.0", () => {
    console.log(`listening on port ${port}`);
})