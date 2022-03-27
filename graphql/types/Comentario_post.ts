import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';

export const Comentario_Post = objectType({
    name: "Comentario_Post",
    definition(t) {
        t.string("coteudo")
     t.int("id")
      t.int("nota")
   }
  })