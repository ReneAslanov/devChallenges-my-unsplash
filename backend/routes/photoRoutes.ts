import express, {Request, Response} from "express";
import photoRoutes from "../modals/photos.js";
import { PostPhoto } from "../types/photoTypes.js";

const router = express.Router();

async function getPhotoRoute(req: Request, res: Response): Promise<Array<PostPhoto>>
{
    const photos = await photoRoutes.getPhotos();
    return res.json(photos) as unknown as  Promise<Array<PostPhoto>>;
}

async function postPhotoRoute(req: Request, res: Response): Promise<PostPhoto>
{
    const photos = await photoRoutes.postPhoto(req.body);
    return res.json(photos) as unknown as  Promise<PostPhoto>;
}

async function deletePhotoRoute(req: Request, res: Response): Promise<PostPhoto>
{
    const photos = await photoRoutes.deletePhoto(req.body);
    return res.json(photos) as unknown as  Promise<PostPhoto>;
}

router.get("/", getPhotoRoute);
router.post("/", postPhotoRoute);
router.delete("/", deletePhotoRoute);

export default router;