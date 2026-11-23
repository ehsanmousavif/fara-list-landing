import { NextResponse } from 'next/server';
import { seedBlogDatabase } from '@/lib/payload/blogs';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const force = searchParams.get('force') === 'true';

    await seedBlogDatabase(force);

    return NextResponse.json({
      success: true,
      message: 'پایگاه داده مقالات وبلاگ با موفقیت با دیتای سئو و متاتگ‌های فارسی سید (Seed) شد.',
    });
  } catch (error: any) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'خطا در ثبت اطلاعات در دیتابیس',
      },
      { status: 500 }
    );
  }
}
