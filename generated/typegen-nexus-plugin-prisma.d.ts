import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  Usuario: Prisma.Usuario
  Profissional: Prisma.Profissional
  Cliente: Prisma.Cliente
  Notificacao_Comentario: Prisma.Notificacao_Comentario
  Comentario_Post: Prisma.Comentario_Post
  imgem_perfil: Prisma.imgem_perfil
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    usuarios: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'name' | 'senha' | 'cidade' | 'SobreNome' | 'idade' | 'telefone' | 'genero' | 'Profissionais' | 'clientes' | 'usuario_perfil'
      ordering: 'id' | 'email' | 'name' | 'senha' | 'cidade' | 'SobreNome' | 'idade' | 'telefone' | 'genero' | 'Profissionais' | 'clientes' | 'usuario_perfil'
    }
    profissionals: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'imagens' | 'servico' | 'raio' | 'grupo' | 'ambiente' | 'localatendimento' | 'especial' | 'idade' | 'identificacaoProfissionalId' | 'UsuarioId' | 'especialidade' | 'qualificacao' | 'Comentario_PostsProfissionsl'
      ordering: 'id' | 'imagens' | 'servico' | 'raio' | 'grupo' | 'ambiente' | 'localatendimento' | 'especial' | 'idade' | 'identificacaoProfissionalId' | 'UsuarioId' | 'especialidade' | 'qualificacao' | 'Comentario_PostsProfissionsl'
    }
    clientes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'nivel' | 'medicamentos' | 'identificacaoCliente' | 'UsuarioId' | 'Comentario_PostsCliente' | 'Notificacao_ComentariosCliente'
      ordering: 'id' | 'nivel' | 'medicamentos' | 'identificacaoCliente' | 'UsuarioId' | 'Comentario_PostsCliente' | 'Notificacao_ComentariosCliente'
    }
    notificacaoComentarios: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'comentario' | 'notificacaoID' | 'notificacoes' | 'imgem_perfil' | 'cliente_id' | 'clientedados'
      ordering: 'id' | 'comentario' | 'notificacaoID' | 'notificacoes' | 'imgem_perfil' | 'cliente_id' | 'clientedados'
    }
    comentarioPosts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'nota' | 'coteudo' | 'ComentarioProfissinalID' | 'profissionaisID' | 'createdAt' | 'ComentariosClienteID' | 'clienteID' | 'Notificacao_Comentarios'
      ordering: 'id' | 'nota' | 'coteudo' | 'ComentarioProfissinalID' | 'profissionaisID' | 'createdAt' | 'ComentariosClienteID' | 'clienteID' | 'Notificacao_Comentarios'
    }
    imgemPerfils: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'identificacao_perfil' | 'imagen' | 'UsuarioPerfil'
      ordering: 'id' | 'identificacao_perfil' | 'imagen' | 'UsuarioPerfil'
    }
  },
  Usuario: {
    Profissionais: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'imagens' | 'servico' | 'raio' | 'grupo' | 'ambiente' | 'localatendimento' | 'especial' | 'idade' | 'identificacaoProfissionalId' | 'UsuarioId' | 'especialidade' | 'qualificacao' | 'Comentario_PostsProfissionsl'
      ordering: 'id' | 'imagens' | 'servico' | 'raio' | 'grupo' | 'ambiente' | 'localatendimento' | 'especial' | 'idade' | 'identificacaoProfissionalId' | 'UsuarioId' | 'especialidade' | 'qualificacao' | 'Comentario_PostsProfissionsl'
    }
    clientes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'nivel' | 'medicamentos' | 'identificacaoCliente' | 'UsuarioId' | 'Comentario_PostsCliente' | 'Notificacao_ComentariosCliente'
      ordering: 'id' | 'nivel' | 'medicamentos' | 'identificacaoCliente' | 'UsuarioId' | 'Comentario_PostsCliente' | 'Notificacao_ComentariosCliente'
    }
    usuario_perfil: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'identificacao_perfil' | 'imagen' | 'UsuarioPerfil'
      ordering: 'id' | 'identificacao_perfil' | 'imagen' | 'UsuarioPerfil'
    }
  }
  Profissional: {
    Comentario_PostsProfissionsl: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'nota' | 'coteudo' | 'ComentarioProfissinalID' | 'profissionaisID' | 'createdAt' | 'ComentariosClienteID' | 'clienteID' | 'Notificacao_Comentarios'
      ordering: 'id' | 'nota' | 'coteudo' | 'ComentarioProfissinalID' | 'profissionaisID' | 'createdAt' | 'ComentariosClienteID' | 'clienteID' | 'Notificacao_Comentarios'
    }
  }
  Cliente: {
    Comentario_PostsCliente: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'nota' | 'coteudo' | 'ComentarioProfissinalID' | 'profissionaisID' | 'createdAt' | 'ComentariosClienteID' | 'clienteID' | 'Notificacao_Comentarios'
      ordering: 'id' | 'nota' | 'coteudo' | 'ComentarioProfissinalID' | 'profissionaisID' | 'createdAt' | 'ComentariosClienteID' | 'clienteID' | 'Notificacao_Comentarios'
    }
    Notificacao_ComentariosCliente: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'comentario' | 'notificacaoID' | 'notificacoes' | 'imgem_perfil' | 'cliente_id' | 'clientedados'
      ordering: 'id' | 'comentario' | 'notificacaoID' | 'notificacoes' | 'imgem_perfil' | 'cliente_id' | 'clientedados'
    }
  }
  Notificacao_Comentario: {

  }
  Comentario_Post: {
    Notificacao_Comentarios: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'comentario' | 'notificacaoID' | 'notificacoes' | 'imgem_perfil' | 'cliente_id' | 'clientedados'
      ordering: 'id' | 'comentario' | 'notificacaoID' | 'notificacoes' | 'imgem_perfil' | 'cliente_id' | 'clientedados'
    }
  }
  imgem_perfil: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    usuario: 'Usuario'
    usuarios: 'Usuario'
    profissional: 'Profissional'
    profissionals: 'Profissional'
    cliente: 'Cliente'
    clientes: 'Cliente'
    notificacaoComentario: 'Notificacao_Comentario'
    notificacaoComentarios: 'Notificacao_Comentario'
    comentarioPost: 'Comentario_Post'
    comentarioPosts: 'Comentario_Post'
    imgemPerfil: 'imgem_perfil'
    imgemPerfils: 'imgem_perfil'
  },
  Mutation: {
    createOneUsuario: 'Usuario'
    updateOneUsuario: 'Usuario'
    updateManyUsuario: 'AffectedRowsOutput'
    deleteOneUsuario: 'Usuario'
    deleteManyUsuario: 'AffectedRowsOutput'
    upsertOneUsuario: 'Usuario'
    createOneProfissional: 'Profissional'
    updateOneProfissional: 'Profissional'
    updateManyProfissional: 'AffectedRowsOutput'
    deleteOneProfissional: 'Profissional'
    deleteManyProfissional: 'AffectedRowsOutput'
    upsertOneProfissional: 'Profissional'
    createOneCliente: 'Cliente'
    updateOneCliente: 'Cliente'
    updateManyCliente: 'AffectedRowsOutput'
    deleteOneCliente: 'Cliente'
    deleteManyCliente: 'AffectedRowsOutput'
    upsertOneCliente: 'Cliente'
    createOneNotificacao_Comentario: 'Notificacao_Comentario'
    updateOneNotificacao_Comentario: 'Notificacao_Comentario'
    updateManyNotificacao_Comentario: 'AffectedRowsOutput'
    deleteOneNotificacao_Comentario: 'Notificacao_Comentario'
    deleteManyNotificacao_Comentario: 'AffectedRowsOutput'
    upsertOneNotificacao_Comentario: 'Notificacao_Comentario'
    createOneComentario_Post: 'Comentario_Post'
    updateOneComentario_Post: 'Comentario_Post'
    updateManyComentario_Post: 'AffectedRowsOutput'
    deleteOneComentario_Post: 'Comentario_Post'
    deleteManyComentario_Post: 'AffectedRowsOutput'
    upsertOneComentario_Post: 'Comentario_Post'
    createOneimgem_perfil: 'imgem_perfil'
    updateOneimgem_perfil: 'imgem_perfil'
    updateManyimgem_perfil: 'AffectedRowsOutput'
    deleteOneimgem_perfil: 'imgem_perfil'
    deleteManyimgem_perfil: 'AffectedRowsOutput'
    upsertOneimgem_perfil: 'imgem_perfil'
  },
  Usuario: {
    id: 'Int'
    email: 'String'
    name: 'String'
    senha: 'String'
    cidade: 'String'
    SobreNome: 'String'
    idade: 'Int'
    telefone: 'String'
    genero: 'String'
    Profissionais: 'Profissional'
    clientes: 'Cliente'
    usuario_perfil: 'imgem_perfil'
  }
  Profissional: {
    id: 'Int'
    imagens: 'String'
    servico: 'String'
    raio: 'Int'
    grupo: 'Int'
    ambiente: 'String'
    localatendimento: 'String'
    especial: 'String'
    idade: 'Int'
    identificacaoProfissionalId: 'Int'
    UsuarioId: 'Usuario'
    especialidade: 'String'
    qualificacao: 'String'
    Comentario_PostsProfissionsl: 'Comentario_Post'
  }
  Cliente: {
    id: 'Int'
    nivel: 'Int'
    medicamentos: 'String'
    identificacaoCliente: 'Int'
    UsuarioId: 'Usuario'
    Comentario_PostsCliente: 'Comentario_Post'
    Notificacao_ComentariosCliente: 'Notificacao_Comentario'
  }
  Notificacao_Comentario: {
    id: 'Int'
    comentario: 'String'
    notificacaoID: 'Int'
    notificacoes: 'Comentario_Post'
    imgem_perfil: 'String'
    cliente_id: 'Int'
    clientedados: 'Cliente'
  }
  Comentario_Post: {
    id: 'Int'
    nota: 'Int'
    coteudo: 'String'
    ComentarioProfissinalID: 'Int'
    profissionaisID: 'Profissional'
    createdAt: 'DateTime'
    ComentariosClienteID: 'Int'
    clienteID: 'Cliente'
    Notificacao_Comentarios: 'Notificacao_Comentario'
  }
  imgem_perfil: {
    id: 'Int'
    identificacao_perfil: 'Int'
    imagen: 'String'
    UsuarioPerfil: 'Usuario'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  Usuario: Typegen.NexusPrismaFields<'Usuario'>
  Profissional: Typegen.NexusPrismaFields<'Profissional'>
  Cliente: Typegen.NexusPrismaFields<'Cliente'>
  Notificacao_Comentario: Typegen.NexusPrismaFields<'Notificacao_Comentario'>
  Comentario_Post: Typegen.NexusPrismaFields<'Comentario_Post'>
  imgem_perfil: Typegen.NexusPrismaFields<'imgem_perfil'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  