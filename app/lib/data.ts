import axios from "axios";
const client = axios.create({
    baseURL: "https://zenquotes.io"
});

export async function fetchRandom(){
    return await client.get("/api/quotes")
}