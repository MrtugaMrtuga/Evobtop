
import React, { useState } from 'react';
import { ShieldCheck, Lock, PhoneCall } from 'lucide-react';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://n8n.evob.org/webhook/Landingpage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'LP Go Smile Mobile 50+',
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) throw new Error('Falha no envio.');
      
      // Track Lead event in Meta Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }

      setIsSuccess(true);
    } catch (err) {
      setError('Ocorreu um erro. Por favor, ligue-nos diretamente para 914 226 599.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-10 border-4 border-black text-center shadow-2xl">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-black text-black mb-4 uppercase">Pedido Enviado!</h3>
        <p className="text-lg text-gray-700 font-bold leading-relaxed mb-8">
          A nossa equipa entrará em contacto consigo muito em breve para agendar a sua avaliação.
        </p>
        <a href="tel:914226599" className="flex items-center justify-center gap-3 bg-black text-white p-6 text-xl font-bold uppercase tracking-widest">
           <PhoneCall className="w-6 h-6"/> Ligar Agora
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-12 shadow-2xl border-2 border-gray-100">
      <div className="mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-black text-black mb-2 uppercase tracking-tight">Avaliação Gratuita</h3>
        <p className="text-lg text-gray-600 font-bold italic">Garanta a sua vaga para este mês.</p>
      </div>
      
      {error && (
        <div className="mb-6 p-6 bg-red-100 text-red-700 text-lg font-bold border-l-8 border-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-sm font-black uppercase tracking-widest text-gray-400 mb-2">Nome Completo</label>
          <input
            required
            type="text"
            className="w-full px-4 py-5 border-2 border-gray-200 focus:border-black outline-none transition-all text-xl font-bold uppercase bg-gray-50"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-black uppercase tracking-widest text-gray-400 mb-2">Telemóvel (Obrigatório)</label>
          <input
            required
            type="tel"
            className="w-full px-4 py-5 border-2 border-gray-200 focus:border-black outline-none transition-all text-xl font-bold bg-gray-50"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-black uppercase tracking-widest text-gray-400 mb-2">E-mail (Opcional)</label>
          <input
            type="email"
            className="w-full px-4 py-5 border-2 border-gray-200 focus:border-black outline-none transition-all text-xl font-bold bg-gray-50"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-black text-white font-black py-7 rounded-none hover:bg-gray-800 uppercase tracking-widest text-xl shadow-lg active:scale-95 transition-transform"
        >
          {isSubmitting ? 'A ENVIAR...' : 'RESERVAR MINHA VAGA'}
        </button>
        
        <div className="flex justify-center items-center gap-4 py-4 border-t border-gray-100 mt-6">
           <ShieldCheck className="w-6 h-6 text-green-600"/>
           <span className="text-sm font-black uppercase text-gray-500 tracking-widest">Seguro e Confidencial</span>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;
