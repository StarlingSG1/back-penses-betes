import { Router } from "express";
const fetch = require("node-fetch");
const dotenv = require("dotenv");
import bcrypt from "bcryptjs";
dotenv.config();
import prisma from "../../../helpers/prisma";
import ucwords from "../../../helpers/cleaner";
import jwt from "jsonwebtoken";

const api = Router();

function capitalizeFirstLetter(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

api.post("/", async ({ body }, res) => {
    try {
        const { token } = body;
        const { email } = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        if (user) {
            const languages = await prisma.language.findMany({
                orderBy: {
                    name: "asc",
                },
            });

            return res.status(200).json({ data: languages });
        }

    } catch (error) {
        console.log(error);
    }
});




export default api;