import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  name: 'default',
  title: 'Magnetia 2026',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Hero Section - Organized by language
            S.listItem()
              .title('Hero Section')
              .child(
                S.list()
                  .title('Hero by Language')
                  .items([
                    S.listItem()
                      .title('🇪🇸 Español')
                      .child(
                        S.document()
                          .schemaType('hero')
                          .documentId('hero-es')
                      ),
                    S.listItem()
                      .title('🇬🇧 English')
                      .child(
                        S.document()
                          .schemaType('hero')
                          .documentId('hero-en')
                      ),
                  ])
              ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
