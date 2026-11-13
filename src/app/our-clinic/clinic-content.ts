// Rich, hand-written page content for individual clinic pages.
// When an entry exists here for a clinic id, /our-clinic/[id] renders the
// full content layout (RichClinicPage) instead of the generic template.

export type StepIcon = "calendar" | "ear" | "headphones" | "shield";

export interface RichClinicContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  address: {
    lines: string[];
    full: string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  hoursLabel: string;
  geo?: { latitude: number; longitude: number };
  mapsUrl: string;
  mapEmbedUrl?: string;
  images: { src: string; alt: string }[];
  services: string[];
  /** Plain-text items. Use `{brands}` as a placeholder for the linked brand list. */
  whyChoose: string[];
  steps: { title: string; text: string; icon: StepIcon }[];
  audiologist: { name: string; bio: string };
  reviews: { author: string; text: string }[];
  findUs: string;
  faqs: { question: string; answer: string }[];
  cta: { text: string; phone: string; phoneDisplay: string };
}

/** First-mention brand links (interlinking plan). */
export const brandLinks: { name: string; href: string }[] = [
  { name: "Signia", href: "/hearing-aids/signia" },
  { name: "Phonak", href: "/hearing-aids/phonak" },
  { name: "Widex", href: "/hearing-aids/widex" },
  { name: "Oticon", href: "/hearing-aids/oticon" },
  { name: "Starkey", href: "/hearing-aids/starkey" },
];

