
import { enumType, intArg, objectType, stringArg, nonNull, arg,
    extendType, inputObjectType} from 'nexus';
   import { Cliente } from './Cliente';
  import { Profissional } from './Profissional';
  import { imagem_perfil } from './Imagem_perfil';

export const profissionalCreateInput = inputObjectType({
    name: "profissionalCreateInput",
    definition(t) {
      t.string("ambiente")
      t.string("especial")
      t.string("especialidade")
      t.int("grupo")
      t.string("id")
      t.string("idade")
      t.string("imagens")
      t.string("localatendimento")
      t.string("qualificacao")
      t.int("raio")
      t.int("UsuarioId")
    }
  });
  export const profissionalWhereUniqueInput = inputObjectType({
    name: "ProfissionalWhereUniqueInput",
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
  });
  export const usuarioCreateInput = inputObjectType({
    name: "UsuarioCreateInput",
    definition(t) {
      t.string("email")
      t.list.field("relacionamentosUsuariom", { type: profissionalCreateInput })
      t.string("senha")
    }
  });
  
  export const clienteCreateInput = inputObjectType({
  name: 'clienteCreateInput',
  
  definition(t){
    t.nonNull.string("id")
    t.string("medicamentos")
    t.int("nivel")
   
  
  }
  
  
  
  });
  
  export const imgemPerfilInput = inputObjectType({
    name:'imgemPerfil',
    definition(t){
           
      t.string("id")
      t.string("imagen")
    
    }
  });