import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';
import { Usuario } from './Usuario';


export const AuthPayload = objectType({
    name: "AuthPayload",
    definition(t) {
      t.string("token")
      t.field("usuario", { type: Usuario })
    }
  })