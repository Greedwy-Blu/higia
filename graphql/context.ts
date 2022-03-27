import { PrismaClient } from '@prisma/client'
import Cookies from 'js-cookie'
import { setContext } from 'apollo-link-context'
import type { NextApiRequest, NextApiResponse } from 'next'
import {getUserId} from './utils';
import prisma from "../lib/prisma";

export type Context = {
  prisma: PrismaClient
  req: any   // HTTP request carrying the `Authorization` header
}

export async function createContext(req: any, res: NextApiRequest): Promise<Context> {
  return {
      prisma,
      ...req
  }
}