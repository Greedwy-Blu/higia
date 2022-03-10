import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UsuarioCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    senha: 'dds',
    cidade: 'ss',
    SobreNome: 'sdsd',
    idade: 23,
    telefone: '32343',
    genero:'fe',
    Profissionais: {
      create: [
        {
          servico: 'Join the Prisma Slack',
          imagens: 'https://slack.prisma.io',
          raio: 32,
          grupo: 3,
          ambiente: 'dds',
          localatendimento:'SIM',
          especial: 'SIM',
          idade: 21,
          especialidade: 'dd',
          qualificacao: 'cd'

        },
      ],
    },
  },

]

export async function main() {
  try {
    console.log(`Start seeding ...`)
    for (const u of userData) {
      const user = await prisma.usuario.create({
        data: u,
      })
      console.log(`Created user with id: ${user.id}`)
    }
    console.log(`Seeding finished.`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main()