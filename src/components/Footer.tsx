import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-16 text-brand-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Logo e descrição */}
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            alt="Vitória Confecções"
            width={64}
            height={64}
            className="rounded"
          />
          <p className="text-sm leading-relaxed text-gray-400">
            A Moda na Sua Medida. Qualidade e tradição em cada peça.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Navegação
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#sobre" className="transition-colors hover:text-brand-gold">Sobre</a></li>
            <li><a href="#servicos" className="transition-colors hover:text-brand-gold">Serviços</a></li>
            <li><a href="#galeria" className="transition-colors hover:text-brand-gold">Galeria</a></li>
            <li><a href="#localizacao" className="transition-colors hover:text-brand-gold">Localização</a></li>
            <li><a href="#contato" className="transition-colors hover:text-brand-gold">Contato</a></li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Contato
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-brand-gold" />
              <a href={`tel:${business.phone.tel}`} className="transition-colors hover:text-brand-gold">
                {business.phone.display}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-brand-gold" />
              <a href={`mailto:${business.email}`} className="break-all transition-colors hover:text-brand-gold">
                {business.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-brand-gold" />
              <span>
                {business.address.street}
                <br />
                {business.address.district}, {business.address.city} - {business.address.state}
              </span>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-gold">
            Redes Sociais
          </h3>
          <div className="flex gap-4">
            <a
              href={business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Vitória Confecções"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-white/10 transition-colors hover:bg-brand-gold hover:text-brand-red-dark"
            >
              {/* lucide-react v1 nao traz icones de marca; glifo inline */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-gray-800 px-6 pt-6 text-center text-xs text-gray-500">
        &copy; 2026 Vitória Confecções & Serigrafia. Todos os direitos reservados.
      </div>
    </footer>
  );
}
