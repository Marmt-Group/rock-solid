export default {
    name: 'company',
    title: 'Company',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'summary',
            title: 'Company Summary',
            type: 'text'
        },
        {
            name: 'summaryLong',
            title: 'Company Long Summary',
            type: 'text'
        },
        {
            name: 'phone',
            title: 'Phone',
            type: 'string',
        },
        {
            name: 'fax',
            title: 'Fax',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'text'
        }
    ]
}