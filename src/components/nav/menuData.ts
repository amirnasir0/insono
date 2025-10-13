// app/components/nav/menuData.ts
export type MenuLink = { label: string; href: string };
export type MenuSection = { label: string; items: MenuLink[] };

export const topLinks: MenuLink[] = [
  { label: "Hearing Aid Price", href: "/hearing-aid-price" },
];

export const sections: MenuSection[] = [
  {
    label: "Hearing Aids by Brand",
    items: [
      { label: "Signia Hearing Aids", href: "/hearing-aids/signia" },
      { label: "Phonak Hearing Aids", href: "/hearing-aids/phonak" },
      { label: "Widex Hearing Aids", href: "/hearing-aids/widex" },
      { label: "Oticon Hearing Aids", href: "/hearing-aids/oticon" },
    ],
  },
  {
    label: "Hearing Hids by Shape",
    items: [
      { label: "IIC Hearing Aids", href: "/hearing-aids/iic" },
      { label: "CIC Hearing Aids", href: "/hearing-aids/cic" },
      { label: "RIC Hearing Aids", href: "/hearing-aids/ric" },
      { label: "BTE Hearing Aids", href: "/hearing-aids/bte" },
      { label: "ITE Hearing Aids", href: "/hearing-aids/ite" },
      { label: "ITC Hearing Aids", href: "/hearing-aids/itc" },
    ],
  },
  {
    label: "Hearing Aids by Features",
    items: [
      { label: "Bluetooth", href: "/hearing-aids/bluetooth" },
      { label: "Invisible", href: "/hearing-aids/invisible" },
      { label: "Rechargeable", href: "/hearing-aids/rechargeable" },
    ],
  },
];
