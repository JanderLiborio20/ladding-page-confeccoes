import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="bg-brand-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-brand-red sm:text-4xl">
          Sobre Nós
        </h2>

        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1 space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              A <strong className="text-brand-red">Vitória Confecções & Serigrafia</strong> é
              referência em confecção sob medida e serigrafia de alta qualidade. Com anos de
              experiência no mercado, entregamos peças que combinam estilo, conforto e
              durabilidade.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Nosso compromisso é oferecer a moda na sua medida — cada peça é produzida com
              atenção aos detalhes e materiais de primeira linha, garantindo a satisfação de
              cada cliente.
            </p>
          </div>

          <div className="relative h-72 w-full max-w-md overflow-hidden rounded-2xl bg-placeholder-bg shadow-sm md:h-80">
            <Image
              src="/images/galeria/vestido-debutante-amarelo.jpg"
              alt="Cliente usando vestido de debutante amarelo feito sob medida"
              fill
              sizes="(min-width: 768px) 28rem, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
