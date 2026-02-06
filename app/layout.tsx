import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased px-6 pt-1`}>
        <header className="flex justify-between items-center px-4 py-1 my-2 bg-gray-300 shadow-sm rounded-lg">
          <Link href='/' className='font-bold'>Acme</Link>
          <div className='flex gap-4'>
            <Link href='/dashboard' className='hover:underline'>Dashboard</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
