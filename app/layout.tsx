import type {Metadata} from 'next';
import { Inter, Libre_Baskerville } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Meu filho não sai do celular, o que fazer? | TryHard Academy',
  description: 'Descubra como transformar o tempo no celular em aprendizado real. TryHard Academy resolve o vício digital e a falta de interesse nos estudos com gamificação.',
  keywords: 'meu filho não sai do celular o que fazer, criança viciada em celular, meu filho não quer estudar, dependência digital infantil, como ensinar matemática brincando',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-[#F9FBFC] text-slate-800">
        {children}
      </body>
    </html>
  );
}
