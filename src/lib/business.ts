/**
 * Dados reais do negócio, em um lugar só.
 * Coordenadas e nome confirmados pelo perfil no Google Maps
 * (CID 0x926c0f9c555f7e0f:0x47beb950ef5831a4).
 */
export const business = {
  name: "Vitória Confecções & Serigrafia",
  tagline: "A Moda na Sua Medida",

  address: {
    street: "Rua Xavier Marques, 642 A",
    district: "Compensa",
    city: "Manaus",
    state: "AM",
    zip: "69035-280",
    get full() {
      return `${this.street} - ${this.district}, ${this.city} - ${this.state}, ${this.zip}`;
    },
  },

  coords: { lat: -3.107788, lng: -60.0619974 },

  phone: {
    display: "(92) 99222-0997",
    tel: "+5592992220997",
    whatsapp: "5592992220997",
  },

  email: "Vitoriaconfec2015@gmail.com",
  instagram: "https://www.instagram.com/vitoriaconfec/",
  instagramHandle: "@vitoriaconfec",

  /** Link curto do perfil no Google Maps, para "como chegar". */
  mapsUrl: "https://maps.app.goo.gl/KspYfPr9K2JG3Lcp8",

  hours: [
    { label: "Segunda a sexta", time: "08:30 às 18:00" },
    { label: "Sábado", time: "08:30 às 18:00" },
    { label: "Domingo", time: "Fechado", closed: true },
  ],
} as const;

/** Mensagem pré-preenchida ao abrir a conversa no WhatsApp. */
export const whatsappUrl = `https://wa.me/${business.phone.whatsapp}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de solicitar um orçamento."
)}`;

/** Embed do Google Maps — não exige chave de API. */
export const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${business.name}, ${business.address.full}`
)}&z=17&hl=pt-BR&output=embed`;

/**
 * Street View da fachada, servido pelo próprio Google (nada é copiado).
 * O segundo número de `cbp` é o ângulo da câmera em graus: 0 = norte,
 * 90 = leste, 180 = sul, 270 = oeste. Ajustar se a fachada ficar fora de quadro.
 */
const STREET_VIEW_HEADING = 0;

export const streetViewEmbedUrl =
  `https://maps.google.com/maps?q=&layer=c` +
  `&cbll=${business.coords.lat},${business.coords.lng}` +
  `&cbp=11,${STREET_VIEW_HEADING},0,0,0&hl=pt-BR&output=svembed`;

/**
 * Dados estruturados para o Google entender que isto é uma loja física
 * (schema.org/ClothingStore). Renderizado como <script type="application/ld+json">.
 */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: business.name,
  description: `Confecção sob medida, serigrafia, uniformes e ajustes em ${business.address.city}.`,
  slogan: business.tagline,
  telephone: business.phone.tel,
  email: business.email,
  image: "/images/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: `${business.address.district}, ${business.address.city}`,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.coords.lat,
    longitude: business.coords.lng,
  },
  hasMap: business.mapsUrl,
  sameAs: [business.instagram],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:30",
      closes: "18:00",
    },
  ],
};
