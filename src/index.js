const express = require("express");
const app = express();

app.get("/pickupLine", (req, res) => {
    const pickupLines = require("./pickupline.json");

    if (!pickupLines) {
        res.status(500).json("");
    }

    const randomNumber = Math.floor(Math.random() * pickupLines.length);

    res.status(200).json(pickupLines[randomNumber]);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});