export const ageGroups = [
  {
    name: 'kids',
    range: '5 - 8',
    images: ['/models/kids1.jpg', '/models/kids2.jpg', '/models/kids1.jpg'],
  },
  {
    name: 'juniors',
    range: '9 - 12',
    images: ['/models/kids1.jpg', '/models/kids1.jpg', '/models/kids1.jpg'],
  },
  {
    name: 'teens',
    range: '13 - 17',
    images: ['/models/kids2.jpg', '/models/kids2.jpg', '/models/kids2.jpg'],
  },
];

export interface Model {
  id: string;
  name: string;
  age: number;
  height: number;
  chest: number;
  waist: number;
  hips: number;
  image: string;
  gallery: string[];
  gender: 'male' | 'female';
}

export interface ModelsByAgeGroup {
  kids: Model[];
  juniors: Model[];
  teens: Model[];
}

export const modelsByAgeGroup: ModelsByAgeGroup = {
  kids: [
    {
      id: '1',
      name: 'Софія Михайлевська',
      age: 6,
      height: 142,
      chest: 44,
      waist: 39,
      hips: 45,
      image: '/models/model1.png',
      gallery: [
        '/models/model1.png',
        '/models/model1-2.png',
        '/models/model1.png',
        '/models/model1-2.png',
        '/models/model1.png',
        '/models/model1-2.png',
        '/models/model1.png',
        '/models/model1-2.png',
      ],
      gender: 'female',
    },
    {
      id: '2',
      name: 'Олександр Іванов',
      age: 8,
      height: 145,
      chest: 46,
      waist: 40,
      hips: 47,
      image: '/models/model3.jpg',
      gallery: [
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
      ],
      gender: 'male',
    },
    {
      id: '3',
      name: 'Вікторія Іванівна ',
      age: 7,
      height: 142,
      chest: 44,
      waist: 39,
      hips: 45,
      image: '/models/model2.png',
      gallery: [
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
      ],
      gender: 'female',
    },
    {
      id: '4',
      name: 'FirstName LastName',
      age: 6,
      height: 100,
      chest: 100,
      waist: 100,
      hips: 100,
      image: '/models/model4.png',
      gallery: [
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
      ],
      gender: 'female',
    },
    {
      id: '5',
      name: 'Софія Михайлевська',
      age: 6,
      height: 142,
      chest: 44,
      waist: 39,
      hips: 45,
      image: '/models/model1.png',
      gallery: [
        '/models/model1.png',
        '/models/model1-2.png',
        '/models/model1.png',
        '/models/model1-2.png',
        '/models/model1.png',
        '/models/model1-2.png',
        '/models/model1.png',
        '/models/model1-2.png',
      ],
      gender: 'female',
    },
    {
      id: '6',
      name: 'Олександр Іванов',
      age: 8,
      height: 145,
      chest: 46,
      waist: 40,
      hips: 47,
      image: '/models/model3.jpg',
      gallery: [
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
      ],
      gender: 'male',
    },
    {
      id: '7',
      name: 'Вікторія Іванівна ',
      age: 7,
      height: 142,
      chest: 44,
      waist: 39,
      hips: 45,
      image: '/models/model2.png',
      gallery: [
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
        '/models/model2.png',
      ],
      gender: 'female',
    },
    {
      id: '8',
      name: 'FirstName LastName',
      age: 6,
      height: 100,
      chest: 100,
      waist: 100,
      hips: 100,
      image: '/models/model4.png',
      gallery: [
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
        '/models/model4.png',
      ],
      gender: 'female',
    },
  ],
  juniors: [
    {
      id: '10',
      name: 'Марія Петренко',
      age: 11,
      height: 150,
      chest: 50,
      waist: 45,
      hips: 55,
      image: '/models/model1.png',
      gallery: [
        '/models/model1.png',
        '/models/model1.png',
        '/models/model1.png',
        '/models/model1.png',
        '/models/model1.png',
        '/models/model1.png',
        '/models/model1.png',
        '/models/model1.png',
      ],
      gender: 'female',
    },
  ],
  teens: [
    {
      id: '20',
      name: 'Дмитро Шевченко',
      age: 13,
      height: 160,
      chest: 55,
      waist: 48,
      hips: 60,
      image: '/models/model3.jpg',
      gallery: [
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
        '/models/model3.jpg',
      ],
      gender: 'male',
    },
  ],
};

export function getModelById(ageGroup: keyof ModelsByAgeGroup, id: string) {
  const models = modelsByAgeGroup[ageGroup];
  return models?.find((model) => model.id === id) || null;
}
