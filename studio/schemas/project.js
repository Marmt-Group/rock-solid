export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'publishedAt',
      title: 'Published at',
      description: 'Images will be shown from earliest to latest date',
      type: 'datetime'
    },
    {
      name: 'title',
      title: 'Title',
      description: 'Title, not shown, and can be left blank',
      type: 'string'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'mainImage'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'mainImage'
    },
    prepare({ title = 'No title', publishedAt, image }) {
      return {
        title,
        subtitle: publishedAt
          ? new Date(publishedAt).toLocaleDateString()
          : 'Missing publishing date',
        media: image
      }
    }
  }
}
