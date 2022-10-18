import { makeSchema } from 'nexus'
import { join } from "path";
import * as types from "./types";
export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), 'graphql/nexus', 'generated/nexus-typegen.ts'),
    schema: join(process.cwd(), 'graphql/nexus', 'generated/schema.graphql'),
},
  contextType: {
    export: "Context",
    module: join(process.cwd(), "graphql", "context.ts"),
  },
  sourceTypes: {
    modules: [
        {
            module: '@prisma/client',
            alias: 'prisma',
        },
       
    ],
},
}) as any


