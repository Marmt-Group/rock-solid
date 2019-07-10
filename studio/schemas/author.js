import { MdPerson } from 'react-icons/md'

export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    icon: MdPerson,
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'Some frontends will require a slug to be set to be able to show the person',
            options: {
                source: 'name',
                maxLength: 96
            }
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            title: 'Biography',
            name: 'bio',
            type: 'text'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'slug.current',
            media: 'image'
        }
    }
}