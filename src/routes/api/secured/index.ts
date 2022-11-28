import { Router } from "express";

import auth  from "./auth";
import words from "./words";
import language from "./language";

const api = Router();

api.use("/auth", auth);
api.use("/words", words);
api.use("/language", language);



export default api;
