import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'

const hiddenTypes = ['beforeAfter', 'category', 'companyInfo', 'faq', 'project', 'siteSettings', 'video', 'testimonials']

export default () =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Site Settings')
                .child(
                    S.editor()
                        .id('siteSettings')
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                )
                .icon(MdSettings),
            S.listItem()
                .title('Company Info')
                .child(
                    S.editor()
                        .id('companyInfo')
                        .schemaType('companyInfo')
                        .documentId('companyInfo')
                )
                .icon(MdBusiness),
            S.listItem()
                .title('Project Categories')
                .schemaType('category')
                .child(S.documentTypeList('category').title('Project Categories')),
            S.listItem()
                .title('Projects')
                .schemaType('project')
                .child(S.documentTypeList('project')),
            S.listItem()
                .title('Projects Before & After')
                .schemaType('beforeAfter')
                .child(S.documentTypeList('beforeAfter').title('Project')),
            S.listItem()
                .title('FAQs')
                .schemaType('faq')
                .child(S.documentTypeList('faq').title('FAQ')),
            S.listItem()
                .title('Testimonials')
                .schemaType('testimonials')
                .child(S.documentTypeList('testimonials').title('Testimonial')),
            S.listItem()
                .title('Videos')
                .schemaType('video')
                .child(S.documentTypeList('video').title('Video')),
            ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
        ])