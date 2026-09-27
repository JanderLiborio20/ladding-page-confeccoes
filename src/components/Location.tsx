import { MapPin, Phone, Mail, Navigation, Clock } from "lucide-react";
import { business, mapEmbedUrl, whatsappUrl } from "@/lib/business";

export default function Location() {
  const { address, phone, email } = business;

  return (
    <section id="localizacao" className="bg-brand-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-3xl font-bold text-brand-red sm:text-4xl">
          Onde Nos Encontrar
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-lg text-gray-600">
          Venha nos visitar no ateliê ou chame no WhatsApp — atendemos toda Manaus.
        </p>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin size={22} className="mt-1 shrink-0 text-brand-red" />
              <div>
                <h3 className="font-semibold text-brand-dark">Endereço</h3>
                <p className="mt-1 leading-relaxed text-gray-600">
                  {address.street}
                  <br />
                  {address.district}, {address.city} - {address.state}
                  <br />
                  CEP {address.zip}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone size={22} className="mt-1 shrink-0 text-brand-red" />
              <div>
                <h3 className="font-semibold text-brand-dark">Telefone</h3>
                <a
                  href={`tel:${phone.tel}`}
                  className="mt-1 inline-block text-gray-600 transition-colors hover:text-brand-red"
                >
                  {phone.display}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail size={22} className="mt-1 shrink-0 text-brand-red" />
              <div>
                <h3 className="font-semibold text-brand-dark">E-mail</h3>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 inline-block break-all text-gray-600 transition-colors hover:text-brand-red"
                >
                  {email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock size={22} className="mt-1 shrink-0 text-brand-red" />
              <div>
                <h3 className="font-semibold text-brand-dark">Horário de atendimento</h3>
                <dl className="mt-1 space-y-1 text-gray-600">
                  {business.hours.map((h) => (
                    <div key={h.label} className="flex gap-2">
                      <dt className="min-w-[8.5rem]">{h.label}</dt>
                      <dd className={"closed" in h && h.closed ? "text-gray-400" : "font-medium"}>
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-brand-white transition-all hover:bg-brand-red-dark hover:shadow-lg"
              >
                <Navigation size={18} />
                Como chegar
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-red px-6 py-3 text-sm font-semibold text-brand-red transition-all hover:bg-brand-red hover:text-brand-white"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>

          <div className="h-80 overflow-hidden rounded-2xl shadow-lg lg:h-full lg:min-h-[420px]">
            <iframe
              src={mapEmbedUrl}
              title={`Mapa com a localização de ${business.name}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
