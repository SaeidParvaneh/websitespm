
import { NewsItem, PromptItem, PromptCategory } from './types';

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'هوش مصنوعی Sora به زودی در دسترس عموم قرار می‌گیرد',
    summary: 'OpenAI اعلام کرد که مدل تبدیل متن به ویدیو سورا در ماه‌های آینده برای تمامی کاربران فعال خواهد شد.',
    content: 'جزئیات بیشتر درباره انتشار عمومی سورا نشان می‌دهد که این ابزار با محدودیت‌های اخلاقی شدید عرضه خواهد شد تا از سوءاستفاده‌های احتمالی جلوگیری شود...',
    category: 'ویدیو',
    date: '۱۴۰۳/۱۲/۰۶',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    author: 'تیم تحریریه SPM'
  },
  {
    id: 'n2',
    title: 'تراشه‌های جدید انویدیا دنیای AI را تکان داد',
    summary: 'معماری جدید بلک‌ول با توان پردازشی ۵ برابر نسبت به نسل قبل معرفی شد.',
    category: 'سخت‌افزار',
    date: '۱۴۰۳/۱۲/۰۵',
    imageUrl: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
    author: 'رضا علوی'
  },
  {
    id: 'n3',
    title: 'گوگل جمینای ۳.۰؛ رقیبی سرسخت برای GPT-5',
    summary: 'شایعات حاکی از آن است که گوگل در حال نهایی‌سازی نسخه جدید مدل زبانی خود با حافظه نامحدود است.',
    category: 'مدل‌های زبانی',
    date: '۱۴۰۳/۱۲/۰۴',
    imageUrl: 'https://images.unsplash.com/photo-1676299081847-824916ff030a?auto=format&fit=crop&q=80&w=800',
    author: 'سارا کریمی'
  }
];

export const MOCK_PROMPTS: PromptItem[] = [
  {
    id: 'p1',
    category: PromptCategory.IMAGE,
    title: 'کاراکتر نانو موزی (Nano Banana)',
    description: 'خلق یک کاراکتر ثابت در محیط‌های مختلف با حفظ ویژگی‌های چهره.',
    prompt: 'Keep the same anchor character from the reference image. Show him sitting at a computer desk editing videos, same face and dark sunglasses, same hairstyle. Change only the clothes to a black T-shirt and the background to a cozy room with LED strips. Realistic, cinematic lighting.',
    imageUrl: 'https://picsum.photos/seed/nano1/800/1200',
    tags: ['واقع‌گرایانه', 'سینمایی']
  },
  {
    id: 'p2',
    category: PromptCategory.IMAGE,
    title: 'استودیو موسیقی مدرن',
    description: 'تصویرسازی یک مرد در حال کار در استودیو با نورپردازی RGB.',
    prompt: 'Use this photo as the anchor character. Generate a semi-realistic image of the same man, preserving the exact face, head shape, beard, and dark sunglasses. Place him in a modern music studio with RGB lights, medium shot, 3/4 angle, cinematic lighting.',
    imageUrl: 'https://picsum.photos/seed/studio/800/1000',
    tags: ['موسیقی', 'RGB']
  },
  {
    id: 'p3',
    category: PromptCategory.IMAGE,
    title: 'بزرگراه در غروب',
    description: 'قرار دادن کاراکتر در یک محیط باز و بیابانی.',
    prompt: 'Keep the same anchor character exactly, but switch the scene to a desert highway at golden hour. Full-body shot, same face and dark sunglasses, wind blowing his hair, cinematic wide shot, anamorphic lens look.',
    imageUrl: 'https://picsum.photos/seed/highway/800/1100',
    tags: ['طبیعت', 'غروب']
  },
  {
    id: 'p4',
    category: PromptCategory.IMAGE,
    title: 'کاور آلبوم موسیقی',
    description: 'طراحی مینیمال برای موزیک پاپ فارسی.',
    prompt: 'Use this photo as the anchor character. Create a portrait-based album cover for an emotional Persian pop track. Preserve the exact face, head shape, beard, and dark sunglasses. Soft blue and pink light leaks, clean minimal layout, square format.',
    imageUrl: 'https://picsum.photos/seed/album/800/800',
    tags: ['گرافیک', 'مینیمال']
  }
];
