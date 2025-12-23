
import React, { useState, useEffect } from 'react';
import { PageId, Publication, CoffeeLog } from './types';
import { NEWS_DATA, PUBLICATIONS_DATA, PROJECTS_DATA, COFFEE_LOGS } from './constants';
import { BBSymbol } from './components/BBSymbol';
import { Github, Linkedin, Mail, ExternalLink, Sun, Moon, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<PageId>('about');
  const [activeLogId, setActiveLogId] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>((() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  })());

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (activePage !== 'ohho') {
      setActiveLogId(null);
    }
  }, [activePage, activeLogId]);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.body.style.background = 'radial-gradient(circle at center, #1e291e 0%, #0a0a05 100%)';
      document.body.style.color = '#f3f4f6';
    } else {
      document.body.style.background = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const Header = () => (
    <div className="pt-12 pb-8 flex justify-between items-start relative">
      {activePage === 'about' ? (
        <div className="flex flex-col gap-3 animate-fadeIn">
          <div className="flex items-end gap-2">
            <span className={`text-3xl md:text-5xl font-fell leading-none pb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>g</span>
            <div className="scale-75 origin-bottom">
              <BBSymbol letter="O" number={8} />
            </div>
            <span className={`text-3xl md:text-5xl font-fell leading-none pb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>ffar</span>
          </div>
          <div className="flex items-end gap-2">
            <div className="scale-75 origin-bottom">
              <BBSymbol letter="H" number={1} />
            </div>
            <div className="scale-75 origin-bottom">
              <BBSymbol letter="O" number={8} />
            </div>
            <span className={`text-3xl md:text-5xl font-fell leading-none pb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>ssain</span>
          </div>
          <div className="flex items-end gap-2">
            <span className={`text-3xl md:text-5xl font-fell leading-none pb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>fa</span>
            <div className="scale-75 origin-bottom">
              <BBSymbol letter="H" number={1} />
            </div>
            <span className={`text-3xl md:text-5xl font-fell leading-none pb-1 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>im</span>
          </div>
        </div>
      ) : (
        <div className={`text-2xl font-bold border-b-2 border-[#2f6a2f] pb-2 inline-block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Goffar H. Fahim
        </div>
      )}
      
      <button 
        onClick={toggleTheme}
        className={`p-3 rounded-full transition-all duration-300 shadow-lg ml-auto ${isDarkMode ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-slate-200 text-slate-700 hover:bg-slate-300'}`}
        aria-label="Toggle Theme"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );

  const Nav = () => (
    <nav className={`mb-12 sticky top-0 z-50 backdrop-blur-sm py-4 transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a05]/80' : 'bg-[#f8fafc]/80'}`}>
      <ul className={`flex flex-wrap gap-6 text-lg font-semibold border-b pb-2 ${isDarkMode ? 'border-gray-800' : 'border-slate-300'}`}>
        <li>
          <button 
            onClick={() => { setActivePage('about'); setActiveLogId(null); }}
            className={`transition-all duration-300 hover:text-blue-500 ${activePage === 'about' ? 'text-blue-500 border-b-2 border-blue-500' : (isDarkMode ? 'text-gray-400' : 'text-slate-500')}`}
          >
            /about me
          </button>
        </li>
        <li>
          <button 
            onClick={() => { setActivePage('publications'); setActiveLogId(null); }}
            className={`transition-all duration-300 hover:text-blue-500 ${activePage === 'publications' ? 'text-blue-500 border-b-2 border-blue-500' : (isDarkMode ? 'text-gray-400' : 'text-slate-500')}`}
          >
            /publications
          </button>
        </li>
        <li>
          <button 
            onClick={() => { setActivePage('projects'); setActiveLogId(null); }}
            className={`transition-all duration-300 hover:text-blue-500 ${activePage === 'projects' ? 'text-blue-500 border-b-2 border-blue-500' : (isDarkMode ? 'text-gray-400' : 'text-slate-500')}`}
          >
            /projects
          </button>
        </li>
        <li>
          <button 
            onClick={() => { setActivePage('ohho'); setActiveLogId(null); }}
            className={`transition-all duration-300 hover:text-[#3c7f3c] ${activePage === 'ohho' ? 'text-[#3c7f3c] border-b-2 border-[#3c7f3c]' : (isDarkMode ? 'text-gray-400' : 'text-slate-500')}`}
          >
            /o-h-h-o
          </button>
        </li>
        <li>
          <a 
            href="./Fahim's%20CV.pdf" 
            target="_blank"
            className={`transition-colors ${isDarkMode ? 'text-gray-400 hover:text-blue-500' : 'text-slate-500 hover:text-blue-600'}`}
          >
            /resume
          </a>
        </li>
      </ul>
    </nav>
  );

  const NewsSection = () => (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-4 text-[#3c7f3c] uppercase tracking-wider">Latest Updates</h3>
      <div className={`border rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ${isDarkMode ? 'bg-black/40 border-gray-800' : 'bg-white border-slate-200'}`}>
        <div className="max-h-[400px] overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {NEWS_DATA.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row gap-2 md:gap-6 border-b pb-4 last:border-0 last:pb-0 transition-colors p-2 rounded-lg ${isDarkMode ? 'border-gray-800/50 hover:bg-white/5' : 'border-slate-100 hover:bg-slate-50'}`}>
              <div className={`font-bold whitespace-nowrap text-xs md:text-sm md:w-28 pt-1 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {item.date}
              </div>
              <div className={`flex-1 text-sm leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
                <span dangerouslySetInnerHTML={{ __html: item.content }} />
                {item.link && (
                  <a href={item.link} target="_blank" className={`ml-2 hover:underline inline-flex items-center gap-1 font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {item.linkText || 'Link'} <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SocialLinks = () => (
    <div className={`flex gap-6 mt-8 py-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-slate-300'}`}>
      <a href="https://github.com/Goffar-dp" target="_blank" className="hover:scale-110 transition-transform"><Github className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-black'}`} /></a>
      <a href="https://www.linkedin.com/in/goffar-hossain/" target="_blank" className="hover:scale-110 transition-transform"><Linkedin className={`${isDarkMode ? 'text-gray-400 hover:text-blue-600' : 'text-slate-600 hover:text-blue-700'}`} /></a>
      <a href="mailto:goffarfahim@gmail.com" className="hover:scale-110 transition-transform"><Mail className={`${isDarkMode ? 'text-gray-400 hover:text-red-400' : 'text-slate-600 hover:text-red-500'}`} /></a>
    </div>
  );

  const AboutPage = () => (
    <div className="animate-fadeIn">
      <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-gray-100' : 'text-slate-900'}`}>Hey, thanks for stopping by! 👋</h2>
      <div className={`space-y-6 text-lg text-justify ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
        <p>
          I am an <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>MSc (Thesis) student in Statistics at Khulna University</strong>, supervised by 
          <a href="https://ku.ac.bd/discipline/stat/faculty/monir.stat91" target="_blank" className={`mx-1 hover:underline font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Dr. Md. Maniruzzaman</a>. 
          My current research focuses on designing an <strong className={isDarkMode ? 'text-blue-300' : 'text-blue-700'}>integrated ML + NLP + XAI system</strong> for simultaneous detection of depression and anxiety among school teachers in Bangladesh.
        </p>
        <p>
          Previously, co-authored a <em className="italic">PLOS One</em> article (2025) on <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>trends and determinants of antenatal care</strong>, and completed my BSc thesis on <strong className={isDarkMode ? 'text-white' : 'text-slate-900'}>Fake news detection with XAI</strong> – supervised by 
          <a href="https://ku.ac.bd/discipline/stat/faculty/sutapaborna.ku" target="_blank" className={`mx-1 hover:underline font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Sutapa Dey Barna</a>.
        </p>
        <p>
          In my free time, I enjoy sports, mostly football, travelling, and sleeping.
        </p>
      </div>
      <NewsSection />
      <SocialLinks />
    </div>
  );

  const PublicationCard = ({ pub }: { pub: Publication }) => {
    const isPoster = pub.type === 'Poster';
    
    return (
      <div className={`flex flex-col md:flex-row gap-8 p-6 rounded-2xl border transition-all duration-300 group ${isDarkMode ? 'bg-black/20 border-gray-900 hover:border-[#3c7f3c]/50' : 'bg-white border-slate-200 hover:border-[#3c7f3c]/50 shadow-sm hover:shadow-md'}`}>
        <div className={`w-full md:w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg border flex items-center justify-center p-4 transition-colors ${isDarkMode ? 'bg-[#2f6a2f]/10 border-gray-800' : 'bg-[#2f6a2f]/5 border-slate-100'}`}>
          <div className="text-center">
            <span className="text-xl font-bold text-[#3c7f3c] opacity-80 group-hover:opacity-100 transition-opacity">
              {pub.thumbnail}
            </span>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <h3 className={`text-xl font-bold leading-tight group-hover:text-blue-500 transition-colors ${isDarkMode ? 'text-gray-100' : 'text-slate-900'}`}>{pub.title}</h3>
          <p className={`text-sm italic ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>{pub.authors}</p>
          <p className="text-sm font-semibold text-gray-500">{pub.venue}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            {isPoster ? (
              <a href={pub.pdfUrl} target="_blank" className="px-3 py-1 text-xs font-bold rounded border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all">
                POSTER
              </a>
            ) : (
              <>
                {pub.pdfUrl && pub.pdfUrl !== "#" && (
                  <a href={pub.pdfUrl} target="_blank" className="px-3 py-1 text-xs font-bold rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all">
                    PDF
                  </a>
                )}
                {pub.doi && (
                  <a href={pub.doi.startsWith('10.') ? `https://doi.org/${pub.doi}` : pub.doi} target="_blank" className="px-3 py-1 text-xs font-bold rounded border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all">
                    DOI
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  const PublicationsPage = () => (
    <div className="animate-fadeIn">
      <h1 className="text-4xl font-bold mb-12 text-[#3c7f3c] uppercase tracking-widest">Publications</h1>
      <div className="space-y-12">
        <div className="relative">
          <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] -z-10 ${isDarkMode ? 'bg-gray-800' : 'bg-slate-200'}`}></div>
          <span className={`pr-4 text-2xl font-bold text-gray-500 transition-colors ${isDarkMode ? 'bg-transparent' : 'bg-[#f8fafc]'}`}>2025</span>
        </div>
        {PUBLICATIONS_DATA.filter(p => p.year === 2025).map(pub => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="animate-fadeIn">
      <h1 className="text-4xl font-bold mb-12 text-[#3c7f3c] uppercase tracking-widest">Projects</h1>
      {PROJECTS_DATA.map(proj => (
        <div key={proj.id} className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className={`h-[1px] flex-1 ${isDarkMode ? 'bg-gray-800' : 'bg-slate-200'}`}></div>
            <span className="text-xl font-bold text-gray-500 uppercase tracking-tighter italic">{proj.category}</span>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className={`aspect-video rounded-3xl flex items-center justify-center text-6xl font-black border overflow-hidden relative group transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-[#2f6a2f] to-[#0a0a05] text-white/20 border-gray-800' : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-300 border-slate-200 shadow-sm'}`}>
              {proj.imageText}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                {proj.githubUrl && <a href={proj.githubUrl} target="_blank" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><Github /></a>}
                {proj.demoUrl && <a href={proj.demoUrl} target="_blank" className="p-3 bg-blue-500 text-white rounded-full hover:scale-110 transition-transform"><ExternalLink /></a>}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-slate-900'}`}>{proj.title}</h3>
              <p className={`leading-relaxed text-lg ${isDarkMode ? 'text-gray-400' : 'text-slate-600'}`} dangerouslySetInnerHTML={{ __html: proj.description }} />
              <div className="flex gap-4 pt-4">
                {proj.demoUrl && (
                  <a href={proj.demoUrl} target="_blank" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg transition-colors shadow-md">
                    Visit App <ExternalLink size={18} />
                  </a>
                )}
                {proj.githubUrl && (
                  <a href={proj.githubUrl} target="_blank" className={`flex items-center gap-2 border font-bold py-2 px-6 rounded-lg transition-colors ${isDarkMode ? 'border-gray-600 hover:bg-gray-800 text-white' : 'border-slate-300 hover:bg-slate-100 text-slate-700'}`}>
                    Source <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const OhhoPage = () => {
    const selectedLog = COFFEE_LOGS.find(l => l.id === activeLogId);

    if (selectedLog) {
      return (
        <div className="animate-fadeIn pb-20">
          <button 
            onClick={() => setActiveLogId(null)}
            className={`flex items-center gap-2 mb-8 transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'}`}
          >
            <ArrowLeft size={20} /> Back to Logs
          </button>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className={`text-3xl md:text-5xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {selectedLog.title}
              </h1>
              <div className="flex items-center gap-4 text-sm font-semibold text-[#3c7f3c]">
                <span>{selectedLog.date}</span>
              </div>
            </div>

            <div className={`p-6 rounded-xl border italic text-lg ${isDarkMode ? 'bg-white/5 border-gray-800 text-gray-300' : 'bg-slate-100 border-slate-200 text-slate-700'}`}>
              <span className="font-bold uppercase tracking-wider text-xs block mb-1 opacity-50">TL;DR</span>
              {selectedLog.tldr}
            </div>

            <div className={`space-y-6 text-lg leading-relaxed text-justify ${isDarkMode ? 'text-gray-300' : 'text-slate-600'}`}>
              {selectedLog.content.map((paragraph, i) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={i} className={`text-2xl font-bold pt-4 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return <p key={i}>{paragraph}</p>;
              })}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="animate-fadeIn min-h-[60vh] py-12 relative overflow-hidden flex flex-col items-center">
        {/* Subtle Steam Animation Layer */}
        <div className="absolute inset-0 pointer-events-none opacity-10 flex justify-center items-end pb-32">
          <div className="steam-container">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`steam-particle steam-${i+1}`} />
            ))}
          </div>
        </div>

        {/* Branding Header */}
        <div className="flex flex-col items-center justify-center space-y-12 mb-16 text-center">
          <div className="flex items-center justify-center gap-3 md:gap-5 relative z-10 hover:scale-105 transition-transform duration-500">
            <BBSymbol letter="O" number={8} />
            <BBSymbol letter="H" number={1} />
            <BBSymbol letter="H" number={1} />
            <BBSymbol letter="O" number={8} />
          </div>
          <p className={`text-2xl md:text-4xl font-medium tracking-tight px-4 max-w-3xl mx-auto leading-tight relative z-10 ${isDarkMode ? 'text-gray-200' : 'text-slate-700'}`}>
            I aspire to build O-H-H-O, a premium coffee brand from Bangladesh.
          </p>
        </div>

        {/* Logs Index */}
        <div className="w-full max-w-2xl relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-xl font-bold uppercase tracking-widest text-[#3c7f3c]">Project Logs</h3>
            <div className={`h-[1px] flex-1 ${isDarkMode ? 'bg-gray-800' : 'bg-slate-200'}`}></div>
          </div>
          
          <div className="space-y-4">
            {COFFEE_LOGS.map((log) => (
              <button
                key={log.id}
                onClick={() => setActiveLogId(log.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 group ${
                  isDarkMode 
                  ? 'bg-black/20 border-gray-900 hover:border-[#3c7f3c]/50 hover:bg-white/5' 
                  : 'bg-white border-slate-200 hover:border-[#3c7f3c]/50 hover:shadow-lg'
                }`}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-start">
                    <h4 className={`text-xl font-bold transition-colors group-hover:text-[#3c7f3c] ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                      {log.title}
                    </h4>
                    <span className={`text-xs font-bold whitespace-nowrap mt-1 ${isDarkMode ? 'text-gray-500' : 'text-slate-400'}`}>
                      {log.date}
                    </span>
                  </div>
                  <p className={`text-sm line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-slate-500'}`}>
                    <span className="font-bold text-[#3c7f3c] mr-2">TL;DR</span>
                    {log.tldr}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 transition-colors duration-400">
      <Header />
      <Nav />
      <main className="pb-20">
        {activePage === 'about' && <AboutPage />}
        {activePage === 'publications' && <PublicationsPage />}
        {activePage === 'projects' && <ProjectsPage />}
        {activePage === 'ohho' && <OhhoPage />}
      </main>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2f6a2f;
          border-radius: 10px;
        }

        /* Coffee Steam Styles */
        .steam-container {
          display: flex;
          gap: 20px;
        }
        .steam-particle {
          width: 10px;
          height: 100px;
          background: linear-gradient(to top, transparent, rgba(255,255,255,0.4), transparent);
          border-radius: 50%;
          filter: blur(10px);
          animation: steamRise 4s infinite ease-out;
        }
        .steam-1 { animation-delay: 0s; left: 10%; }
        .steam-2 { animation-delay: 0.8s; left: 30%; }
        .steam-3 { animation-delay: 1.6s; left: 50%; }
        .steam-4 { animation-delay: 2.4s; left: 70%; }
        .steam-5 { animation-delay: 3.2s; left: 90%; }

        @keyframes steamRise {
          0% {
            transform: translateY(0) scaleX(1);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          50% {
            transform: translateY(-100px) scaleX(2) skewX(5deg);
          }
          100% {
            transform: translateY(-200px) scaleX(3) skewX(10deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
