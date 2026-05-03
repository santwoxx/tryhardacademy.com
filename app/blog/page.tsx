'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';

const POSTS = [
  {
    slug: 'melhores-jogos-educativos-par-criancas',
    title: "Os melhores jogos educativos para crianças em 2024",
    excerpt: "Uma análise profunda sobre o que realmente funciona para o desenvolvimento cognitivo e o que é apenas distração...",
    category: "Educação"
  },
  {
    slug: 'jogos-educativos-ajudam-no-aprendizado',
    title: "Jogos educativos realmente ajudam no aprendizado?",
    excerpt: "A ciência por trás da gamificação e como ela pode ser a chave para recuperar o interesse nos estudos...",
    category: "Ciência"
  },
  {
    slug: 'como-escolher-jogo-educativo-ideal',
    title: "Como escolher o jogo educativo ideal para seu filho",
    excerpt: "Critérios essenciais para não cair em armadilhas de aplicativos vazios e garantir evolução real...",
    category: "Guia"
  },
  {
    slug: 'aprendizado-ativo-neurociencia',
    title: "Aprendizado Ativo e Neurociência: O Fim da Decoreba",
    excerpt: "Como as novas descobertas sobre o cérebro infantil estão revolucionando a forma como ensinamos lógica e matemática...",
    category: "Neurociência"
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-bg-light pb-20">
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center rotate-3">
                <span className="text-white font-black text-sm">T</span>
             </div>
             <Link href="/" className="font-extrabold text-xl tracking-tighter text-slate-900">
               TryHard<span className="text-primary italic">Academy</span>
             </Link>
          </div>
          <Link href="/" className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao site
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-40">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Artigos e Dicas</span>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 text-slate-900 tracking-tight">Blog Educativo</h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Conselhos práticos, ciência do aprendizado e guias para navegar na educação digital dos seus filhos.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {POSTS.map((post, i) => (
            <Link key={i} href={`/blog/${post.slug}`} className="group h-full bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col overflow-hidden">
              <article className="h-full flex flex-col">
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image 
                    src={`https://picsum.photos/seed/${post.slug}/600/400`} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary px-3 py-1 rounded-lg text-[10px] font-black text-white uppercase tracking-widest shadow-lg shadow-primary/30">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h2 className="text-2xl font-black mb-6 text-slate-900 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 text-lg mb-8 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-slate-100 uppercase tracking-widest text-[10px] font-black text-slate-400">
                    <span className="text-primary flex items-center gap-2">
                      Ler Guia Completo <ArrowRight className="w-4 h-4" />
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> 8 min
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-40 py-20 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">© 2024 TryHard Academy. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
