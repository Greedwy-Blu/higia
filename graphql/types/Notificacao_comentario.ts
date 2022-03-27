import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';


export const Notificacao_Comentario = objectType({
  name: "Notificacao_Comentario",
  definition(t) {
     t.string("comentario")
    t.int("id")
    t.string("imgem_perfil")
   }
})