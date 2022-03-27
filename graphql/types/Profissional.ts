
import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';


export const Profissional = objectType({
    name: "Profissional",
    definition(t) {
      t.string("ambiente")
      t.string("especial")
      t.string("especialidade")
      t.int("grupo")
      t.int("id")
      t.int("idade")
      t.string("imagens")
      t.string("localatendimento")
      t.string("qualificacao")
      t.int("raio")
    }
  })