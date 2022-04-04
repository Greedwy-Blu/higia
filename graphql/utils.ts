
import { verify } from 'jsonwebtoken'
import { AuthenticationError } from 'apollo-server-micro'
import { Context } from './context'
export const APP_SECRET = 'SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'



interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const authHeader = context.req.headers.authorization || ""
  try {
      if (authHeader) {
          const token = authHeader.replace("Bearer ", "")
          console.log(token);
          const verifiedToken = verify(token, APP_SECRET) as Token
          return verifiedToken && Number(verifiedToken.userId)
      }
  } catch (err) {
      throw new AuthenticationError(
          'Authentication token is invalid, please log in',
      )
  }
}