
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ChevronDown, 
  Star, 
  MapPin, 
  MessageCircle,
  ArrowUp,
  Shield,
  CheckCircle,
  Activity,
  Quote,
  XCircle,
  CreditCard,
  Utensils,
  Maximize2,
  X,
  Menu as MenuIcon,
  Heart
} from 'lucide-react';
import LeadForm from './components/LeadForm';
import Quiz from './components/Quiz';
import { 
  MAIN_DOCTOR, 
  SECOND_DOCTOR,
  PROCESS_STEPS, 
  REVIEWS 
} from './constants';

const REPO_BASE = "https://raw.githubusercontent.com/MrtugaMrtuga/Landing-Page/c9cff483f2a488747a4f836ad03849a9f5b8a1bc";
const ASSETS_BASE = "https://raw.githubusercontent.com/MrtugaMrtuga/Assets-da-app/dece48d968b8b57ca89db9a66915d59af23a427f";

const CLINIC_LOGO_URL = `${REPO_BASE}/Logo.jpg`;
const DOCTOR_JOANA_URL = `${ASSETS_BASE}/Joana%20Amaral.jpg`;
const DOCTOR_BRUNO_URL = `${ASSETS_BASE}/Bruno%20Aires.jpg`;
const CASE_VIDEO_URL = "https://raw.githubusercontent.com/MrtugaMrtuga/Landing-Page/96b02a8ef1827a7f9cf492b61eb1d2c68d0050bb/all%20on%204.mov";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/bHJgi2o7xwqJocoZ7";

const CLINIC_PHOTOS = [
  `${REPO_BASE}/IMG_0500.jpeg`,
  `${REPO_BASE}/0617_fotografias-gerais%20(33).jpeg`,
  `${REPO_BASE}/0617_fotografias-gerais%20(32).jpeg`,
  `${REPO_BASE}/0617_fotografias-gerais%20(18).jpeg`,
];

const TRANSFORMATIONS = [
  { 
    before: "https://raw.githubusercontent.com/MrtugaMrtuga/Landing-Page/62bb24843ab6ddf047df40f736f64793902eb16f/Antes%20JS.JPG", 
    after: "https://raw.githubusercontent.com/MrtugaMrtuga/Landing-Page/62bb24843ab6ddf047df40f736f64793902eb16f/Depois%20JS.JPG", 
    title: "Reabilitação Total Superior" 
  },
  { 
    before: "https://raw.githubusercontent.com/MrtugaMrtuga/Landing-Page/8ab293ab7f402b5e1243229f194c07233b52810c/IMG_2321.JPG", 
    after: "https://raw.githubusercontent.com/MrtugaMrtuga/Landing-Page/8ab293ab7f402b5e1243229f194c07233b52810c/IMG_5758.jpg", 
    title: "Sorriso Natural" 
  },
];

