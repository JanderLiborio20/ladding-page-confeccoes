import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-brand-red to-brand-red-dark px-6 pt-20 text-center">
      <Image
        src="/images/logo.png"
        alt="Vitória Confecções & Serigrafia"
        width={220}
        height={220}
        priority
        className="mb-8 drop-shadow-2xl"
      />

      <h1 className="mb-4 text-4xl font-bold text-brand-gold sm:text-5xl md:text-6xl">
        Vitória Confecções & Serigrafia
      </h1>

      <p className="mb-8 text-xl font-light tracking-wide text-brand-white sm:text-2xl">
        — A Moda na Sua Medida —
      </p>

      <a
        href="#contato"
        className="rounded-full bg-brand-gold px-10 py-4 text-lg font-semibold text-brand-red-dark transition-all hover:bg-brand-gold-light hover:shadow-xl"
      >
        Solicite seu Orçamento
      </a>
    </section>
  );
}
