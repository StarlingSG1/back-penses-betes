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

api.get("/", async (req, res) => {
  try {
    const user = req.user;
    const theUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (theUser) {
      const words = await prisma.word.findMany({
        where: {
          userId: user.id,
        },
        include: {
          language: true,
        },
        orderBy: {
          name: "asc",
        },
      });

      return res.status(200).json({ data: words });
    }
  } catch (error) {
    console.log(error);
  }
});


api.post("/create", async (req, res) => {
  try {
    const { name, languageId, definition, traduction } = req.body;
    const user = req.user;
    if (user) {
      if (!name) {
        const allWords = await prisma.word.findMany({
          where: {
            userId: user.id,
          },
          include: {
            language: true,
          },
          orderBy: {
            name: "asc",
          },
        });

        return res.status(200).json({ error: true, message: "Le mot est requis", data: allWords });
      }


      const newWord = await prisma.word.create({
        data: {
          name: capitalizeFirstLetter(name),
          languageId: languageId,
          traduction: capitalizeFirstLetter(traduction),
          definition: definition,
          userId: user.id,
        },
      });


      const allWords = await prisma.word.findMany({
        where: {
          userId: user.id,
        },
        include: {
          language: true,
        },
        orderBy: {
          name: "asc",
        },
      });

      return res.status(200).json({ error: false, data: allWords, message: "Le mot a bien été ajouté" });
    }
  } catch (error) {
    console.log(error);
  }
});

api.post("/delete", async (req, res) => {
  try {
    const { id } = req.body;
    const user = req.user
    const newUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (newUser) {
      const word = await prisma.word.findUnique({
        where: {
          id: id,
        },
      });

      if (word) {
        const deletedWord = await prisma.word.delete({
          where: {
            id: id,
          },
        });

        const allWords = await prisma.word.findMany({
          where: {
            userId: user.id,
          },
          include: {
            language: true,
          },
          orderBy: {
            name: "asc",
          },
        });

        return res.status(200).json({ error: false, data: allWords, message: "Le mot a bien été supprimé" });
      } else {
        const allWords = await prisma.word.findMany({
          where: {
            userId: user.id,
          },
          include: {
            language: true,
          },
          orderBy: {
            name: "asc",
          },
        });
        return res.status(200).json({ error: true, data: allWords, message: "Le mot n'existe pas" });
      }
    }
  } catch (error) {
    console.log(error);
  }
});

api.post("/update", async (req, res) => {
  try {
    const { id, name, languageId, definition, traduction } = req.body;
    const user = req.user;
    const newUser = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    if (newUser) {
      const wordToUpdate = await prisma.word.findUnique({
        where: {
          id: id,
        },
      });

      if (wordToUpdate) {
        const updatedWord = await prisma.word.update({
          where: {
            id: id,
          },
          data: {
            name: capitalizeFirstLetter(name),
            languageId: languageId,
            traduction: capitalizeFirstLetter(traduction),
            definition: definition,
          },
        });

        const allWords = await prisma.word.findMany({
          where: {
            userId: user.id,
          },
          include: {
            language: true,
          },
          orderBy: {
            name: "asc",
          },
        });

        return res.status(200).json({ error: false, data: allWords, message: "Le mot a bien été modifié" });
      } else {

        return res.status(200).json({ error: true, message: "Le mot n'existe pas" });
      }
    }else{
      return res.status(200).json({ error: true, message: "Vous n'êtes pas connecté" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default api;