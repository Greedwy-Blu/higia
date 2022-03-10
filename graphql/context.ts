import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface Context {
  prisma: PrismaClient
  req: any
  request: {
    request: {
      Headers: {
        Authorization: string;
      };
    };
    connection: {
      context: {
        Authorization: string;
      };
    };
  };

  };
   // HTTP request carrying the `Authorization` header


export const createContext = (req:any) => {
 
  return {
    ...req,
    prisma,
    request:req,
  
  }
}