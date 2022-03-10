import { verify } from 'jsonwebtoken'
import { Context } from './context'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()
export const APP_SECRET = 'tentaserlocuameudeusansecoesera43231'

interface Token {
  userId: string
}


export const getUserId = (context: Context) => {
  // const authTokenWithBarer = context.request.request
  //   ? context.request.request.headers.authorization
  //   : context.request.connection.context.Authorization;
  const authTokenWithBarer = context.req.headers.authorization.split(' ')[1];
  if (authTokenWithBarer) {
    const token = authTokenWithBarer;
    const user = verify(token,'tentaserlocuameudeusansecoesera43231') as Token;
    return user && String(user.userId);
  }
};