const App: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<typeof TRANSFORMATIONS[0] | null>(null);
  const [selectedClinicPhoto, setSelectedClinicPhoto] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (selectedCase || selectedClinicPhoto || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedCase, selectedClinicPhoto, isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-[#FDFCF9] selection:bg-black selection:text-white font-sans text-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
          <a href="https://www.gosmile.pt/" className="flex items-center">
            <img 
              src={CLINIC_LOGO_URL} 
              alt="Go Smile" 
              className="h-10 md:h-14 w-auto object-contain mix-blend-multiply"
            />
          </a>
          
          <div className="hidden lg:flex items-center gap-8">
             <button onClick={() => scrollToSection('results')} className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-black">Resultados</button>
             <button onClick={() => scrollToSection('team')} className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-black">A Equipa</button>
             <button onClick={() => scrollToSection('testimonials')} className="text-sm font-bold uppercase tracking-widest text-gray-700 hover:text-black">Opiniões</button>
             <a href="#leads" className="bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all">
               Marcar Consulta
             </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <a href="tel:914226599" className="bg-black text-white p-3 rounded-full">
              <Phone className="w-5 h-5"/>
            </a>
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-3 text-black"
              aria-label="Menu"
            >
              <MenuIcon className="w-8 h-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-white text-black flex flex-col">
          <div className="h-20 flex items-center justify-between px-6 border-b">
            <img src={CLINIC_LOGO_URL} alt="Go Smile" className="h-10 w-auto" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X className="w-10 h-10" />
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-10 p-6">
            <button onClick={() => scrollToSection('results')} className="text-2xl font-bold uppercase tracking-widest">Resultados</button>
            <button onClick={() => scrollToSection('team')} className="text-2xl font-bold uppercase tracking-widest">A Equipa</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-2xl font-bold uppercase tracking-widest">Opiniões</button>
            <a href="https://www.gosmile.pt/" className="text-2xl font-bold uppercase tracking-widest text-gray-500">Site Oficial</a>
            <div className="w-full h-px bg-gray-200"></div>
            <a href="#leads" onClick={() => setIsMobileMenuOpen(false)} className="w-full bg-black text-white text-center py-6 text-xl font-bold uppercase tracking-widest">Marcar Agora</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-48 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 md:space-y-10">
            <div className="inline-block bg-black text-white px-4 py-2 text-sm md:text-base font-bold uppercase tracking-[0.2em]">
               Referência em Águeda
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold text-black tracking-tight leading-[1.1]">
              Volte a comer tudo o que gosta com <span className="text-gray-600 italic">Dentes Fixos</span>.
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed max-w-2xl">
              Recupere a sua mastigação e o prazer de sorrir em apenas 24 horas. Sem a insegurança das próteses que caem.
            </h2>
            
            <div className="grid grid-cols-2 gap-6 md:gap-10 pt-4">
              <div className="flex items-center gap-4">
                 <div className="bg-gray-100 p-3 rounded-full"><Utensils className="w-6 h-6 text-black"/></div>
                 <span className="text-base md:text-lg font-bold text-black leading-tight uppercase tracking-tight">Comer sem<br/>limitações</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="bg-gray-100 p-3 rounded-full"><Shield className="w-6 h-6 text-black"/></div>
                 <span className="text-base md:text-lg font-bold text-black leading-tight uppercase tracking-tight">Tratamento<br/>Indolor</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="bg-gray-100 p-3 rounded-full"><CreditCard className="w-6 h-6 text-black"/></div>
                 <span className="text-base md:text-lg font-bold text-black leading-tight uppercase tracking-tight">Até 120x<br/>Sem Juros</span>
              </div>
              <div className="flex items-center gap-4">
                 <div className="bg-gray-100 p-3 rounded-full"><Heart className="w-6 h-6 text-black"/></div>
                 <span className="text-base md:text-lg font-bold text-black leading-tight uppercase tracking-tight">Dentes<br/>em 1 Dia</span>
              </div>
            </div>
          </div>
          
          <div id="leads" className="lg:col-span-5 w-full">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Simulator */}
      <section className="py-16 md:py-32 bg-[#FAF9F6]" id="simulator">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">Qual o seu caso?</h2>
            <p className="text-lg text-gray-600 font-medium">Responda a 3 perguntas e saiba como podemos ajudar.</p>
          </div>
          <Quiz />
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">O Fim das Próteses Soltas</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 md:p-12 border border-gray-100">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-red-600">Com a "Placa" atual:</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-lg text-gray-700 font-medium">
                  <XCircle className="w-7 h-7 text-red-500 shrink-0 mt-0.5"/>
                  <span>Os dentes abanam ao falar ou comer.</span>
                </li>
                <li className="flex items-start gap-4 text-lg text-gray-700 font-medium">
                  <XCircle className="w-7 h-7 text-red-500 shrink-0 mt-0.5"/>
                  <span>Céu da boca tapado tira o sabor da comida.</span>
                </li>
                <li className="flex items-start gap-4 text-lg text-gray-700 font-medium">
                  <XCircle className="w-7 h-7 text-red-500 shrink-0 mt-0.5"/>
                  <span>Causa feridas e desconforto constante.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-black p-8 md:p-12 text-white shadow-xl">
              <h3 className="text-xl font-bold uppercase tracking-widest mb-8 text-green-400">Com Prótese Fixa:</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 text-lg font-medium">
                  <CheckCircle className="w-7 h-7 text-green-400 shrink-0 mt-0.5"/>
                  <span>Dentes fixos que não saem do lugar.</span>
                </li>
                <li className="flex items-start gap-4 text-lg font-medium">
                  <CheckCircle className="w-7 h-7 text-green-400 shrink-0 mt-0.5"/>
                  <span>Céu da boca livre: sinta novamente os sabores.</span>
                </li>
                <li className="flex items-start gap-4 text-lg font-medium">
                  <CheckCircle className="w-7 h-7 text-green-400 shrink-0 mt-0.5"/>
                  <span>Higiene fácil, igual aos dentes naturais.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 md:py-32 bg-[#FAF9F6]" id="results">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Casos de Sucesso</h2>
            <p className="mt-4 text-lg text-gray-600">Veja como mudámos o sorriso dos nossos pacientes.</p>
          </div>
          
          <div className="max-w-5xl mx-auto flex flex-col gap-12">
            {TRANSFORMATIONS.map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedCase(item)}
                className="bg-white p-4 md:p-8 shadow-md border border-gray-100 group cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6">
                   <div className="relative">
                      <img src={item.before} className="w-full aspect-[4/3] object-cover" alt="Antes" />
                      <div className="absolute top-2 left-2 bg-black/80 text-white px-3 py-1 text-xs font-bold uppercase">Antes</div>
                   </div>
                   <div className="relative">
                      <img src={item.after} className="w-full aspect-[4/3] object-cover" alt="Depois" />
                      <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 text-xs font-bold uppercase">Depois</div>
                   </div>
                </div>
                <div className="flex justify-between items-center">
                   <h4 className="text-lg font-bold uppercase tracking-wide text-black">{item.title}</h4>
                   <span className="text-sm font-bold text-gray-400 flex items-center gap-1">Toque para ampliar <Maximize2 className="w-4 h-4"/></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12">Entenda o Processo</h2>
          <div className="max-w-4xl mx-auto aspect-video bg-black shadow-2xl overflow-hidden border-8 border-gray-100">
            <video className="w-full h-full object-cover" controls playsInline>
              <source src={CASE_VIDEO_URL} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-black text-white" id="team">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">Mãos <span className="text-gray-400 italic">especializadas</span></h2>
              <p className="text-2xl text-gray-300 font-medium leading-relaxed italic">
                "O nosso foco é devolver a função e o prazer de viver a cada paciente."
              </p>
              <div className="space-y-4">
                 <div className="flex gap-4 items-center p-6 bg-white/10 rounded-lg">
                   <Activity className="w-8 h-8 text-green-400 shrink-0"/>
                   <span className="text-lg md:text-xl font-bold uppercase tracking-widest">Tecnologia Digital 3D</span>
                 </div>
                 <div className="flex gap-4 items-center p-6 bg-white/10 rounded-lg">
                   <Shield className="w-8 h-8 text-green-400 shrink-0"/>
                   <span className="text-lg md:text-xl font-bold uppercase tracking-widest">Experiência Comprovada</span>
                 </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-900">
                    <img src={DOCTOR_JOANA_URL} alt={MAIN_DOCTOR} className="w-full h-full object-cover"/>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold uppercase">{MAIN_DOCTOR}</h4>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Implantologia</p>
                  </div>
               </div>
               <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-900">
                    <img src={DOCTOR_BRUNO_URL} alt={SECOND_DOCTOR} className="w-full h-full object-cover"/>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg font-bold uppercase">{SECOND_DOCTOR}</h4>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Reabilitação Oral</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-flex flex-col items-center p-8 bg-gray-50 rounded-2xl mb-12 border border-gray-100">
                <div className="flex text-4xl font-black mb-2">
                  <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span><span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
                </div>
                <div className="text-6xl font-black text-black mb-2">5.0</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-8 h-8 text-[#FBBC05] fill-current" />)}
                </div>
                <span className="text-lg font-bold uppercase text-gray-700">110 Avaliações reais</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-extrabold">O que dizem os nossos pacientes</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-[#FAF9F6] p-10 border border-gray-100 flex flex-col gap-6 relative">
                <Quote className="absolute top-4 right-4 w-12 h-12 text-black/5"/>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.author} className="w-16 h-16 rounded-full grayscale" />
                  <div>
                    <h4 className="text-lg font-bold uppercase">{review.author}</h4>
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-black fill-current"/>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xl text-gray-800 italic leading-relaxed font-medium">"{review.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Space Gallery */}
      <section className="py-20 md:py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">O Nosso Espaço em Águeda</h2>
             <p className="mt-4 text-lg text-gray-600 font-bold uppercase">Toque numa foto para ampliar</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CLINIC_PHOTOS.map((photo, i) => (
               <button 
                key={i} 
                onClick={() => setSelectedClinicPhoto(photo)}
                className="aspect-square bg-white overflow-hidden border-4 border-white shadow-md active:scale-95 transition-all"
               >
                  <img src={photo} className="w-full h-full object-cover" alt={`Clínica Go Smile ${i+1}`} />
               </button>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-16 md:py-32 border-t">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
          <div className="grid md:grid-cols-3 gap-16 mb-20">
            <div className="space-y-6">
              <img src={CLINIC_LOGO_URL} className="h-12 mx-auto md:mx-0 mix-blend-multiply" alt="Logo"/>
              <p className="text-lg text-gray-600 font-bold uppercase tracking-widest">Águeda, Portugal</p>
            </div>
            <div>
              <h4 className="text-lg font-black uppercase mb-6">Localização</h4>
              <p className="text-xl text-gray-700 leading-relaxed font-bold mb-4">Largo Antonio Breda 23<br/>Loja A&B, Águeda</p>
              <a href={GOOGLE_MAPS_URL} className="text-black font-black border-b-2 border-black pb-1 text-lg">Como Chegar</a>
            </div>
            <div>
              <h4 className="text-lg font-black uppercase mb-6">Contactos</h4>
              <p className="text-3xl text-black font-black mb-4">914 226 599</p>
              <p className="text-xl text-gray-500 font-bold">geral@gosmile.pt</p>
            </div>
          </div>
          <p className="text-center text-gray-400 font-bold uppercase text-sm tracking-[0.4em]">© 2025 Go Smile Dental Clinic. ERS: E142261</p>
        </div>
      </footer>

      {/* Lightboxes */}
      {(selectedCase || selectedClinicPhoto) && (
        <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center p-4">
          <button 
            onClick={() => { setSelectedCase(null); setSelectedClinicPhoto(null); }} 
            className="absolute top-6 right-6 text-white bg-white/20 p-4 rounded-full"
          >
            <X className="w-10 h-10" />
          </button>
          <div className="w-full max-w-5xl">
             {selectedCase ? (
               <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <img src={selectedCase.before} className="w-full object-contain bg-white/5 h-[300px] md:h-[500px]" alt="Antes" />
                      <img src={selectedCase.after} className="w-full object-contain bg-white/5 h-[300px] md:h-[500px]" alt="Depois" />
                  </div>
                  <div className="text-center">
                      <h3 className="text-white text-2xl font-bold uppercase mb-6">{selectedCase.title}</h3>
                      <button onClick={() => { setSelectedCase(null); scrollToSection('leads'); }} className="w-full md:w-auto bg-white text-black px-12 py-6 text-xl font-bold uppercase tracking-widest">Quero um resultado assim</button>
                  </div>
               </div>
             ) : (
               <div className="flex flex-col items-center">
                  <img src={selectedClinicPhoto!} className="w-full max-h-[80vh] object-contain" alt="Galeria Clínica" />
                  <button onClick={() => setSelectedClinicPhoto(null)} className="mt-8 bg-white text-black px-12 py-5 text-xl font-bold uppercase">Fechar</button>
               </div>
             )}
          </div>
        </div>
      )}

      {/* MOBILE STICKY CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 z-50 flex gap-2">
        <a href="tel:914226599" className="flex-1 bg-white border-2 border-black text-black text-center py-4 text-lg font-black flex items-center justify-center gap-2">
           LIGAR
        </a>
        <a href="#leads" className="flex-[2] bg-black text-white text-center py-4 text-lg font-black">
           MARCAR AGORA
        </a>
      </div>

      <div className="hidden lg:flex fixed bottom-8 right-8 flex-col gap-4 z-50">
        <a href="https://wa.me/351914226599" className="bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:scale-105 transition-all">
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="bg-white text-black p-5 rounded-full shadow-2xl border hover:bg-black hover:text-white">
          <ArrowUp className="w-8 h-8"/>
        </button>
      </div>

      <style>{`
        body { font-size: 16px; -webkit-font-smoothing: antialiased; }
        @media (max-width: 640px) { h1 { font-size: 2.25rem !important; } }
        .animate-fade-in { animation: fadeIn 0.4s ease-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default App;
