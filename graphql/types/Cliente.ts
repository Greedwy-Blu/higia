import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';


export const Cliente = objectType({
    name: "Cliente",
    definition(t) {
       t.int("id")
      t.string("medicamentos")
      t.int("nivel")
     }
  })