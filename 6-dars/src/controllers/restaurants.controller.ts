import { NextFunction, Request, Response } from "express";
import { PrismaClient, Restaurant } from "@prisma/client";
import { ErrorHandler } from "@errors";

let client = new PrismaClient();

export class RestaurantsController {
  static async GetAllRestaurants(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      let restaurants: Restaurant[] = await client.restaurant.findMany();
      res.status(200).send({
        success: true,
        data: restaurants,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async CreateRestaurants(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      let { name, address, phone }: Omit<Restaurant, "id"> = req.body;

      let newRestaurant: Restaurant = await client.restaurant.create({
        data: {
          name,
          address,
          phone,
        },
      });

      res.status(200).send({
        success: true,
        message: "Restaurant was created",
        data: newRestaurant,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async UpdateRestaurant(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      let { id, name, address, phone }: Partial<Restaurant> = req.body;

      let newRestaurant: Restaurant = await client.restaurant.update({
        where: {
          id: id,
        },
        data: {
          name,
          address,
          phone,
        },
      });

      res.status(200).send({
        success: true,
        message: "Restaurant was updated",
        data: newRestaurant,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async DeleteRestaurant(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      let { id }: { id: number } = req.body;

      if (!id || isNaN(id)) {
        return res.status(400).send({
          success: false,
          message: "Invalid restaurant ID",
        });
      }

      let existingRestaurant = await client.restaurant.findUnique({
        where: { id },
      });

      if (!existingRestaurant) {
        return res.status(404).send({
          success: false,
          message: "Restaurant not found",
        });
      }

      let deletedRestaurant = await client.restaurant.delete({
        where: {
          id,
        },
      });

      res.status(200).send({
        success: true,
        message: "Restaurant was deleted",
        data: deletedRestaurant,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }
}
