import { enumType, intArg, objectType, stringArg } from 'nexus';
import { extendType } from 'nexus';

import { Usuario } from './Usuario';

export const imagem_perfil = objectType({
    name: "imagem_perfil",
    definition(t) {
     t.string("id")
      t.string("imagen")
    }
  })