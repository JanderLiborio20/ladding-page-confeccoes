import Image from "next/image";

const works = [
  {
    src: "/images/galeria/vestido-vermelho-renda.jpg",
    alt: "Vestido vermelho de festa com renda e mangas em tule",
  },
  {
    src: "/images/galeria/vestido-vermelho-renda-costas.jpg",
    alt: "Costas do vestido vermelho com detalhes em renda aplicada",
  },
  {
    src: "/images/galeria/vestido-debutante-amarelo.jpg",
    alt: "Vestido de debutante amarelo com saia ampla e flores",
  },
  {
    src: "/images/galeria/vestido-natalino.jpg",
    alt: "Vestido natalino vermelho e branco com capa e cinto",
  },
  {
    src: "/images/galeria/conjunto-rose.jpg",
    alt: "Conjunto rosé de camisa cropped e calça de alfaiataria",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-red sm:text-4xl">
          Nossos Trabalhos
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <div
              key={work.src}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-placeholder-bg shadow-sm"
            >
              <Image
                src={work.src}
                alt={work.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
