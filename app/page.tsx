'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Smartphone, 
  ShieldAlert, 
  GraduationCap, 
  Heart, 
  ArrowRight, 
  Zap, 
  ChevronDown,
  BookOpen,
  Trophy,
  Star,
  Gamepad2,
  TrendingUp,
  BrainCircuit,
  Lock,
  Clock
} from 'lucide-react';

const CHECKOUT_URL = "https://pay.cakto.com.br/u5h6im8_850195";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-light">
      {/* Header/Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-primary/20 flex-shrink-0">
              <span className="text-white font-black text-lg md:text-xl">T</span>
            </div>
            <Link href="/" className="font-extrabold text-xl md:text-2xl tracking-tighter text-slate-900 whitespace-nowrap">
              TryHard<span className="text-primary italic">Academy</span>
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-slate-500">
            <Link href="#problema" className="hover:text-primary transition-colors">O Problema</Link>
            <Link href="#solucao" className="hover:text-primary transition-colors">A Solução</Link>
            <Link href="#blog" className="hover:text-primary transition-colors">Conteúdo</Link>
          </div>
          <Link 
            href={CHECKOUT_URL}
            className="bg-accent text-white px-4 md:px-8 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl text-[10px] md:text-sm font-black hover:scale-105 transition-all shadow-xl shadow-accent/20 flex items-center gap-2"
          >
            Quero Transformar <span className="hidden sm:inline">Meu Filho</span> <ArrowRight className="w-3 md:w-4 h-3 md:h-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-40 md:pb-24 lg:pt-56 lg:pb-44 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left flex flex-col items-center lg:items-start"
            >
              <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary/5 rounded-full mb-6 md:mb-8">
                <span className="flex h-2 w-2 md:h-3 md:w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-primary"></span>
                </span>
                <span className="text-[10px] md:text-sm font-black text-primary uppercase tracking-widest">Solução para Pais e Educadores</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight md:leading-[1.1] mb-6 md:mb-8 text-slate-900 tracking-tight">
                Não é apenas um jogo educativo. <br className="hidden md:block" />
                <span className="text-primary underline decoration-accent/30 underline-offset-4 md:underline-offset-8">É como se transforma o celular em aprendizado.</span>
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                Você não precisa tirar o celular. Você precisa mudar o que seu filho faz com ele através de um sistema de <strong>reeducação digital baseada em neurociência.</strong>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center lg:justify-start w-full sm:w-auto">
                <Link 
                  href={CHECKOUT_URL}
                  className="bg-primary text-white px-6 md:px-10 py-4 md:py-6 rounded-xl md:rounded-3xl text-base md:text-xl font-black flex items-center justify-center gap-3 md:gap-4 hover:bg-primary/90 transition shadow-2xl shadow-primary/30 group w-full"
                >
                  Transformar o uso agora <ArrowRight className="w-5 md:w-6 h-5 md:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-6 justify-center lg:justify-start">
                <div className="flex -space-x-2 md:-space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                      <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User avatar" width={40} height={40} referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-xs md:text-sm font-bold text-slate-500">
                  <span className="text-slate-900">+5.000 pais</span> já mudaram a rotina em casa
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end"
            >
              <div className="relative aspect-[4/5] w-full max-w-[450px] lg:max-w-[640px]">
                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] md:rounded-[4rem] blur-3xl -z-10" />
                <div className="relative h-full w-full rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(108,77,255,0.2)] border-[6px] md:border-[12px] border-white bg-slate-50">
                  <Image 
                    src="https://i.ibb.co/Mk9QGCRV/img333333.png" 
                    alt="Criança aprendendo e feliz"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Metrics */}
      <section className="py-12 md:py-20 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 text-center">
            <div className="group">
              <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2 italic transition-transform group-hover:scale-110">+5.000</p>
              <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-primary-foreground/60 leading-tight">Crianças Impactadas</p>
            </div>
            <div className="group">
              <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2 italic transition-transform group-hover:scale-110">1.2M</p>
              <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-primary-foreground/60 leading-tight">Exercícios Resolvidos</p>
            </div>
            <div className="group">
              <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2 italic transition-transform group-hover:scale-110">98%</p>
              <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-primary-foreground/60 leading-tight">Aprovação dos Pais</p>
            </div>
            <div className="group">
              <p className="text-3xl md:text-5xl font-black mb-1 md:mb-2 italic transition-transform group-hover:scale-110">+34%</p>
              <p className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-primary-foreground/60 leading-tight">Evolução Escolar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4 block">O que você verá em casa</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Resultados que transformam o futuro</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left bg-stone-50/50 p-8 rounded-[2rem] border border-stone-100 transition-hover hover:border-primary/20">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto lg:mx-0 shadow-sm border border-slate-100">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">Melhora no Foco</h3>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed">Treinamos a atenção sustentada, combatendo o &quot;cérebro fragmentado&quot; causado pelo scroll infinito das redes sociais.</p>
            </div>
            <div className="space-y-4 md:space-y-6 text-center lg:text-left bg-stone-50/50 p-8 rounded-[2rem] border border-stone-100 transition-hover hover:border-success/20">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto lg:mx-0 shadow-sm border border-slate-100">
                <BrainCircuit className="w-6 h-6 md:w-8 md:h-8 text-success" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">Interesse Ativo</h3>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed">A matemática deixa de ser uma obrigação e passa a ser uma ferramenta de conquista, gerando prazer no aprendizado.</p>
            </div>
            <div className="space-y-4 md:space-y-6 text-center lg:text-left bg-stone-50/50 p-8 rounded-[2rem] border border-stone-100 transition-hover hover:border-accent/20 col-sm-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto lg:mx-0 shadow-sm border border-slate-100">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-slate-900">Redução do Uso Vazio</h3>
              <p className="text-base md:text-lg text-slate-500 leading-relaxed">Substituímos o entretenimento passivo por uma jornada de desafios que desenvolve a autonomia intelectual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-center text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Conhecido por pais em todo o país</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="font-black text-lg md:text-2xl tracking-tighter italic whitespace-nowrap">EDUCACIONAL BR</span>
            <span className="font-black text-lg md:text-2xl tracking-tighter italic whitespace-nowrap">TECH NEWS</span>
            <span className="font-black text-lg md:text-2xl tracking-tighter italic whitespace-nowrap">PAIS & FILHOS</span>
            <span className="font-black text-lg md:text-2xl tracking-tighter italic whitespace-nowrap">BRAIN CARE</span>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section id="problema" className="py-16 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white max-w-[500px] mx-auto lg:mx-0">
                <Image 
                  src="https://i.ibb.co/JS3mymM/img-crianca-1.png" 
                  alt="criança viciada em celular e distraída"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-10">
                  <p className="text-white font-bold text-base md:text-xl italic leading-tight">“Seu filho passa horas no celular e não quer estudar?”</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-12">
                <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4 block">A Realidade em Casa</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 md:mb-8 text-slate-900 leading-[1.2]">
                  O celular parou de ser diversão e se tornou um <span className="text-red-500">vício silencioso</span>?
                </h2>
                <p className="text-base md:text-xl text-slate-500 leading-relaxed font-medium">
                  Dopamina barata, falta de foco e brigas intermináveis para largar a tela. Se essa é a sua realidade, você não está sozinho. <strong>Menos briga, mais resultado</strong> começa com a ferramenta certa.
                </p>
              </div>
              <div className="grid gap-4 md:gap-6 text-left">
                {[
                  {
                    icon: ShieldAlert,
                    title: "Dependência Digital",
                    desc: "O cérebro dele busca estímulos constantes e luzes, tornando o estudo comum tedioso."
                  },
                  {
                    icon: Heart,
                    title: "Conflito Familiar",
                    desc: "Pedir para guardar o celular se tornou o gatilho para a próxima briga em casa."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 sm:gap-6 items-start bg-slate-50 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-sm md:text-base text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neurobiology Section */}
      <section className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
             <div className="order-2 lg:order-1">
                <div className="relative">
                   <div className="absolute -inset-10 bg-primary/10 rounded-full blur-3xl opacity-50" />
                   <div className="relative bg-white p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-2xl">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-10 border-l-4 border-primary pl-4 md:pl-6 leading-tight">A Ciência por trás do Vício</h3>
                      <div className="space-y-6 md:space-y-8">
                         {[
                           { n: "1", title: "Dopamina e Recompensa", desc: "O cérebro infantil busca dopamina imediata. Jogos e redes sociais entregam isso em excesso, tornando o estudo comum \"tedioso\"." },
                           { n: "2", title: "Córtex Pré-Frontal", desc: "Essencial para o foco e disciplina, ele ainda está em formação. O excesso de estímulos digitais passivos retarda esse amadurecimento." },
                           { n: "3", title: "Nomofobia", desc: "A ansiedade de estar sem o celular é real. Nós substituímos essa ansiedade pelo prazer da conquista intelectual." }
                         ].map((item, idx) => (
                           <div key={idx} className="flex gap-4 md:gap-6 group">
                              <span className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-black flex-shrink-0 text-sm md:text-base transition-colors group-hover:bg-primary group-hover:text-white">{item.n}</span>
                              <div className="space-y-1">
                                <p className="text-slate-900 font-black text-base md:text-lg">{item.title}</p>
                                <p className="text-sm md:text-base text-slate-500 leading-relaxed">{item.desc}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
             <div className="order-1 lg:order-2 text-center lg:text-left">
                <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4 block">Base Científica</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight">
                   Por que um &quot;simples jogo&quot; resolve o vício?
                </h2>
                <p className="text-base md:text-xl text-slate-500 leading-relaxed mb-8 md:mb-10 font-medium">
                   Nós não apenas ensinamos matemática. Nós reprogramamos a forma como o cérebro do seu filho interage com o celular.
                </p>
                <div className="bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-slate-100 shadow-sm relative">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <BrainCircuit className="w-12 h-12 text-primary" />
                    </div>
                   <p className="italic text-slate-600 text-base md:text-lg leading-relaxed relative z-10">
                      &quot;Ao transformar o esforço matemático em um ciclo de recompensa gamificado, restauramos os níveis saudáveis de dopamina e treinamos o foco profundo.&quot;
                   </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Belief Breaking */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[2.5rem] md:rounded-[4.5rem] border-[8px] md:border-[12px] border-white/20 shadow-2xl relative overflow-hidden group">
                <Image 
                  src="https://i.ibb.co/4nkfwV9n/img-crianca-2-ss.png" 
                  alt="pai tentando tirar celular do filho e gerando conflito"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 md:p-12">
                   <div className="bg-red-500/90 backdrop-blur w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-6 shadow-2xl">
                    <Lock className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-lg">
                    &quot;Você tenta tirar o celular... mas isso só gera conflito&quot;
                  </h3>
                </div>
              </div>
            </div>
            
            <div className="text-white space-y-6 md:space-y-10">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black leading-tight">
                Tirar o celular não resolve o problema — <span className="text-red-400 underline decoration-white/30 underline-offset-8">e pode piorar.</span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                <p>
                  Proibir o uso apenas cria barreiras emocionais e isolamento. Seu filho não aprende a lidar com a tecnologia, ele apenas desenvolve mecanismos para escondê-la de você.
                </p>
                <p>
                   A verdadeira solução é <strong>canalizar o vício em dopamina</strong> para objetivos produtivos. Quando o estudo se torna tão viciante quanto um jogo, a resistência desaparece.
                </p>
                <div className="bg-white/10 backdrop-blur rounded-[2rem] md:rounded-3xl p-6 md:p-8 border border-white/10">
                  <p className="italic text-lg md:text-2xl font-light">
                    &quot;Se você não pode tirar o celular, transforme ele na ferramenta mais poderosa de aprendizado da casa.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation of Solution */}
      <section id="solucao" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <span className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">A Evolução da Educação</span>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
              Conheça o TryHard Academy
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Uma experiência gamificada de matemática que substitui o entretenimento passivo por desafios que ativam o raciocínio lógico profundo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              {[
                {
                  title: "Aprender sem perceber",
                  desc: "Utilizamos a mecânica dos jogos favoritos deles para ensinar tópicos complexos como álgebra e geometria.",
                  icon: Gamepad2,
                  color: "primary"
                },
                {
                  title: "Adeus brigas e estresse",
                  desc: "O tempo de tela se torna motivo de orgulho, não de proibição. Você verá progresso real todos os dias.",
                  icon: Heart,
                  color: "accent"
                },
                {
                  title: "Foco Restabelecido",
                  desc: "Treinamos o cérebro do seu filho para buscar o 'prazer da descoberta' no lugar do 'prazer do scroll'.",
                  icon: BrainCircuit,
                  color: "success"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 group">
                  <div className={`flex-shrink-0 w-20 h-20 bg-bg-light rounded-[2rem] flex items-center justify-center text-${item.color} group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 text-slate-900">{item.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-bg-light p-4 rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden group">
                 <div className="relative h-[650px] w-full rounded-[3.5rem] overflow-hidden">
                    <Image 
                      src="https://i.ibb.co/rGjVnGBC/img-crianaca3-s.png" 
                      alt="criança aprendendo matemática jogando no celular feliz"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent p-12 text-white">
                      <div className="bg-success w-max px-4 py-1 rounded-full text-xs font-black uppercase mb-4 tracking-widest">Aprendizado Ativo</div>
                      <h3 className="text-3xl font-black mb-2">&quot;Agora imagine seu filho usando o celular para aprender&quot;</h3>
                      <p className="text-slate-300 font-medium">Ele descobre o prazer da superação e você recupera a paz em casa. <strong>Use o celular a seu favor.</strong></p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logic/Why works */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-4xl lg:text-5xl font-black mb-10 leading-tight">
                Por que o método TryHard <span className="text-primary italic">funciona?</span>
              </h2>
              <div className="space-y-8 text-slate-400 text-lg leading-relaxed">
                <p>
                  O cérebro jovem hoje está programado para o **Estado de Flow**. Métodos antigos (quadro negro e giz) são lentos demais para a velocidade do processamento que eles desenvolveram.
                </p>
                <p>
                  No TryHard Academy, nós hackeamos a psicologia do engajamento para o bem:
                </p>
                <div className="space-y-6 mt-10">
                  <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-2">Engajamento Ativo</h4>
                      <p className="text-sm">Ele não assiste aulas. Ele resolve problemas para avançar na jornada.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-2">Recompensas Significativas</h4>
                      <p className="text-sm">Moedas, badges e níveis que refletem o conhecimento matemático real.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 bg-white/5 rounded-3xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold mb-2">Curva de Aprendizado Adaptativa</h4>
                      <p className="text-sm">O sistema identifica onde ele erra e ajusta o desafio para evitar frustração.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Satisfação dos Pais", value: "98%", color: "primary" },
                  { label: "Melhora em Notas", value: "+34%", color: "success" },
                  { label: "Retenção de Conteúdo", value: "88%", color: "accent" },
                  { label: "Tempo Produtivo", value: "92%", color: "primary" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 p-10 rounded-[3rem] border border-white/10 flex flex-col items-center text-center justify-center">
                    <span className={`text-4xl lg:text-5xl font-black text-${stat.color} mb-4`}>{stat.value}</span>
                    <span className="text-xs uppercase font-black text-slate-500 tracking-widest leading-relaxed">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Comparison Section */}
      <section className="py-16 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4 block">Diferencial Competitivo</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">Por que jogos educativos comuns não funcionam sozinhos?</h2>
            <p className="text-base md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">A maioria dos jogos para aprender matemática foca apenas na diversão vazia. Nós focamos na retenção real e na mudança de comportamento.</p>
          </div>
 
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-200 shadow-sm">
              <h3 className="text-xl md:text-2xl font-black text-red-500 mb-8 md:mb-10 border-b pb-6">Jogos Educativos Comuns</h3>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Foco em diversão, pouco desafio real",
                  "Distração fácil com elementos inúteis",
                  "Falta de um método pedagógico estruturado",
                  "Não combatem o vício em dopamina barata"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-500 font-medium text-sm md:text-base leading-tight">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 text-[10px] md:text-xs">❌</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
 
            <div className="bg-primary p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                <Trophy className="w-24 h-24" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-accent mb-8 md:mb-10 border-b border-white/10 pb-6">Sistema TryHard Academy</h3>
              <ul className="space-y-4 md:space-y-6">
                {[
                  "Gamificação baseada em neurociência",
                  "Foco total em raciocínio lógico e disciplina",
                  "Relatórios de progresso baseados em IA",
                  "Transforma o vício digital em paixão por aprender"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-bold text-sm md:text-base leading-tight">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 text-[10px] md:text-xs">✓</div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Long-form Section */}
      <section className="py-16 md:py-32 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <article className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-black prose-p:text-slate-600 prose-strong:text-slate-900 prose-li:text-slate-600 prose-headings:leading-tight">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12">O Guia Definitivo sobre Jogo Educativo para Crianças e Aprendizado Digital</h2>
            
            <p>
              Ao buscar por um <strong>jogo educativo para criança</strong> ou um <strong>jogo para aprender matemática</strong>, a maioria dos pais espera encontrar algo que mantenha seus filhos ocupados de forma útil. No entanto, o mercado de <strong>jogos educativos online</strong> está saturado de aplicativos que mais distraem do que ensinam. Se você quer saber como um <strong>jogo de matemática infantil</strong> pode realmente fazer a diferença, precisa entender a diferença entre entretenimento e educação gamificada.
            </p>
            
            <p>
              A busca por <strong>jogos educativos online grátis</strong> muitas vezes leva a conteúdos rasos, cheios de propagandas e que não possuem uma curva de aprendizado sólida. Para quem tem um <strong>filho que não quer estudar</strong>, oferecer apenas mais um joguinho pode até piorar o problema do foco. O desafio não é apenas encontrar diversão, mas saber <strong>como ensinar criança brincando</strong> de forma que ela desenvolva autonomia intelectual.
            </p>

            <h3>O que realmente qualifica um bom jogo educativo?</h3>
            <p>
              Historicamente, o conceito de <strong>jogo educativo para crianças</strong> evoluiu de simples atividades de &quot;clique e arraste&quot; para sistemas complexos. Mas o problema persiste: muitos desses jogos não combatem a <strong>dependência digital infantil</strong>. Pelo contrário, eles apenas alimentam o vício em telinhas sem entregar um retorno acadêmico real.
            </p>
            
            <p>
              Um sistema escolar ou de reforço moderno deve focar em:
            </p>
            <ul>
              <li><strong>Raciocínio Lógico:</strong> No lugar de apenas decorar fórmulas, a criança deve resolver problemas reais dentro do contexto do jogo;</li>
              <li><strong>Gestão da Frustração:</strong> Diferente de <strong>jogos educativos online</strong> comuns que dão prêmios por qualquer coisa, um bom sistema ensina a persistir diante do erro;</li>
              <li><strong>Disciplina Mental:</strong> Treinar o cérebro para sessões de 20 a 30 minutos de concentração profunda;</li>
              <li><strong>Integração Pedagógica:</strong> Estar alinhado com o que é cobrado nas melhores escolas, focando em onde a <strong>criança não quer estudar</strong>.</li>
            </ul>

            <h3>Por que o vício em celular é o inimigo dos jogos comuns?</h3>
            <p>
              Muitas vezes, a <strong>dependência digital infantil</strong> faz com que a criança abandone o jogo educativo assim que ele exige esforço. Ela prefere voltar para o TikTok ou YouTube. Por isso, a TryHard Academy não se posiciona apenas como um jogo, mas como uma metodologia de readequação de recompensas. 
            </p>
            
            <p>
              Nós entendemos a <strong>neurociência da dopamina</strong>. Se o seu <strong>filho não sai do celular</strong>, o segredo é oferecer um desafio que seja tão dopaminérgico quanto um jogo de ação, mas cuja mecânica interna seja pura matemática. Assim, &quot;viciamos&quot; o cérebro dele no prazer da descoberta e da resolução de problemas.
            </p>

            <h3>Transformando o desinteresse em paixão por aprender</h3>
            <p>
              Muitos pais perguntam <strong>como fazer criança gostar de matemática</strong>. A resposta não está em explicações teóricas chatas, mas em transformar a matemática em uma ferramenta para vencer desafios. Quando a matemática é o &quot;superpoder&quot; necessário para avançar de nível, a resistência desaparece.
            </p>
            
            <p>
              Se você está lidando com uma <strong>criança viciada em celular</strong>, a solução não é a punição. É a migração do conteúdo improdutivo para o produtivo. O <strong>TryHard Academy</strong> é a evolução do <strong>jogo educativo tradicional</strong>. É um sistema completo que restaura o foco, melhora as notas e devolve a paz para a rotina familiar.
            </p>

            <h3>A Ciência do Aprendizado Ativo na TryHard Academy</h3>
            <p>
              Diferente de <strong>jogos educativos comuns</strong>, onde a criança apenas assiste ou clica aleatoriamente, nossa plataforma se baseia no <strong>Aprendizado Ativo</strong>. Isso significa que para avançar, a criança precisa construir o conhecimento, testar hipóteses e aplicar a lógica. 
            </p>
            
            <p>
              Nós utilizamos a <strong>Repetição Inteligente</strong>: o sistema identifica quais tópicos a criança tem mais dificuldade e os reintroduz em contextos diferentes, garantindo que o conhecimento saia da memória de curto prazo e se torne um aprendizado sólido. 
            </p>

            <p>
              Ao escolher a TryHard Academy para o seu filho, você está optando por uma ferramenta que:
            </p>
            <ul>
              <li><strong>Combate a Nomofobia:</strong> Reduzindo a ansiedade de estar longe de conteúdos vazios;</li>
              <li><strong>Estimula a Dopamina Positiva:</strong> Aquela gerada pela superação de desafios reais, não por curtidas em fotos;</li>
              <li><strong>Prepara para as Melhores Escolas:</strong> O currículo é alinhado com padrões internacionais de excelência em matemática.</li>
            </ul>

            <div className="bg-primary/5 p-12 rounded-[3.5rem] border border-primary/10 mt-16 text-center">
              <h4 className="text-3xl font-black text-slate-900 mb-6 italic">Não aceite qualquer jogo educativo.</h4>
              <p className="text-xl mb-10">Dê ao seu filho a plataforma de aprendizagem que as famílias de elite utilizam para treinar lógica e o foco. O futuro dele começa agora.</p>
              <Link 
                href={CHECKOUT_URL}
                className="bg-accent text-white px-10 py-5 rounded-2xl text-xl font-black inline-flex items-center gap-4 hover:scale-105 transition-transform shadow-xl shadow-accent/20"
              >
                Garantir Vaga na TryHard Academy <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-12 md:mb-20 leading-tight">Perguntas Frequentes</h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                q: "Para qual idade é indicado o TryHard?",
                a: "O conteúdo é otimizado para crianças e adolescentes dos 8 aos 16 anos, cobrindo todo o currículo de matemática do Ensino Fundamental e início do Médio."
              },
              {
                q: "Funciona em qualquer aparelho?",
                a: "Sim! O TryHard Academy pode ser acessado em smartphones (Android/iOS), tablets e computadores modernos."
              },
              {
                q: "Minhas notas na escola vão melhorar mesmo?",
                a: "Nossos alunos apresentam uma melhora média de 34% no desempenho escolar após as primeiras 4 semanas de uso frequente (recomenda-se 15-20 min por dia)."
              },
              {
                q: "Como recebo o acesso?",
                a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com as instruções de login e o link para a plataforma exclusiva."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[1.5rem] md:rounded-[2rem] border border-slate-200 p-6 md:p-8 [&_summary::-webkit-details-marker]:hidden shadow-sm transition-all hover:border-primary/20">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg md:text-xl font-black pr-4 md:pr-8 text-slate-900 leading-tight">{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <p className="mt-6 md:mt-8 text-slate-500 leading-relaxed text-base md:text-lg">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs Link Section */}
      <section id="blog" className="py-20 md:py-32 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6 md:gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px] md:text-xs mb-3 md:mb-4 block text-center md:text-left">Central de Conhecimento</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">Guias Práticos para a Família Digital</h2>
            </div>
            <Link href="/blog" className="text-base md:text-lg font-black text-primary underline underline-offset-8 flex items-center justify-center gap-2 hover:text-accent transition-colors">
              Explorar todos os artigos <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              {
                title: "Como tirar o vício em celular infantil (guia definitivo)",
                slug: "como-tirar-vicio-celular-infantil",
                category: "Comportamento"
              },
              {
                title: "Meu filho não quer estudar: o que fazer hoje",
                slug: "meu-filho-nao-quer-estudar",
                category: "Educação"
              },
              {
                title: "Como fazer criança gostar de matemática",
                slug: "como-fazer-crianca-gostar-matematica",
                category: "Aprendizado"
              },
              {
                title: "Quanto tempo de tela é saudável por idade?",
                slug: "tempo-de-tela-saudavel",
                category: "Saúde"
              }
            ].map((post, i) => (
              <Link key={i} href={`/blog/${post.slug}`} className="group h-full bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 p-6 md:p-8 hover:border-primary/20 transition-all hover:bg-white hover:shadow-xl flex flex-col">
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-primary mb-3 md:mb-4 block">{post.category}</span>
                <h3 className="text-lg md:text-xl font-black mb-6 flex-grow leading-tight group-hover:text-primary transition-colors">{post.title}</h3>
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                   <span className="text-[10px] md:text-xs font-bold text-slate-400 capitalize">Ler guia completo</span>
                   <ArrowRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 md:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4 md:mb-6 leading-tight">Além do Método, você recebe:</h2>
            <p className="text-base md:text-xl text-slate-500 font-medium">Ferramentas exclusivas para acelerar a transformação em casa.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {[
              {
                title: "BÔNUS 1: Guia Digital para Pais",
                desc: "Como mediar o uso da tecnologia em casa sem gerar brigas ou afastamento emocional.",
                icon: ShieldAlert
              },
              {
                title: "BÔNUS 2: Cronograma de Foco",
                desc: "Um método visual para organizar a rotina de estudos e garantir 40 minutos de foco profundo por dia.",
                icon: Clock
              },
              {
                title: "BÔNUS 3: Controle Parental Inteligente",
                desc: "Estratégias para configurar dispositivos de forma segura, protegendo seu filho de conteúdos impróprios.",
                icon: Lock
              }
            ].map((bonus, i) => (
              <div key={i} className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-sm relative group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-4">
                   <span className="text-primary font-black text-[8px] md:text-[10px] uppercase bg-primary/5 px-3 md:px-4 py-1 md:py-1.5 rounded-full border border-primary/10">Incluso no Acesso</span>
                </div>
                <div className="w-12 h-12 md:w-14 md:h-14 bg-success/10 text-success rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8">
                  <bonus.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-lg md:text-xl font-black mb-3 md:mb-4 text-slate-900 leading-tight">{bonus.title}</h3>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed font-bold">{bonus.desc}</p>
                <div className="mt-6 md:mt-8 flex items-center gap-2 md:gap-3 text-success font-black text-[10px] md:text-xs uppercase tracking-widest">
                   <CheckCircle2 className="w-4 h-4" /> Bônus Confirmado
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-black text-white mb-8 md:mb-12 leading-tight tracking-tight">
            Transfome o maior problema <br className="hidden lg:block"/>
            em <span className="text-accent italic">sucesso escolar.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-12 md:mb-20 max-w-2xl mx-auto leading-relaxed">
            Comece agora e mude a relação do seu filho com a tecnologia para sempre.
          </p>
          <div className="flex flex-col items-center gap-8 md:gap-10">
            <Link 
              href={CHECKOUT_URL}
              className="bg-accent text-white px-10 md:px-16 py-6 md:py-8 rounded-[1.5rem] md:rounded-[2.5rem] text-xl md:text-2xl font-black hover:scale-105 transition-all shadow-[0_40px_80px_-20px_rgba(255,140,66,0.5)] flex items-center gap-4 group w-full sm:w-auto justify-center"
            >
              Começar Transformação Agora <ArrowRight className="w-6 md:w-8 h-6 md:h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <div className="flex flex-col md:flex-row items-center gap-4 py-4 px-8 bg-white/5 rounded-[2rem] backdrop-blur w-full sm:w-auto justify-center">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-white/40" />
                <span className="text-xs md:text-sm font-bold text-white/60">Pagamento Seguro</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/20 mx-2" />
              <span className="text-xs md:text-sm font-bold text-white/60">Garantia de 7 Dias</span>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-white opacity-[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-accent opacity-[0.05] rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-20 lg:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-20 lg:mb-24">
            <div className="lg:col-span-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-6 md:mb-8">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center rotate-3">
                  <span className="text-white font-black text-sm">T</span>
                </div>
                <span className="font-extrabold text-2xl tracking-tighter text-white">
                  TryHard<span className="text-primary">Academy</span>
                </span>
              </div>
              <p className="max-w-sm mb-8 md:mb-12 text-base md:text-lg leading-relaxed mx-auto md:mx-0">
                Tornando o aprendizado tão viciante quanto os jogos. Transformando o tempo de tela em progresso real.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer border-dashed">
                   <Star className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer border-dashed">
                   <ShieldAlert className="w-4 h-4 md:w-5 md:h-5 text-white/40" />
                </div>
              </div>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black mb-6 md:mb-8 uppercase text-[10px] md:text-xs tracking-[0.3em]">Navegação</h4>
              <ul className="space-y-4 md:space-y-6 text-xs md:text-sm font-bold uppercase tracking-widest leading-none">
                <li><Link href="#problema" className="hover:text-primary transition-colors">O Problema</Link></li>
                <li><Link href="#solucao" className="hover:text-primary transition-colors">A Solução</Link></li>
                <li><Link href="/blog" className="hover:text-primary transition-colors">Blog Educativo</Link></li>
                <li><Link href={CHECKOUT_URL} className="text-accent hover:underline transition-colors decoration-accent/30">Comprar Agora</Link></li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h4 className="text-white font-black mb-6 md:mb-8 uppercase text-[10px] md:text-xs tracking-[0.3em]">Políticas</h4>
              <ul className="space-y-4 md:space-y-6 text-xs md:text-sm font-bold uppercase tracking-widest leading-none">
                <li><Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link></li>
                <li><Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link></li>
                <li><Link href="/contato" className="hover:text-white transition-colors">Ajuda & Suporte</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 md:pt-12 border-t border-white/5 text-[10px] md:text-xs flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-center font-bold tracking-widest uppercase text-center">
            <p className="text-slate-600">© 2024 TryHard Academy. Todos os direitos reservados.</p>
            <div className="flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
               <span className="text-slate-700">Powered by Cakto Payments</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
