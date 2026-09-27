import { Scissors, Printer, ShieldCheck, Wrench } from "lucide-react";
import type { ReactNode } from "react";

const services: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Scissors size={40} />,
    title: "Confecção sob Medida",
    description:
      "Peças exclusivas feitas especialmente para você, com tecidos de qualidade e acabamento impecável.",
  },
  {
    icon: <Printer size={40} />,
    title: "Serigrafia",
    description:
      "Estampas personalizadas para camisetas, uniformes e brindes com cores vibrantes e durabilidade.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Uniformes",
    description:
      "Uniformes profissionais para empresas, escolas e eventos, com personalização completa.",
  },
  {
    icon: <Wrench size={40} />,
    title: "Consertos e Ajustes",
    description:
      "Ajustes e reparos em roupas com precisão e cuidado para deixar tudo no tamanho ideal.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-brand-red py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-gold sm:text-4xl">
          Nossos Serviços
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-brand-red-dark bg-brand-red-dark/30 p-8 text-center transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex text-brand-gold">{service.icon}</div>
              <h3 className="mb-3 text-xl font-semibold text-brand-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-white/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
