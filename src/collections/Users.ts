import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'ادمین',
    plural: 'ادمین‌ها',
  },
  admin: {
    useAsTitle: 'username',
    defaultColumns: ['name', 'username', 'createdAt'],
  },
  auth: {
    loginWithUsername: {
      allowEmailLogin: false,
      requireEmail: false,
      requireUsername: true,
    },
  },
  fields: [
    {
      name: 'username',
      type: 'text',
      label: 'شماره موبایل',
      required: true,
      unique: true,
      index: true,
      admin: {
        placeholder: '09123456789',
        description: 'شماره موبایل جهت ورود به پنل مدیریت',
      },
      validate: (value: any) => {
        if (!value) return 'شماره موبایل الزامی است';
        const cleanPhone = String(value).trim().replace(/\s+/g, '');
        if (!/^(09\d{9}|\+989\d{9})$/.test(cleanPhone)) {
          return 'شماره موبایل نامعتبر است. نمونه صحیح: 09123456789';
        }
        return true;
      },
    },
    {
      name: 'name',
      type: 'text',
      label: 'نام و نام خانوادگی',
    },
  ],
};
