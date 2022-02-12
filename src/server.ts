import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({message: "Palmeiras campeão mundial te amo"});
});

app.listen(3333, () => console.log("Server is running !"));