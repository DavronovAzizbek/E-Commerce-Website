import { RestaurantsController } from "@controllers";
import { MenuController } from "@controllers";
import { Router } from "express";

let router: Router = Router();

// Restaurant
router.get("/restaurants/all", RestaurantsController.GetAllRestaurants);
router.post("/restaurants/create", RestaurantsController.CreateRestaurants);
router.patch("/restaurants/update", RestaurantsController.UpdateRestaurant);
router.delete("/restaurants/delete", RestaurantsController.DeleteRestaurant);

// Menu
router.get("/menu/all", MenuController.GetAllMenu);
router.post("/menu/create", MenuController.CreateMenu);
router.patch("/menu/update", MenuController.UpdateMenu);
router.delete("/menu/delete", MenuController.DeleteMenu);

export default router;
