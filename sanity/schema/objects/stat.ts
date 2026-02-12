import { defineType } from 'sanity'

export default defineType({
  name: 'stat',
  title: 'Statistic',
  type: 'object',
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'string',
      description: 'The statistic number (e.g., "+50", "60K", "100%")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Short label for the statistic',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      description: 'Longer description of the statistic',
      validation: (Rule) => Rule.required(),
    },
  ],
})
