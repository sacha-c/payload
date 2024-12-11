import type { CollectionConfig } from 'payload'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'bugReproduction',
      type: 'ui',
      admin: {
        components: {
          Field: {
            path: 'test/_community/components/FieldServerComponentIssue',
            serverProps: {
              myValue: () => 'hello world', // As a serverProp, I expect to be able to pass function and other unserializable data
            },
          },
        },
      },
    },
  ],
  versions: {
    drafts: true,
  },
}
