import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'تصویر / رسانه',
    plural: 'تصاویر و رسانه‌ها',
  },
  admin: {
    group: 'وبلاگ',
  },
  upload: {
    staticDir: 'public/uploads',
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'متن جایگزین (Alt Text)',
    },
  ],
};
