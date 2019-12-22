import moment from 'moment'

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
  orderings: [
    {
      title: 'ID, (Alphanumeric)',
      name: 'projectId',
      by: [
        {field: '_id', direction: 'asc'}
      ]
    },
    {
      title: 'Category',
      name: 'categoryName',
      by: [
        { field: 'categories', direction: 'asc' }
      ]
    }
  ],
  preview: {
    select: {
      id: '_id',
      title: 'title',
      publishedAt: 'publishedAt',
      image: 'mainImage'
    },
    prepare({ title = 'No title', id, publishedAt, image}) {
      return {
        title,
        subtitle: `ID: ${id.substr(0, 4)}`,
        media: image,
        description: moment(publishedAt).format('MMMM Do YYYY, h:mm:ss a')
      }
    }
  }
}
