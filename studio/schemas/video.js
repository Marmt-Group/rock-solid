export default {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
        {
            title: "Project Video",
            name: "video",
            type: "mux.video"
        },
        {
            name: 'type',
            title: 'Project Type',
            type: 'reference',
            to: { type: 'category' }
        }
    ]
}