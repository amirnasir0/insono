export default function LogoSection() {
  const logos = [
    "/brands/signia.svg",
    "/brands/widex.svg",
    "/brands/phonaklogo.svg",
    "/brands/oticon.svg",
    "/brands/resound.svg",
    
    // add more logos here
  ];

  return (
    <section className="py-5 ">
      <div className="container mx-auto px-4">
        

        {/* Scrollable wrapper */}
        <div className="flex gap-8 overflow-x-auto no-scrollbar py-4">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Logo ${i}`}
                className="h-6 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
