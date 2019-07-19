export default {
    name: 'beforeAfter',
    title: 'Before & After',
    type: 'document',
    fields: [
        {
            name: 'publishedAt',
            title: 'Published at',
            description: 'Projects will be shown from earliest to latest date',
            type: 'datetime'
        },
        {
            name: 'title',
            title: 'Title',
            description: 'Title, not shown, and can be left blank',
            type: 'string'
        },
        {
            name: 'beforeImage',
            title: 'Before image',
            type: 'mainImage'
        },
        {
            name: 'afterImage',
            title: 'After image',
            type: 'mainImage'
        }
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'publishedAt',
            image: 'beforeImage'
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
