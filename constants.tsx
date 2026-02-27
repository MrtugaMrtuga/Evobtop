
import React from 'react';
import { CheckCircle, Phone, Mail, MapPin, Star, Shield, Clock, Heart, Award } from 'lucide-react';
import { Review, FAQItem, ProcessStep } from './types';

export const CLINIC_NAME = "Go Smile";
export const MAIN_DOCTOR = "Dra. Joana Saraiva Amaral";
export const SECOND_DOCTOR = "Dr. Bruno Aires";

export const BENEFITS = [
  { icon: <Shield className="w-6 h-6 text-black" />, text: "Resultados naturais e estéticos" },
  { icon: <Clock className="w-6 h-6 text-black" />, text: "Solução de longa duração" },
  { icon: <Heart className="w-6 h-6 text-black" />, text: "Confiança ao sorrir" },
  { icon: <CheckCircle className="w-6 h-6 text-black" />, text: "Minimiza a perda óssea" },
  { icon: <Award className="w-6 h-6 text-black" />, text: "Conforto ao mastigar" },
  { icon: <CheckCircle className="w-6 h-6 text-black" />, text: "Melhoria na digestão" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Consulta de Avaliação",
    details: ["Exame completo da sua saúde oral", "Discussão dos objetivos", "Identificação da solução"]
  },
  {
    number: 2,
    title: "Plano Personalizado",
    details: ["Análise das opções", "Simulação do resultado", "Plano adaptado às suas necessidades"]
  },
  {
    number: 3,
    title: "Procedimento Cirúrgico",
    details: ["Realizado com anestesia local", "Técnicas minimamente invasivas", "Recuperação rápida"]
  },
  {
    number: 4,
    title: "Manutenção e Cuidados",
    details: ["Instruções para higiene oral", "Verificação da estabilidade", "Limpezas profissionais periódicas"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Ana Abrantes",
    date: "2024-11-11",
    rating: 5,
    content: "Melhor clínica dentária em Águeda! O atendimento da Dra. Joana foi impecável e os resultados superaram as minhas expectativas.",
    avatar: "https://picsum.photos/seed/ana/100/100"
  },
  {
    id: 2,
    author: "Carlos Mendes",
    date: "2024-12-05",
    rating: 5,
    content: "Recuperei a minha confiança. O processo de 'Dentes em 1 Dia' foi fantástico e quase indolor. Recomendo vivamente a Go Smile.",
    avatar: "https://picsum.photos/seed/carlos/100/100"
  },
  {
    id: 3,
    author: "Isabel Santos",
    date: "2025-01-20",
    rating: 5,
    content: "Excelente equipa e instalações muito modernas. Sentimo-nos logo em casa. O diagnóstico foi muito detalhado.",
    avatar: "https://picsum.photos/seed/isabel/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Os implantes dentários são uma solução duradoura?",
    answer: "Sim, os implantes dentários são projetados para serem uma solução duradoura e estável. Com os devidos cuidados, podem durar décadas."
  },
  {
    question: "Quanto tempo demora a recuperação?",
    answer: "A maioria dos pacientes retoma as atividades normais em 24-48 horas. Com a nossa técnica avançada, o desconforto é mínimo."
  },
  {
    question: "O procedimento de implantes é doloroso?",
    answer: "Não. O procedimento é realizado sob anestesia local, garantindo que não sinta dor. No pós-operatório, prescrevemos medicação para qualquer sensibilidade."
  }
];
