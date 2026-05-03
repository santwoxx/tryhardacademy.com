'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { ArrowLeft, Clock, User, Calendar, Lock, ArrowRight } from 'lucide-react';

const BLOG_POSTS: Record<string, any> = {
  'melhores-jogos-educativos-par-criancas': {
    title: "Os melhores jogos educativos para crianças em 2024",
    date: "20 de Abril, 2024",
    author: "Equipe TryHard",
    readTime: "9 min",
    content: `
      <p>Em um mercado saturado de aplicativos, saber identificar um bom <strong>jogo educativo para criança</strong> é um desafio para qualquer pai ou mãe. Nem todo jogo que se diz "pedagógico" realmente entrega valor. </p>
      
      <h2>O que define um jogo educativo de elite?</h2>
      <p>Os <strong>melhores jogos educativos</strong> são aqueles que equilibram o desafio matemático com uma narrativa envolvente. Eles não apenas perguntam "quanto é 2+2", mas integram o problema em uma missão onde a resposta correta é a chave para o progresso.</p>
      
      <h2>Por que a TryHard Academy lidera o ranking?</h2>
      <p>Diferente de <strong>jogos educativos online</strong> genéricos, nosso sistema foi desenhado por neurocientistas. Nós não queremos que seu filho passe o dia todo no app; queremos que o tempo que ele passar seja de altíssima densidade cognitiva, focando em onde a <strong>criança não quer estudar</strong> tradicionalmente.</p>
    `
  },
  'jogos-educativos-ajudam-no-aprendizado': {
    title: "Jogos educativos realmente ajudam no aprendizado?",
    date: "18 de Abril, 2024",
    author: "Dr. Marcos Vinícius",
    readTime: "11 min",
    content: `
      <p>A ciência da gamificação provou que o cérebro aprende melhor quando está em um estado de "diversão ativa". Mas será que qualquer <strong>jogo educativo para crianças</strong> funciona?</p>
      
      <h2>A Diferença entre Jogar e Aprender</h2>
      <p>Muitos <strong>jogos educativos online grátis</strong> falham porque são fáceis demais. O aprendizado só ocorre quando há esforço (o chamado "desejável desafio"). No TryHard Academy, nós utilizamos a mecânica de jogos para tornar o esforço prazeroso, garantindo que o aprendizado seja retido a longo prazo.</p>
      
      <h2>O Combate ao Vício Digital</h2>
      <p>Um dos maiores benefícios de um sistema gamificado sério é que ele substitui a dopamina barata das redes sociais pela <strong>dopamina de conquista</strong>. Isso ajuda diretamente pais que sofrem porque seu <strong>filho não sai do celular</strong>.</p>
    `
  },
  'como-escolher-jogo-educativo-ideal': {
    title: "Como escolher o jogo educativo ideal para seu filho",
    date: "16 de Abril, 2024",
    author: "Carla Oliveira (Pedagoga)",
    readTime: "7 min",
    content: `
      <p>Ao procurar por um <strong>jogo de matemática infantil</strong>, você deve olhar além dos gráficos. O que importa é a estrutura lógica por trás dos níveis.</p>
      
      <h2>Critérios de Escolha</h2>
      <ul>
        <li><strong>Progresso Adaptativo:</strong> O jogo deve ficar mais difícil conforme a criança evolui.</li>
        <li><strong>Feedback Imediato:</strong> O erro deve ser uma oportunidade de aprendizado, não uma punição.</li>
        <li><strong>Ausência de Distrações:</strong> Muitos <strong>jogos educativos populares</strong> são cheios de anúncios que quebram o foco.</li>
      </ul>
      
      <p>A TryHard Academy foi construída seguindo esses pilares, sendo a solução definitiva para quem busca <strong>como fazer criança gostar de matemática</strong> sem as brigas habituais.</p>
    `
  },
  'aprendizado-ativo-neurociencia': {
    title: "Aprendizado Ativo e Neurociência: O Fim da Decoreba",
    date: "25 de Abril, 2024",
    author: "Dr. André Santos (Neurocientista)",
    readTime: "13 min",
    content: `
      <p>O cérebro humano não foi feito para decorar fórmulas isoladas, mas sim para resolver problemas que garantam a sobrevivência ou tragam recompensas significativas.</p>
      
      <h2>O Engano da Memorização</h2>
      <p>Quando a criança apenas decora uma tabuada, ela está usando uma área do cérebro de armazenamento temporário. Sem a aplicação prática, esse "conhecimento" se perde em dias. O aprendizado ativo exige que a criança use o raciocínio crítico para superar um obstáculo, o que consolida as sinapses de forma permanente.</p>
      
      <h2>Gamificação como Catalisador</h2>
      <p>A gamificação não é sobre "jogar", é sobre feedback. No TryHard Academy, cada acerto libera uma descarga controlada de dopamina, o que diz ao cérebro: "Isso é bom, aprenda mais disso". É assim que transformamos a resistência em curiosidade.</p>
      
      <h2>O Papel da Plásticidade Cerebral</h2>
      <p>A infância é a janela de ouro da plasticidade. Ao treinar o foco agora através de desafios matemáticos complexos, estamos construindo uma arquitetura cerebral que servirá para qualquer área da vida adulta.</p>
    `
  }
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = BLOG_POSTS[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-bg-light">
        <h1 className="text-4xl font-black mb-8 text-slate-900">Artigo não encontrado</h1>
        <Link href="/" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold transition-transform hover:scale-105 shadow-xl shadow-primary/20">Voltar para a página inicial</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-light pb-20">
      <nav className="bg-white border-b border-slate-100 h-20 flex items-center mb-24 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 w-full flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center rotate-3">
                <span className="text-white font-black text-sm">T</span>
             </div>
             <Link href="/" className="font-extrabold text-lg text-slate-900">
               TryHard<span className="text-primary italic">Academy</span>
             </Link>
          </div>
          <Link href="/blog" className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
          </Link>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6">
        <header className="mb-20 text-center">
          <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">Guia Educativo para Pais</span>
          <h1 className="text-4xl lg:text-7xl font-black text-slate-900 mb-12 leading-[1.1] tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-12 text-[11px] font-black uppercase tracking-widest text-slate-400 border-y border-slate-100 py-10">
            <span className="flex items-center gap-3"><User className="w-4 h-4 text-primary" /> {post.author}</span>
            <span className="flex items-center gap-3"><Calendar className="w-4 h-4 text-primary" /> {post.date}</span>
            <span className="flex items-center gap-3"><Clock className="w-4 h-4 text-primary" /> {post.readTime}</span>
          </div>
        </header>

        <div className="aspect-[21/9] bg-slate-100 rounded-[3rem] overflow-hidden mb-24 relative shadow-2xl border border-white">
          <Image 
            src={`https://picsum.photos/seed/${slug}/1200/800`} 
            alt={post.title}
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div 
          className="prose prose-slate prose-xl lg:prose-2xl max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 prose-headings:leading-tight prose-a:text-primary prose-a:font-black transition-all"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-32">
          <section className="bg-primary rounded-[4rem] p-12 lg:p-24 text-white shadow-[0_50px_100px_-20px_rgba(108,77,255,0.4)] border border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-accent opacity-20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">Transforme o uso do celular agora</h2>
              <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-16 leading-relaxed max-w-2xl mx-auto">
                Assine a TryHard Academy e converta o vício em matemática produtiva. Menos briga, mais progresso real.
              </p>
              <div className="flex flex-col items-center gap-6">
                <Link 
                  href="https://pay.cakto.com.br/u5h6im8_850195"
                  className="bg-accent text-white px-16 py-8 rounded-[2.5rem] text-2xl font-black hover:scale-105 transition-transform flex items-center gap-4 shadow-2xl shadow-accent/20"
                >
                  Conhecer TryHard Academy <ArrowRight className="w-8 h-8" />
                </Link>
                <div className="flex items-center gap-4 text-white/40 text-xs font-black uppercase tracking-widest mt-4">
                   <Lock className="w-4 h-4" /> Pagamento Seguro via Cakto
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>

      <footer className="mt-40 py-20 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">© 2024 TryHard Academy • Inteligência Educacional Moderna</p>
      </footer>
    </div>
  );
}
