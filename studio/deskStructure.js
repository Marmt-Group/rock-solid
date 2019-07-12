import S from '@sanity/desk-tool/structure-builder'
import { MdBusiness, MdSettings } from 'react-icons/md'
import { FaFile } from 'react-icons/fa'

const hiddenTypes = ['author', 'category', 'companyInfo', 'cta', 'faq', 'page', 'project', 'siteSettings', 'video', 'testimonials']

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
                .title('People')
                .schemaType('author')
                .child(S.documentTypeList('author').title('People')),
            S.listItem()
                .title('Project Categories')
                .schemaType('category')
                .child(S.documentTypeList('category').title('Project Categories')),
            S.listItem()
                .title('Projects')
                .schemaType('project')
                .child(S.documentTypeList('project')),
            S.listItem()
                .title('Call to Actions')
                .schemaType('cta')
                .child(S.documentTypeList('cta').title('CTAs')),
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
            S.listItem()
                .title('Pages')
                .child(
                    S.list()
                        .title('Pages')
                        .items([
                            S.listItem()
                                .title('About')
                                .child(
                                    S.editor()
                                        .id('aboutPage')
                                        .schemaType('page')
                                        .documentId('about')
                                )
                                .icon(FaFile),
                            S.listItem()
                                .title('Contact')
                                .child(
                                    S.editor()
                                        .id('contactPage')
                                        .schemaType('page')
                                        .documentId('contact')
                                )
                                .icon(FaFile)
                        ])
                ),
            ...S.documentTypeListItems().filter(listItem => !hiddenTypes.includes(listItem.getId()))
        ])