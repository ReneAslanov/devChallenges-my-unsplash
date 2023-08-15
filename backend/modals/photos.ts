import { client } from "../database.js";
import { Photos, PostPhoto } from "../types/photoTypes.js";

function sortingCallback(a: Photos, b: Photos)
{
    return b.id - a.id;
}

async function getPhotos()
{
    try{
        const connection = await client.connect();
        const query = "SELECT * FROM photos";
        const res  = await connection.query(query);

        const photos = (res.rows as unknown as Array<Photos>).sort(sortingCallback);
        connection.release();
        return photos;
    }
    catch(err){
        console.log(err);
    }
}


async function postPhoto({uuid, label, url}: PostPhoto)
{
    try{
        const connection = await client.connect();
        const query = "INSERT INTO photos (uuid, label, url) VALUES ($1, $2, $3) RETURNING *";
        const res = await connection.query(query, [uuid, label, url]);
        connection.release();
        return res.rows[0];
    }
    catch(err){
        console.log(err);
    }
}

async function deletePhoto({uuid}: PostPhoto)
{
    try{
        const connection = await client.connect();
        const query = "DELETE FROM photos WHERE uuid = $1 RETURNING *";
        const res = await connection.query(query, [uuid]);
        connection.release();
        return res.rows[0];
    }
    catch(err){
        console.log(err);
    }
}

const routes = {
    getPhotos,
    postPhoto,
    deletePhoto
}

export default routes;