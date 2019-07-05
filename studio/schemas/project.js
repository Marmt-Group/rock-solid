export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' }
        },
        {
            name: 'type',
            title: 'Project Type',
            type: 'reference',
            to: { type: 'category' }
        },
        {
            title: 'description',
            name: 'Description',
            type: 'text'
        }
    ]
}