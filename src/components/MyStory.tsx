import { business, streetViewEmbedUrl } from "@/lib/business";

const milestones = [
  {
    year: "2005",
    text: "O sonho começou com uma máquina de costura na sala de casa e muita vontade de criar.",
  },
  {
    year: "2010",
    text: "Abrimos nosso primeiro ateliê e começamos a atender empresas com uniformes personalizados.",
  },
  {
    year: "2016",
    text: "Expandimos para a serigrafia, trazendo estampas de alta qualidade para nossos clientes.",
  },
  {
    year: "Hoje",
    text: "Somos referência na região, unindo tradição artesanal com técnicas modernas de confecção.",
  },
];

export default function MyStory() {
  return (
    <section id="historia" className="bg-brand-red py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-brand-gold sm:text-4xl">
          Minha História
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-brand-white/80">
          Uma jornada de paixão pela costura e dedicação a cada detalhe.
        </p>

        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-start">
          {/* Fachada via Street View — imagem servida pelo Google, com o crédito dele.
              Trocar por uma foto da Vitória no ateliê quando houver uma. */}
          <div className="w-full max-w-sm lg:sticky lg:top-28">
            <div className="h-80 overflow-hidden rounded-2xl shadow-xl ring-1 ring-brand-gold/30">
              <iframe
                src={streetViewEmbedUrl}
                title={`Fachada da ${business.name} na ${business.address.street}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-center text-sm text-brand-white/60">
              Nosso ateliê na {business.address.street}, {business.address.district}
            </p>
          </div>

          {/* Timeline */}
          <div className="flex-1 space-y-0">
            {milestones.map((item, i) => (
              <div key={item.year} className="relative flex gap-6 pb-10 last:pb-0">
                {/* Linha vertical */}
                {i < milestones.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-brand-gold/30" />
                )}

                {/* Ponto */}
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-gold bg-brand-red-dark">
                  <span className="text-xs font-bold text-brand-gold">{i + 1}</span>
                </div>

                {/* Conteúdo */}
                <div>
                  <span className="mb-1 inline-block rounded-full bg-brand-gold/20 px-3 py-0.5 text-sm font-semibold text-brand-gold">
                    {item.year}
                  </span>
                  <p className="mt-2 leading-relaxed text-brand-white/90">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
