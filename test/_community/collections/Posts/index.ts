import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
    enableListViewSelectAPI: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'test',
      type: 'upload',
      relationTo: 'media',
      localized: true,
    },
  ],
  hooks: {
    beforeRead: [
      ({ doc }) => {
        console.log('beforeRead', doc)
        // If field was saved non-localized (pre-localization), it will be an ObjectId instance which needs to be cast to string
        if (doc.test._id) {
          doc.test = `${doc.test._id}`
        }
        return doc
      },
    ],
    afterRead: [
      ({ doc }) => {
        console.log('afterRead', doc)
        return doc
      },
    ],
  },
}
