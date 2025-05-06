import { Router } from "express";
import auth from "../middlewares/auth.js";
import { deleteAddressController } from "../controllers/address.controller.js";

const addressRouter = Router();

addressRouter.delete("/:id", auth, deleteAddressController);
