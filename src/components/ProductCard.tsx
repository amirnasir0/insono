// "use client";
// import Link from "next/link";
// import Image from "next/image";

// import { useState } from "react";
// import { Eye,MessageCircle  } from "lucide-react";


// interface ProductCardProps {
//   title: string;
//   imageUrl: string;
//   slug: string;
// }

// export default function ProductCard({
//   title,
//   imageUrl,
//   slug,
// }: ProductCardProps) {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div className="w-full max-w-sm rounded-2xl shadow-lg overflow-hidden bg-white transition hover:scale-105 hover:shadow-xl flex flex-col">
//         {/* Image section with gradient */}
//         <div className="relative h-48 flex items-center justify-center bg-gradient-to-r from-[#F4F9FF] to-[#184A99]">
//           <Link href={`/product/${slug}`}>
//             <Image
//               src={imageUrl}
//               alt={title}
//               width={220}
//               height={220}
//               className="object-contain drop-shadow-xl cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Content section */}
//         <div className="p-4 flex flex-col flex-1">
//           {/* Product Name */}
//           {title && (
//             <h3 className="text-lg sm:text-base font-semibold text-gray-900 text-center">
//               <Link href={`/product/${slug}`} className="hover:text-[#184A99]">
//                 {title}
//               </Link>
//             </h3>
//           )}

//           {/* Spacer to push buttons down */}
//           <div className="flex-1" />

//           {/* Buttons row */}
//           <div className="flex w-full justify-center items-stretch mt-2 gap-2">
//             {/* WhatsApp button (20%) */}
//             <a
//   href={`https://wa.me/916206372640?text=Hello, I am interested in ${title}`}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="basis-[20%] flex items-center justify-center bg-green-500 text-white text-sm font-medium py-1 rounded-md hover:bg-green-600 transition"
// >
//   <MessageCircle className="w-5 h-5" />
// </a>

//             {/* Check Price button (80%) */}
//             <a
//   href="/price-download?utm_source=website&utm_medium=product_cards&utm_campaign=pricedownload"
//   className="inline-flex items-center justify-center gap-2 bg-[#184A99] text-white text-sm sm:text-base font-semibold px-5 py-2 rounded-md shadow hover:bg-[#0f3a7e] hover:scale-[1.02] transition"
// >
//   <Eye className="w-4 h-4" />
//   Check Price
// </a>
//           </div>
//         </div>
//       </div>

     
//     </>
//   );
// }


"use client";
import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Poppins } from "next/font/google";

// Import Google Font (Poppins)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"], // medium & semibold for flexibility
});

interface ProductCardProps {
  title: string;
  imageUrl: string;
  slug: string;
}

export default function ProductCard({
  title,
  imageUrl,
  slug,
}: ProductCardProps) {
  return (
    <div className="w-full max-w-sm rounded-xl shadow-md bg-white overflow-hidden border border-gray-200 flex flex-col">
      {/* Product Image */}
      <div className="flex items-center justify-center bg-white p-6">
        <Link href={`/product/${slug}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={220}
            height={220}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>

      {/* Content */}
      <div className="px-4 pb-5 flex flex-col flex-1">
        {/* Title */}
        <h3
          className={`${poppins.className} text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 text-center`}
        >
          <Link href={`/product/${slug}`} className="hover:text-[#184A99]">
            {title}
          </Link>
        </h3>

        {/* Rating */}
        <div className="flex justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Features */}
        <ul className="text-gray-600 text-sm space-y-1 mb-5 text-center sm:text-left">
          <li>Easy smartphone control via app</li>
          <li>Nearly invisible design</li>
          
        </ul>

        {/* CTA */}
        <a
          href="/price-download?utm_source=website&utm_medium=product_cards&utm_campaign=pricedownload"
          className="block w-full text-center bg-[#184A99] text-white font-medium text-sm sm:text-base py-2.5 rounded-md hover:bg-[#0f3a7e] transition"
        >
          Get the Best Price
        </a>
      </div>
    </div>
  );
}
