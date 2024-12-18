import type { CollectionConfig } from 'payload'

export const mediaSlug = 'media'

export const MediaCollection: CollectionConfig = {
  slug: mediaSlug,
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'test',
      type: 'checkbox',
      validate: async (_, options): Promise<string | true> => {
        if (!('file' in options.siblingData)) {
          // Payload has not loaded the file yet, pass validation
          return true
        }

        try {
          const result = await (options.siblingData.file as File).arrayBuffer()
          console.log('result', result)

          // perform validation with the arrayBuffer, loading it in memory & checking details of the object
          // ...
        } catch (error) {
          console.log('error', error)
        }

        return true
      },
    },
  ],
  upload: {
    crop: true,
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        height: 200,
        width: 200,
      },
      {
        name: 'medium',
        height: 800,
        width: 800,
      },
      {
        name: 'large',
        height: 1200,
        width: 1200,
      },
    ],
  },
}
