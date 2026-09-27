import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/business";

export default function CTASection() {
  return (
    <section id="contato" className="bg-brand-gold py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold text-brand-red-dark sm:text-4xl">
          Pronto para vestir qualidade?
        </h2>
        <p className="mb-10 text-lg text-brand-red-dark/80">
          Entre em contato conosco e solicite seu orçamento sem compromisso.
          Atendemos com dedicação e carinho em cada detalhe.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full bg-brand-red px-10 py-4 text-lg font-semibold text-brand-white transition-all hover:bg-brand-red-dark hover:shadow-xl"
        >
          <MessageCircle size={24} />
          Fale pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