export const clinicContent: Record<string, RichClinicContent> = {
  "andheri-mumbai": {
    metaTitle: "Hearing Aid Clinic in Andheri West, Mumbai | Insono",
    metaDescription:
      "Visit Insono's hearing aid clinic in Andheri West, Lokhandwala Complex for hearing assessment, hearing aid fitting, servicing, trials and personalised hearing care.",
    h1: "Hearing Aid Clinic in Andheri West, Mumbai",
    intro:
      "Insono Hearing Solutions' Andheri West clinic is located inside Palmspring Apartment, Lokhandwala Complex, Mumbai. Opened in 2026, the clinic provides hearing assessments, hearing aid consultations, fitting, programming, servicing and follow-up support for patients in Andheri West and nearby areas including Versova, 7 Bungalows and Oshiwara.",
    address: {
      lines: [
        "Unit No. 111, Palmspring Apartment",
        "Lokhandwala Complex, Andheri West",
        "Mumbai, Maharashtra 400053",
      ],
      full: "Unit No. 111, Palmspring Apartment, Lokhandwala Complex, Andheri West, Mumbai, Maharashtra 400053",
      streetAddress:
        "Unit No. 111, Palmspring Apartment, Lokhandwala Complex, Andheri West",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400053",
    },
    hoursLabel: "Monday to Sunday, 10 AM–7 PM",
    geo: { latitude: 19.1437764, longitude: 72.8196124 },
    mapsUrl: "https://www.google.com/maps?cid=13970270986500991058",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1758933926644!2d72.81961239678957!3d19.143776400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b796e27ec457%3A0xc1e05f71ce566852!2sInsono%20Hearing%20Solutions%20Pvt.Ltd.%20Andheri%20Mumbai!5e0!3m2!1sen!2sin!4v1791372239974!5m2!1sen!2sin",
    images: [
      {
        src: "/clinics/mumbai1.jpeg",
        alt: "Reception area at Insono hearing aid clinic in Andheri West, Mumbai",
      },
      {
        src: "/clinics/mumbai2.jpeg",
        alt: "Hearing aid consultation desk with Phonak and Signia brochures at Insono Andheri West clinic",
      },
      {
        src: "/clinics/mumbai3.jpeg",
        alt: "Waiting area at hearing aid clinic in Andheri West, Lokhandwala Complex Mumbai",
      },
    ],
    services: [
      "Hearing assessment and evaluation",
      "Hearing aid consultation",
      "Hearing aid fitting and programming",
      "Hearing aid trial",
      "Hearing aid servicing and troubleshooting",
      "Follow-up adjustments and aftercare",
      "Hearing aid accessories and support",
      "Home visit support in Mumbai",
    ],
    whyChoose: [
      "Convenient hearing care location in Lokhandwala Complex, Andheri West",
      "Hearing assessment and hearing aid consultation under one roof",
      "Hearing aids from brands including {brands}",
      "Hearing aid fitting, programming and follow-up support",
      "Home visit support available in Mumbai",
      "Personalised after-sales support and hearing aid servicing",
      "Serving patients from Andheri West, Versova, 7 Bungalows and Oshiwara",
      "Insono's Andheri West clinic has been serving patients since 2026",
    ],
    steps: [
      {
        title: "Hearing Assessment",
        icon: "calendar",
        text: "Your visit begins with a hearing assessment to understand your hearing levels and identify areas where you may be experiencing difficulty.",
      },
      {
        title: "Consultation",
        icon: "ear",
        text: "The results are discussed with you to help understand your hearing needs and available hearing care options.",
      },
      {
        title: "Hearing Aid Trial",
        icon: "headphones",
        text: "If a hearing aid is recommended, you can experience how different hearing solutions perform and discuss the options suitable for your needs.",
      },
      {
        title: "Fitting & Aftercare",
        icon: "shield",
        text: "Once you select a hearing aid, it is fitted and programmed according to your hearing requirements. Follow-up support helps with adjustments, servicing and ongoing use.",
      },
    ],
    audiologist: {
      name: "Mr. Shobhit Pandey",
      bio: "Mr. Shobhit Pandey is the audiologist serving patients at Insono Hearing Solutions' Andheri West clinic. He assists patients with hearing assessments, hearing aid consultations, trials, fitting, programming and follow-up support.",
    },
    // Review text is verbatim from Google — do not edit spelling or wording.
    reviews: [
      {
        author: "Amardeep Kaur",
        text: "Your Mumbai team is great. Mr shobhit Kumar Pandey visit the house for mother test and trial. He was the best by nature and their talking sense. After sell service her cordinator Vedangi. I highly recommend INSONO.",
      },
      {
        author: "Muskan Jaiswal",
        text: "After there free home visit and everything I deside to purchase Phonak. Honestly I'm fully satisfied with the brand company and Audiologist shobhit pandey highly recommend to purchase it.",
      },
      {
        author: "Asha Lata Misra",
        text: "Response from INSONO Is quite good And Mr. PANDEY is very dedicated and responsive for any Complaints. He tries to resolve it on phone itself",
      },
    ],
    findUs:
      "Our location is convenient for patients travelling from Andheri West, Versova, 7 Bungalows and Oshiwara.",
    faqs: [
      {
        question: "Is there a hearing aid clinic near Andheri Metro Station?",
        answer:
          "Insono Hearing Solutions has a hearing care clinic in Lokhandwala Complex, Andheri West, Mumbai, providing hearing assessments, hearing aid consultations, fitting, servicing and follow-up support.",
      },
      {
        question: "Does Insono serve patients from Versova and 7 Bungalows?",
        answer:
          "Yes. The Andheri West clinic serves patients from Andheri West and nearby areas including Versova, 7 Bungalows and Oshiwara.",
      },
      {
        question: "Do I need an appointment for a hearing assessment?",
        answer:
          "Walk-ins are welcome, subject to audiologist availability. You can also contact the clinic before visiting to confirm availability.",
      },
      {
        question:
          "Does Insono provide hearing aid servicing and repairs in Andheri West?",
        answer:
          "Yes. The clinic provides hearing aid servicing, troubleshooting, programming, follow-up adjustments and after-sales support.",
      },
      {
        question: "How much does a hearing aid cost in Mumbai?",
        answer:
          "Hearing aid prices vary depending on the technology, style, features and brand selected. A hearing assessment and consultation can help identify suitable options based on your hearing requirements.",
      },
      {
        question: "How long does a hearing assessment take?",
        answer:
          "The time required depends on the type of hearing tests needed. Your audiologist can explain the assessment process and results during your visit.",
      },
      {
        question: "Which hearing aid brands are available at Insono?",
        answer:
          "Insono provides hearing aids from brands including Signia, Phonak, Widex, Oticon and Starkey, subject to availability.",
      },
      {
        question: "Does Insono provide home visits in Mumbai?",
        answer:
          "Home visit support is available in Mumbai, subject to location and availability. Contact Insono to check whether a home visit can be arranged for your area.",
      },
    ],
    cta: {
      text: "Looking for a hearing aid clinic in Andheri West, Mumbai? Visit Insono Hearing Solutions at Lokhandwala Complex for hearing assessment, hearing aid consultation, trials, fitting, servicing and follow-up support.",
      phone: "+916204260510",
      phoneDisplay: "+91 6204260510",
    },
  },
};
