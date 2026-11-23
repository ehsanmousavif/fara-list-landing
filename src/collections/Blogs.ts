import type { CollectionConfig } from 'payload';

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  labels: {
    singular: 'مقاله',
    plural: 'مقالات وبلاگ',
  },
  admin: {
    group: 'وبلاگ',
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedAt', 'featured', 'status'],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'عنوان مقاله',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'شناسه یکتا (Slug در آدرس URL)',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'تصویر شاخص مقاله (آپلود مستقیم عکس)',
      admin: {
        description: 'تصویر شاخص مقاله را مستقیماً از اینجا آپلود یا انتخاب کنید',
      },
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'یا لینک اینترنتی تصویر (در صورت عدم آپلود)',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'خلاصه مقاله (توضیحات کوتاه)',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'دسته‌بندی',
      required: true,
      defaultValue: 'آموزش',
      options: [
        { label: 'آموزش', value: 'آموزش' },
        { label: 'کاتالوگ آنلاین', value: 'کاتالوگ آنلاین' },
        { label: 'به‌روزرسانی قیمت', value: 'به‌روزرسانی قیمت' },
        { label: 'راهنمای فروش', value: 'راهنمای فروش' },
        { label: 'تجربه مشتریان', value: 'تجربه مشتریان' },
      ],
    },
    {
      name: 'readingTime',
      type: 'text',
      label: 'مدت زمان مطالعه (مثلاً: ۳ دقیقه)',
      defaultValue: '۳ دقیقه',
    },
    {
      name: 'publishedAt',
      type: 'text',
      label: 'تاریخ انتشار (شمسی)',
      defaultValue: 'آبان ۱۴۰۳',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'مقاله ویژه (Featured)',
      defaultValue: false,
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'پاراگراف‌های متن اصلی مقاله',
      labels: {
        singular: 'پاراگراف',
        plural: 'پاراگراف‌ها',
      },
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'متن پاراگراف',
          required: true,
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      label: 'برچسب‌ها / تگ‌ها',
      labels: {
        singular: 'برچسب',
        plural: 'برچسب‌ها',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          label: 'عنوان برچسب',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      label: 'وضعیت انتشار',
      defaultValue: 'published',
      options: [
        { label: 'منتشر شده', value: 'published' },
        { label: 'پیش‌نویس', value: 'draft' },
      ],
    },
  ],
};
