import type { Metadata } from "next";
import FaqClient from "./FaqClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What types of hearing aids does Insono Hearing Solutions offer?", acceptedAnswer: { "@type": "Answer", text: "We offer a wide range of hearing aids, including behind-the-ear, in-the-ear, and completely-in-canal models, with options tailored to fit your hearing needs and lifestyle." } },
    { "@type": "Question", name: "How do I know if I need a hearing aid?", acceptedAnswer: { "@type": "Answer", text: "Our audiologists conduct thorough hearing evaluations to determine if a hearing aid is suitable for your specific hearing profile and lifestyle." } },
    { "@type": "Question", name: "Can I try a hearing aid before purchasing?", acceptedAnswer: { "@type": "Answer", text: "Yes! We offer trial periods for many of our models, so you can experience the benefits in real-life situations before making a purchase." } },
    { "@type": "Question", name: "How often should I get my hearing checked?", acceptedAnswer: { "@type": "Answer", text: "We recommend getting your hearing checked at least once a year or sooner if you notice changes in your hearing abilities." } },
    { "@type": "Question", name: "Does Insono provide aftercare and support for hearing aids?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We provide ongoing maintenance, fine-tuning, and support to ensure your hearing aids continue to work perfectly over time." } },
    { "@type": "Question", name: "What warranty options are available?", acceptedAnswer: { "@type": "Answer", text: "Our hearing aids come with manufacturer warranties, typically covering defects and repairs. We can provide detailed warranty information for each model." } },
  ],
};

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Hearing Aids & Audiology | Insono Hearing",
  description:
    "Got questions about hearing aids? Find answers about types, prices, trials, warranties, and aftercare from Insono Hearing's certified audiologists.",
  alternates: { canonical: "https://www.insonohearing.com/faq" },
  openGraph: {
    title: "Hearing Aid FAQs | Insono Hearing",
    description: "Everything you want to know about hearing aids — answered by certified audiologists.",
    url: "https://www.insonohearing.com/faq",
  },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient />
    </>
  );
}
