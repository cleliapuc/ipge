'use client';

import { useState } from 'react';

export default function IPGEExecutiveSummit() {
  const [activeTab, setActiveTab] = useState(0);

  const speakers = [
    {
      name: 'AGEU BARROS',
      role: 'Diretor IPGE',
      image: '/palestrantes/ageu.jpg',
      linkedin: 'https://www.linkedin.com/in/ageu-barros/',
      bio: 'Especialista em estratégia empresarial com 30+ anos de experiência',
    },
    {
      name: 'FERNANDA',
      role: 'Advogada | Conselheira | Investidora',
      image: '/palestrantes/fernanda.jpg',
      linkedin: 'https://www.linkedin.com/in/eusoufernandaefranco/',
      bio: 'Referência em governança corporativa e compliance',
    },
    {
      name: 'Dra Maria Lúcia',
      role: 'Especialista em Gestão de Pessoas',
      image: '/palestrantes/malu.jpg',
      linkedin: 'https://www.linkedin.com/in/marialuciaprofmba-pessoas/',
      bio: 'Transformação organizacional e desenvolvimento de talentos',
    },
  ];

  const schedule = [
    {
      time: '17:30',
      title: 'Conceito de Estratégia, Execução & Governança',
      desc: 'Os fundamentos da execução estratégica empresarial.',
     // speaker: 'AGEU BARROS',
    },
    {
      time: '17:45',
      title: 'Budget: Ferramenta #1 de Governança',
      desc: 'A revisão 6+6 como base para decisões executivas.',
      //speaker: 'AGEU BARROS',
    },
    {
      time: '18:00',
      title: 'O Processo Organizacional da Execução',
      desc: 'Como alinhar estratégia, pessoas e projetos.',
     // speaker: 'MALU',
    },
    {
      time: '18:15',
      title: 'O Conselho e o Processo Decisório',
      desc: 'Como estruturar decisões sólidas e alinhadas ao longo prazo.',
      //speaker: 'FERNANDA',
    },
    {
      time: '18:30',
      title: 'RH no Suporte Estratégico: Mapertest & Jobfit',
      desc: 'Avaliação de perfil e desenvolvimento de talentos estratégicos.',
      //speaker: 'MALU',
    },
    {
      time: '18:45',
      title: 'Governança & Valuation',
      desc: 'Como fortalecer crescimento sustentável e valuation crescente.',
     // speaker: 'FERNANDA',
    },
  ];

  const benefits = [
    { title: 'Networking Qualificado', desc: 'Conecte-se com líderes de todo Brasil', icon: '🤝' },
    { title: 'Conteúdo Estratégico', desc: 'Palestras com especialistas de referência', icon: '📊' },
    { title: 'Acesso Flexível', desc: 'Ao vivo + gravação por 30 dias', icon: '⏱️' },
    { title: 'Certificado Digital', desc: 'Reconhecimento profissional incluso', icon: '🏆' },
  ];

  const reasons = [
    { title: 'Visão Estratégica', desc: 'Amplie sua visão e antecipe tendências', icon: '🎯' },
    { title: 'Conhecimento Aplicável', desc: 'Conteúdo prático para resultados reais', icon: '💡' },
    { title: 'Conexões Valiosas', desc: 'Networking com líderes e decisores', icon: '🌐' },
    { title: 'Performance', desc: 'Estratégias para impulsionar negócios', icon: '📈' },
    { title: 'Governança', desc: 'Boas práticas para sustentabilidade', icon: '⚖️' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08152E] via-[#0F1F3D] to-[#F5F6F8] text-[#08152E] overflow-x-hidden">
      {/* HERO */}
      <section className="relative pt-6 pb-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* HEADER */}
         <header className="flex items-center justify-between py-6 mb-20 border-b border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            {/* Logo com img tag */}
         <img 
            src="logo/logo-ipge-branco-fd-transp.png" 
            alt="IPGE Logo" 
            className="h-15 w-auto"
    />

   

    
  </div>

            <nav className="hidden lg:flex items-center gap-8 text-sm text-white/80 font-medium">
              {['O EVENTO', 'PALESTRANTES', 'INGRESSOS', 'FAQ'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="hover:text-white transition-all duration-300 relative group">
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C79A52] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a href="https://pay.hotmart.com/SEU-LINK-AQUI" target="_blank" className="bg-gradient-to-r from-[#C79A52] to-[#D8AE6A] hover:shadow-lg hover:shadow-[#C79A52]/50 text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold">
                GARANTIR VAGA
              </a>
            </nav>
          </header>

          {/* HERO CONTENT */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-[#C79A52]/30 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#C79A52] animate-pulse"></span>
                <span className="text-[#D9AE68] text-sm font-semibold tracking-wide">EVENTO ONLINE AO VIVO</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-[-0.02em] text-white">
                  Roadmap do Planejamento Estratégico
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C79A52] via-[#D9AE68] to-[#E8C89F]">2027</span>
                </h1>

                <p className="text-xl text-white/80 leading-relaxed max-w-2xl">
                  Julho é o momento ideal para iniciar o processo de planejamento estratégico que vai guiar sua empresa em 2027. Comece com a revisão 6+6 e estruture a execução com governança profissional.
                </p>
              </div>

              {/* Quick info cards */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { label: 'Data', value: '15Jun26', icon: '📅' },
                  { label: 'Horário', value: '17h30 às 19h', icon: '🕘' },
                  { label: 'Formato', value: '100% Online', icon: '📡' },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                    <p className="text-2xl mb-2">{item.icon}</p>
                    <p className="text-xs text-white/50 uppercase tracking-wide">{item.label}</p>
                    <p className="text-white font-bold mt-1">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-8">
                <a href="https://pay.hotmart.com/SEU-LINK-AQUI" target="_blank" className="group relative px-8 py-4 rounded-xl font-bold text-white overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#C79A52] to-[#D8AE6A] group-hover:shadow-2xl group-hover:shadow-[#C79A52]/50 transition-all duration-300"></div>
                  <span className="relative flex items-center gap-2">GARANTIR MINHA VAGA <span className="group-hover:translate-x-1 transition-transform">→</span></span>
                </a>

                <a href="#programacao" className="px-8 py-4 rounded-xl font-bold text-white border-2 border-white/20 hover:border-[#C79A52] hover:bg-white/5 transition-all duration-300">
                  VER PROGRAMAÇÃO
                </a>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-[#C79A52]/20 to-blue-500/20 blur-3xl rounded-full group-hover:blur-2xl transition-all duration-300"></div>

              <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl group-hover:border-[#C79A52]/1 transition-all duration-300">
                <img src="img/caminhos.jpg" alt="webinar" className="h-[500px] w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08152E] via-transparent to-transparent"></div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#091A37] to-[#0D2550] border border-white/10 backdrop-blur-md rounded-2xl p-6 max-w-xs text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">✨</span>
                  <p className="font-black text-sm">ACESSO À GRAVAÇÃO</p>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">Não pode ao vivo? Assista a gravação por até 30 dias após o evento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <div key={item.title} className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-[#C79A52] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-black text-lg text-[#101C3D] leading-tight">{item.title}</h3>
                <p className="text-slate-600 mt-3 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section id="palestrantes" className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-[#101C3D] tracking-tight mb-4">Especialistas do Webinar</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Aprenda com os maiores especialistas em estratégia, governança e gestão de pessoas do Brasil</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {speakers.map((speaker, i) => (
              <div key={speaker.name} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-8 bg-gradient-to-br from-slate-200 to-slate-300 h-96 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08152E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm leading-relaxed">{speaker.bio}</p>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-[#101C3D] group-hover:text-[#C79A52] transition-colors">{speaker.name}</h3>
                <p className="text-slate-600 mt-2 text-sm font-medium">{speaker.role}</p>

                <a href={speaker.linkedin} target="_blank" className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl border-2 border-slate-300 text-slate-700 hover:border-[#C79A52] hover:text-[#C79A52] hover:bg-[#C79A52]/5 transition-all duration-300 font-semibold text-sm">
                  <span>in</span> Ver LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM */}
{/* PROGRAM */}
<section id="programacao" className="pb-24 bg-[#F7F8FA] pt-8">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-black text-[#101C3D] mb-12">PROGRAMAÇÃO</h2>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* TIMELINE - Coluna esquerda */}
      <div className="lg:col-span-2">
        <div className="space-y-6">
          {schedule.map((item, i) => (
            <div key={item.time} className="group cursor-pointer">
              <div className="flex gap-6 p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#C79A52] hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#C79A52] to-[#D8AE6A] shadow-lg"></div>
                  {i < schedule.length - 1 && <div className="w-1 h-16 bg-gradient-to-b from-[#C79A52] to-transparent mt-2"></div>}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-black text-[#C79A52] text-lg min-w-[80px]">{item.time}</span>
                  </div>
                  <h3 className="font-black text-[#101C3D] text-lg group-hover:text-[#C79A52] transition-colors whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETALHES + INGRESSO - Coluna direita */}
      <div className="lg:col-span-1 space-y-8">

        {/* DETALHES DO EVENTO */}
        <div className="bg-gradient-to-br from-[#091A37] to-[#0D2550] text-white rounded-3xl p-8 shadow-2xl h-fit">
          <h3 className="text-2xl font-black leading-tight mb-8">Detalhes do Evento</h3>

          <div className="space-y-6">
            {[
              { icon: '📅', label: 'DATA', value: '15 Jun 26' },
              { icon: '⏰', label: 'DURAÇÃO', value: '1h30' },
              { icon: '📡', label: 'FORMATO', value: '100% Online' },
              { icon: '🔄', label: 'GRAVAÇÃO', value: '30 dias' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 pb-6 border-b border-white/10 last:border-0 last:pb-0">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-white/60 font-bold mb-1">{item.label}</p>
                  <p className="text-xl font-black">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INGRESSO INDIVIDUAL */}
        <div className="bg-gradient-to-br from-[#C79A52] to-[#D8AE6A] rounded-3xl p-8 shadow-2xl">
          <p className="text-white/90 text-xs font-semibold uppercase tracking-wide mb-3">Ingresso Individual</p>

          <h3 className="text-5xl font-black text-white mb-2">R$ 95,00</h3>

          <p className="text-white/80 mb-6 text-sm">ou 4x R$ 24,52</p>

          <p className="text-white font-bold text-sm mb-6 pb-6 border-b border-white/30">
            Desconto em grupo: a partir do 2º participante, R$ 45,00
          </p>

          <ul className="space-y-3 mb-8 text-white text-sm">
            <li>✓ Acesso ao evento ao vivo</li>
            <li>✓ Materiais exclusivos</li>
            <li>✓ Gravação 30 dias</li>
            <li>✓ Certificado digital</li>
          </ul>

          <button className="w-full bg-white text-[#C79A52] font-black py-3 rounded-2xl hover:shadow-lg transition-all text-lg">
            GARANTIR VAGA
          </button>

          <p className="text-center text-white/70 text-xs mt-4">🔒 Pagamento seguro</p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* REASONS */}
      <section className="py-32 bg-gradient-to-b from-[#08152E] via-[#0F1F3D] to-[#08152E] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C79A52]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tight mb-4">Por Que Sua Empresa Precisa Começar Agora?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">Julho é o mês crítico para estruturar sua estratégia 2027 com solidez e profissionalismo</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
            {reasons.map((item) => (
              <div key={item.title} className="group text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C79A52] hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">{item.icon}</div>
                <h3 className="font-black text-lg leading-tight mb-3">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-3xl p-12 text-center backdrop-blur-sm">
            <h3 className="text-4xl font-black mb-6">É Hora de Começar Sua Estratégia 2027</h3>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Se você quer organizar a base da sua estratégia com solidez e profissionalismo, inscreva sua equipe agora.</p>
            <a href="https://pay.hotmart.com/SEU-LINK-AQUI" target="_blank" className="inline-block bg-gradient-to-r from-[#C79A52] to-[#D8AE6A] hover:shadow-2xl hover:shadow-[#C79A52]/50 text-white font-black px-12 py-5 rounded-xl transition-all duration-300">
              INSCREVER MINHA EQUIPE
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#07152E] border-t border-white/10 py-16 text-white/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
            <div>
              <h3 className="text-2xl font-black text-white mb-4">IPGE</h3>
              <p className="text-sm leading-relaxed">Gestão Estratégica desde 1994. Transformando empresas através de estratégia, execução e governança.</p>
            </div>

            <div>
              <p className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Links Rápidos</p>
              <ul className="space-y-2 text-sm">
                {['O Evento', 'Palestrantes', 'Ingressos', 'FAQ'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-[#C79A52] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Redes Sociais</p>
              <div className="flex gap-4 text-xl">
                {['in', '◎', '▶'].map((icon) => (
                  <a key={icon} href="#" className="hover:text-[#C79A52] transition-colors">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <p>© 2026 IPGE — Todos os direitos reservados.</p>
            <p>Desenvolvido com ❤️ para líderes estratégicos</p>
          </div>
        </div>
      </footer>
    </div>
  );
}