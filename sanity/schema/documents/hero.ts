import { defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'locale',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Español', value: 'es' },
          { title: 'English', value: 'en' },
        ],
      },
      validation: (Rule) => Rule.required(),
      readOnly: true,
      description: 'Language for this hero content (set via document ID)',
    },
    {
      name: 'pretitle',
      title: 'Pretitle',
      type: 'string',
      description: 'Small text above the main title (e.g., "Agencia Digital de Generación de Clientes")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'line1',
      title: 'Title Line 1',
      type: 'string',
      description: 'First line of the animated title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'line2',
      title: 'Title Line 2',
      type: 'string',
      description: 'Second line of the title (appears in red)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'line3',
      title: 'Title Line 3',
      type: 'string',
      description: 'Third line of the title - accent word (e.g., "claro")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Text for the call-to-action button',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'scroll',
      title: 'Scroll Invite Text',
      type: 'string',
      description: 'Text for the scroll invitation at the bottom',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [{ type: 'stat' }],
      description: 'Four statistics displayed below the title',
      validation: (Rule) => Rule.required().length(4),
    },
  ],
  preview: {
    select: {
      title: 'pretitle',
      subtitle: 'locale',
    },
    prepare({ title, subtitle }) {
      return {
        title: title,
        subtitle: `Language: ${subtitle === 'es' ? 'Español' : 'English'}`,
      }
    },
  },
})
