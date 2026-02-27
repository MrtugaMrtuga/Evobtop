
import React, { useState } from 'react';
import { ChevronRight, CheckCircle2, CreditCard, Heart, Utensils } from 'lucide-react';

const Quiz: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    { 
      q: "O que mais o incomoda hoje?", 
      icon: <Heart className="w-8 h-8" />,
      options: [
        { label: "Dentes em falta ou estragados", value: "falta" },
        { label: "Prótese que abana ou cai", value: "instavel" },
        { label: "Dificuldade em comer", value: "comer" },
        { label: "Vergonha de sorrir", value: "estetica" }
      ] 
    },
    { 
      q: "Qual seria a maior facilidade?", 
      icon: <CreditCard className="w-8 h-8" />,
      options: [
        { label: "Pagamento por Mensalidade", value: "mensalidades" },
        { label: "Desconto Pronto Pagamento", value: "pronto" },
        { label: "Acordos e Seguros", value: "seguro" }
      ] 
    }
  ];

  const handleOptionClick = (val: string) => {
    setAnswers([...answers, val]);
    setStep(step + 1);
  };

  return (
    <div className="bg-white p-6 md:p-12 border-2 border-gray-100 shadow-xl relative">
      {step < questions.length ? (
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 text-black">
              {questions[step].icon}
            </div>
            <h3 className="text-2xl md:text-4xl font-black tracking-tight leading-tight">{questions[step].q}</h3>
          </div>
          
          <div className="grid gap-4">
            {questions[step].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(opt.value)}
                className="w-full text-left py-6 px-8 border-2 border-gray-200 hover:border-black hover:bg-gray-50 transition-all flex items-center justify-between"
              >
                <span className="text-lg md:text-xl font-black uppercase tracking-tight text-gray-800">{opt.label}</span>
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-6 animate-fade-in max-w-xl mx-auto">
          <div className="mb-8 flex justify-center">
             <CheckCircle2 className="w-20 h-20 text-green-500" />
          </div>
          <h3 className="text-3xl font-black mb-6 uppercase">Perfil Analisado!</h3>
          <p className="text-xl text-gray-700 leading-relaxed font-bold mb-10">
            A solução de <span className="text-black underline">Prótese Fixa</span> é ideal para recuperar o seu conforto.
          </p>
          <button 
            onClick={() => { document.getElementById('leads')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="w-full bg-black text-white font-black py-8 px-12 text-xl uppercase tracking-widest shadow-xl"
          >
            SOLICITAR ORÇAMENTO
          </button>
          <button onClick={() => setStep(0)} className="mt-8 text-lg font-bold uppercase text-gray-400">Refazer Perguntas</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
