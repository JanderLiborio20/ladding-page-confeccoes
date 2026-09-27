import { Star } from "lucide-react";

// PLACEHOLDER: nomes e textos fictícios, só para o layout não ficar vazio.
// Substituir pelas avaliações reais do Google antes de publicar o site.
const testimonials = [
  {
    name: "Ana Paula Ribeiro",
    role: "Vestido sob medida",
    text: "Excelente qualidade e atendimento! As peças ficaram perfeitas, sob medida e com acabamento impecável.",
  },
  {
    name: "Marcos Bentes",
    role: "Uniformes para empresa",
    text: "A serigrafia ficou incrível! Cores vibrantes e duráveis. Recomendo para uniformes e camisetas personalizadas.",
  },
  {
    name: "Rosângela Farias",
    role: "Ajustes e consertos",
    text: "Serviço rápido e profissional. Fiz ajustes em várias roupas e todas ficaram como novas. Super indico!",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((part) => part.length > 2)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export default function Testimonials() {
  return (
    <section className="bg-brand-red py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-gold sm:text-4xl">
          O que Dizem Nossos Clientes
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-brand-white p-8 shadow-lg">
              <div className="mb-4 flex gap-1 text-brand-gold">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="mb-6 text-gray-700 italic">&ldquo;{t.text}&rdquo;</p>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-semibold text-brand-gold">
                  {initials(t.name)}
                </div>
                <div>
                  <span className="block font-semibold text-brand-dark">{t.name}</span>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
