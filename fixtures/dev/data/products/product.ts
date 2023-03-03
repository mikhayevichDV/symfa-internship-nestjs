import { DeepPartial } from 'typeorm';

import { ProductEntity } from '@entities/products';
import { Size } from '@models/enum';

export const PRODUCT_FIXTURES: DeepPartial<ProductEntity>[] = [
  {
    availableSizes: [Size.X, Size.L, Size.XL, Size.XXL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '14/15 s/nº',
    id: 'dd47839a-b8f6-11ed-afa1-0242ac120002',
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    style: 'White T-shirt',
    title: 'Cropped Stay Groovy off white',
    imageCart: { id: '48866931-544d-4f54-9825-1fdee26d4225' },
  },
  {
    availableSizes: [Size.X, Size.ML, Size.L],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '',
    id: 'dd4786a6-b8f6-11ed-afa1-0242ac120002',
    installments: 3,
    isFreeShipping: true,
    price: 13.25,
    style: 'Wine',
    title: 'Basic Cactus White T-shirt',
    imageCart: { id: 'f066c517-7434-4fe5-b215-d0fdd65361e3' },
  },
  {
    availableSizes: [Size.XL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '14/15 s/nº - Jogador',
    id: 'dd478804-b8f6-11ed-afa1-0242ac120002',
    installments: 12,
    isFreeShipping: false,
    price: 25.9,
    style: 'Tony Hawk',
    title: 'Skater Black Sweatshirt',
    imageCart: { id: 'a7b5e50f-dcb4-46e1-9b3c-d12ddd63cae5' },
  },
  {
    availableSizes: [Size.M, Size.ML],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '',
    id: 'dd478944-b8f6-11ed-afa1-0242ac120002',
    installments: 5,
    isFreeShipping: true,
    price: 29.45,
    style: 'Tule',
    title: 'Black Tule Oversized',
    imageCart: { id: 'e2faf70b-7414-42cb-9690-93568b4fb090' },
  },
  {
    availableSizes: [Size.S, Size.XS],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '4 MSL',
    id: 'dd478a98-b8f6-11ed-afa1-0242ac120002',
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    style: 'Really Cool T-shirt',
    title: 'Black Batman T-shirt',
    imageCart: { id: '8de7e03b-b1c4-42e9-9965-42f89a43b80a' },
  },
  {
    availableSizes: [Size.X, Size.L, Size.XL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: 'GPX Poly 1',
    id: 'dd478bd8-b8f6-11ed-afa1-0242ac120002',
    installments: 3,
    isFreeShipping: true,
    price: 9,
    style: 'Mark Zuck have 365 of this one',
    title: 'Blue T-Shirt',
    imageCart: { id: '8997b295-4bc8-4c3d-8c60-ea00dd1217bf' },
  },
  {
    availableSizes: [Size.X, Size.L, Size.XL, Size.XXL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: 'Treino 2014',
    id: 'dd478d18-b8f6-11ed-afa1-0242ac120002',
    installments: 5,
    isFreeShipping: true,
    price: 14,
    style: '',
    title: 'Loose Black T-shirt',
    imageCart: { id: '20719840-a130-42f7-9888-2727f4a5541b' },
  },
  {
    availableSizes: [Size.X, Size.L, Size.XL, Size.XXL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '14/15 s/nº',
    id: 'dd47916e-b8f6-11ed-afa1-0242ac120002',
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    style: 'White T-shirt',
    title: 'Ringer Hall Pass',
    imageCart: { id: '2c47ee8b-5356-45dc-b2b7-75568dc1fa7c' },
  },
  {
    availableSizes: [Size.X, Size.L],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '14/15 s/nº',
    id: 'dd4792cc-b8f6-11ed-afa1-0242ac120002',
    installments: 7,
    isFreeShipping: true,
    price: 14.9,
    style: 'You will like this one',
    title: 'Grey T-shirt',
    imageCart: { id: '79cdd40a-b63e-4832-8272-6be4b943af8e' },
  },
  {
    availableSizes: [Size.X, Size.L],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '2014 s/nº',
    id: 'dd479420-b8f6-11ed-afa1-0242ac120002',
    installments: 7,
    isFreeShipping: true,
    price: 14.9,
    style: 'Adidas originals',
    title: 'Black T-shirt with white stripes',
    imageCart: { id: '4afb3eee-e88c-43a2-80dc-215839a6562e' },
  },
  {
    availableSizes: [Size.X, Size.L, Size.XL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '14/15 + Camiseta 1º Mundial',
    id: 'dd479556-b8f6-11ed-afa1-0242ac120002',
    installments: 9,
    isFreeShipping: false,
    price: 10.9,
    style: 'Cowabunga!',
    title: 'Turtles Ninja T-shirt',
    imageCart: { id: '63481442-fe03-426d-9aa1-781923fa79e7' },
  },
  {
    availableSizes: [Size.XL, Size.XXL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: 'T-shirt 13/14',
    id: 'dd4798bc-b8f6-11ed-afa1-0242ac120002',
    installments: 0,
    isFreeShipping: true,
    price: 49.9,
    style: 'When you wish well',
    title: 'Slim black T-shirt',
    imageCart: { id: 'f973c5c8-935c-42c7-a586-72d8ad41fd1c' },
  },
  {
    availableSizes: [Size.S],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '1977 Infantil',
    id: 'dd479a2e-b8f6-11ed-afa1-0242ac120002',
    installments: 4,
    isFreeShipping: true,
    price: 22.5,
    style: 'Very comfy',
    title: 'Blue Sweatshirt',
    imageCart: { id: '30ac0673-5c97-44a6-9369-1661995c01b1' },
  },
  {
    availableSizes: [Size.XL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '',
    id: 'dd479ba0-b8f6-11ed-afa1-0242ac120002',
    installments: 4,
    isFreeShipping: false,
    price: 18.7,
    style: 'Girl the future is all your',
    title: 'White T-shirt Gucci',
    imageCart: { id: 'a0b7bc4a-2705-47bd-b4b0-210e98f0b1ac' },
  },
  {
    availableSizes: [Size.L, Size.XL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '',
    id: 'dd479d26-b8f6-11ed-afa1-0242ac120002',
    installments: 5,
    isFreeShipping: true,
    price: 134.9,
    style: '',
    title: 'Tropical Wine T-shirt',
    imageCart: { id: '95bdbcfc-e710-41d7-b777-4cf018a6a164' },
  },
  {
    availableSizes: [Size.L, Size.XL],
    currencyFormat: '$',
    currencyId: 'USD',
    description: '',
    id: 'dd47a19a-b8f6-11ed-afa1-0242ac120002',
    installments: 9,
    isFreeShipping: true,
    price: 49,
    style: '',
    title: 'Marine Blue T-shirt',
    imageCart: { id: 'c2e9bdce-497a-44ac-aa4a-443fab611c6c' },
  },
];
