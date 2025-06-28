import { Raleway, Roboto, Inter } from 'next/font/google';

export const raleway = Raleway({
  weight: ['200', '300', '400', '500'],
  subsets: ['latin'],
});

export const roboto = Roboto({
  weight: ['100', '300', '400'],
  subsets: ['latin'],
});

export const inter = Inter({
  weight: ['300'],
  subsets: ['latin'],
});
