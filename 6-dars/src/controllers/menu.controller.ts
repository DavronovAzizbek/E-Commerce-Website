import { NextFunction, Request, Response } from "express";
import { PrismaClient, Menu } from "@prisma/client";
import { ErrorHandler } from "@errors";

let client = new PrismaClient();

export class MenuController {
  static async GetAllMenu(req: Request, res: Response, next: NextFunction) {
    try {
      let menu: Menu[] = await client.menu.findMany();
      res.status(200).send({
        success: true,
        data: menu,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async CreateMenu(req: Request, res: Response, next: NextFunction) {
    try {
      let { title, price }: Omit<Menu, "id"> = req.body;

      let newMenu: Menu = await client.menu.create({
        data: {
          title,
          price,
        },
      });

      res.status(200).send({
        success: true,
        message: "Menu Created",
        data: newMenu,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async UpdateMenu(req: Request, res: Response, next: NextFunction) {
    try {
      let { id, title, price }: Partial<Menu> = req.body;

      let newMenu: Menu = await client.menu.update({
        where: {
          id: id,
        },
        data: {
          title,
          price,
        },
      });

      res.status(200).send({
        success: true,
        message: "Menu Updated",
        data: newMenu,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }

  static async DeleteMenu(req: Request, res: Response, next: NextFunction) {
    try {
      let { id }: { id: number } = req.body;

      if (!id || isNaN(id)) {
        return res.status(400).send({
          success: false,
          message: "Invalid ID",
        });
      }

      let existingMenu = await client.menu.findUnique({
        where: { id },
      });

      if (!existingMenu) {
        return res.status(404).send({
          success: false,
          message: "Menu not found",
        });
      }

      let deleteMenu = await client.menu.delete({
        where: {
          id,
        },
      });

      res.status(200).send({
        success: true,
        message: "Menu deleted",
        data: deleteMenu,
      });
    } catch (error: any) {
      next(new ErrorHandler(error.message, error.status));
    }
  }
}
