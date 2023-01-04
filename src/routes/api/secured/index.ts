import { Router } from "express";

import auth  from "./auth";
import words from "./words";
import language from "./language";
import { authenticateToken } from "../../../middlewares/auth";


const api = Router();

api.use("/auth", auth);
api.use("/words", authenticateToken,  words);
api.use("/language", language);



export default api;
