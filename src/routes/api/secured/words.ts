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


api.post("/create", async ({ body }, res) => {
  try {
    const { token, word, language, definition, traduction } = body;
    const { email } = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });


    if (user) {

      if (!word) {

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
          name: capitalizeFirstLetter(word),
          languageId: language,
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

api.post("/delete", async ({ body }, res) => {
  try {
    const { token, id } = body;
    const { email } = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
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

api.post("/update", async ({ body }, res) => {
  try {
    const { token, id, name, languageId, definition, traduction } = body;
    const { email } = jwt.verify(token, process.env.TOKEN_SECRET);
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
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
    }else{
      return res.status(200).json({ error: true, message: "Vous n'êtes pas connecté" });
    }
  } catch (error) {
    console.log(error);
  }
});

export default api;