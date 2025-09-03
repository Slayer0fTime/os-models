export const contactInfo = {
  phone: '+380998887766',
  email: 'onestepmodels@example.com',
  workingHours: 'Пн - Нед: 10.00 - 18.00',
  instagram: 'https://www.instagram.com',
  tiktok: 'https://www.tiktok.com',
};

interface Location {
  city: string;
  street: string;
  metro: string;
  map: {
    href: string;
    image: string;
  };
}

export const locations: Location[] = [
  {
    city: 'Київ',
    street: 'Васильківська вул. 34',
    metro: 'станція м."Васильківська"',
    map: {
      href: 'https://www.google.com/maps/place/Vasylkivska+St,+34,+Kyiv,+02000/@50.3935707,30.4825893,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4c8daee2e02bd:0x309b0427b63c50c6!8m2!3d50.3935673!4d30.4851696!16s%2Fg%2F11c43wgmfb?entry=ttu&g_ep=EgoyMDI1MDUyNy4wIKXMDSoASAFQAw%3D%3D',
      image: '/main/location.png',
    },
  },
  {
    city: 'Одеса',
    street: 'Lorem ipsum dolor sit amet.',
    metro: 'Lorem ipsum dolor sit.',
    map: {
      href: 'https://www.google.com/maps/place/Vasylkivska+St,+34,+Kyiv,+02000/@50.3935707,30.4825893,17z/data=!3m1!4b1!4m6!3m5!1s0x40d4c8daee2e02bd:0x309b0427b63c50c6!8m2!3d50.3935673!4d30.4851696!16s%2Fg%2F11c43wgmfb',
      image: '/main/location2.png',
    },
  },
  {
    city: 'Харків',
    street: 'Lorem, ipsum dolor.',
    metro: 'станція м."Університет"',
    map: {
      href: 'https://www.google.com/maps/place/Dry+fountain/@50.0059515,36.2299055,17.67z/data=!4m6!3m5!1s0x4127a1150aa7c385:0x5043df85a35a946b!8m2!3d50.0057182!4d36.2291909!16s%2Fg%2F11hj_5wh52',
      image: '/main/location3.png',
    },
  },
];
