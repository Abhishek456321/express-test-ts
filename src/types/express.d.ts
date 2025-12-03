import "express-serve-static-core";
declare module "express-serve-static-core" {
  namespace Express {
    interface Request {
      user?: { id: string; role: string };
      file?: Express.Multer.File;
      files?:
        | { [fieldname: string]: Express.Multer.File[] }
        | Express.Multer.File[];
    }
  }
}
