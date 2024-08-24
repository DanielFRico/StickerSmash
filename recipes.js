
export const recipes = [
  recipe1,
  recipe2,
  recipe3,
  recipe4,
  recipe5,
  recipe6,
  recipe7,
  recipe8,
  recipe9,
  recipe10
];
const authorR1 = { name: "Pepito", picture: "pepito.jpg" };
const ingredientsR1 = [
  { images: ["leche1.jpg", "leche2.jpg"], description: "3 tipos de leche" },
  { images: ["bizcocho.jpg"], description: "Bizcocho esponjoso" }
];
const stepsR1 = [
  { image: "paso1.jpg", description: "Preparar el bizcocho" },
  { image: "paso2.jpg", description: "Mezclar las tres leches" },
  { image: "paso3.jpg", description: "Bañar el bizcocho con la mezcla" }
];

const authorR2 = { name: "María", picture: "maria.jpg" };
const ingredientsR2 = [
  { images: ["mascarpone.jpg", "cafe.jpg"], description: "Queso mascarpone y café" },
  { images: ["bizcochos.jpg"], description: "Bizcochos de soletilla" }
];
const stepsR2 = [
  { image: "paso1_tiramisu.jpg", description: "Preparar el café" },
  { image: "paso2_tiramisu.jpg", description: "Montar la crema de mascarpone" },
  { image: "paso3_tiramisu.jpg", description: "Montar capas de bizcocho y crema" }
];

const authorR3 = { name: "Juan", picture: "juan.jpg" };
const ingredientsR3 = [
  { images: ["manzanas.jpg", "canela.jpg"], description: "Manzanas y canela" },
  { images: ["masa.jpg"], description: "Masa para tarta" }
];
const stepsR3 = [
  { image: "paso1_manzana.jpg", description: "Preparar la masa" },
  { image: "paso2_manzana.jpg", description: "Cortar y condimentar las manzanas" },
  { image: "paso3_manzana.jpg", description: "Hornear la tarta" }
];

const authorR4 = { name: "Ana", picture: "ana.jpg" };
const ingredientsR4 = [
  { images: ["chocolate.jpg", "crema.jpg"], description: "Chocolate y crema" },
  { images: ["huevos.jpg"], description: "Huevos" }
];
const stepsR4 = [
  { image: "paso1_mousse.jpg", description: "Derretir el chocolate" },
  { image: "paso2_mousse.jpg", description: "Montar la crema" },
  { image: "paso3_mousse.jpg", description: "Mezclar y refrigerar" }
];

const authorR5 = { name: "Carlos", picture: "carlos.jpg" };
const ingredientsR5 = [
  { images: ["fresas.jpg", "crema.jpg"], description: "Fresas y crema" },
  { images: ["bizcocho.jpg"], description: "Bizcocho" }
];
const stepsR5 = [
  { image: "paso1_fresas.jpg", description: "Preparar el bizcocho" },
  { image: "paso2_fresas.jpg", description: "Montar la crema" },
  { image: "paso3_fresas.jpg", description: "Decorar con fresas" }
];

const authorR6 = { name: "Lucía", picture: "lucia.jpg" };
const ingredientsR6 = [
  { images: ["limon.jpg", "huevos.jpg"], description: "Limones y huevos" },
  { images: ["galletas.jpg"], description: "Galletas" }
];
const stepsR6 = [
  { image: "paso1_limon.jpg", description: "Preparar la base de galleta" },
  { image: "paso2_limon.jpg", description: "Hacer la crema de limón" },
  { image: "paso3_limon.jpg", description: "Hornear y refrigerar" }
];

const authorR7 = { name: "Diego", picture: "diego.jpg" };
const ingredientsR7 = [
  { images: ["platano.jpg", "caramelo.jpg"], description: "Plátanos y caramelo" },
  { images: ["crema.jpg"], description: "Crema" }
];
const stepsR7 = [
  { image: "paso1_banoffee.jpg", description: "Hacer la base de galleta" },
  { image: "paso2_banoffee.jpg", description: "Preparar el caramelo" },
  { image: "paso3_banoffee.jpg", description: "Montar con plátanos y crema" }
];

const authorR8 = { name: "Sofía", picture: "sofia.jpg" };
const ingredientsR8 = [
  { images: ["nueces.jpg", "miel.jpg"], description: "Nueces y miel" },
  { images: ["masa.jpg"], description: "Masa para tarta" }
];
const stepsR8 = [
  { image: "paso1_nueces.jpg", description: "Preparar la masa" },
  { image: "paso2_nueces.jpg", description: "Hacer el relleno de nueces" },
  { image: "paso3_nueces.jpg", description: "Hornear la tarta" }
];

const authorR9 = { name: "Roberto", picture: "roberto.jpg" };
const ingredientsR9 = [
  { images: ["queso.jpg", "frutos.jpg"], description: "Queso crema y frutos rojos" },
  { images: ["galletas.jpg"], description: "Galletas" }
];
const stepsR9 = [
  { image: "paso1_cheesecake.jpg", description: "Hacer la base de galleta" },
  { image: "paso2_cheesecake.jpg", description: "Preparar la mezcla de queso" },
  { image: "paso3_cheesecake.jpg", description: "Hornear y decorar con frutos" }
];

const authorR10 = { name: "Elena", picture: "elena.jpg" };
const ingredientsR10 = [
  { images: ["chocolate.jpg", "nata.jpg"], description: "Chocolate y nata" },
  { images: ["bizcocho.jpg"], description: "Bizcocho de chocolate" }
];
const stepsR10 = [
  { image: "paso1_selva.jpg", description: "Preparar el bizcocho de chocolate" },
  { image: "paso2_selva.jpg", description: "Hacer la crema de chocolate" },
  { image: "paso3_selva.jpg", description: "Montar y decorar la tarta" }
];

const recipe1 = {
  name: "Tres leches",
  images: ["tresleches1.jpg", "tresleches2.jpg"],
  ingredients: ingredientsR1,
  stars: 4.5,
  author: authorR1,
  steps: stepsR1
};

const recipe2 = {
  name: "Tiramisú",
  images: ["tiramisu1.jpg", "tiramisu2.jpg"],
  ingredients: ingredientsR2,
  stars: 4.8,
  author: authorR2,
  steps: stepsR2
};

const recipe3 = {
  name: "Tarta de manzana",
  images: ["manzana1.jpg", "manzana2.jpg"],
  ingredients: ingredientsR3,
  stars: 4.2,
  author: authorR3,
  steps: stepsR3
};

const recipe4 = {
  name: "Mousse de chocolate",
  images: ["mousse1.jpg", "mousse2.jpg"],
  ingredients: ingredientsR4,
  stars: 4.6,
  author: authorR4,
  steps: stepsR4
};

const recipe5 = {
  name: "Pastel de fresas",
  images: ["fresas1.jpg", "fresas2.jpg"],
  ingredients: ingredientsR5,
  stars: 4.4,
  author: authorR5,
  steps: stepsR5
};

const recipe6 = {
  name: "Tarta de limón",
  images: ["limon1.jpg", "limon2.jpg"],
  ingredients: ingredientsR6,
  stars: 4.3,
  author: authorR6,
  steps: stepsR6
};

const recipe7 = {
  name: "Banoffee",
  images: ["banoffee1.jpg", "banoffee2.jpg"],
  ingredients: ingredientsR7,
  stars: 4.7,
  author: authorR7,
  steps: stepsR7
};

const recipe8 = {
  name: "Tarta de nueces",
  images: ["nueces1.jpg", "nueces2.jpg"],
  ingredients: ingredientsR8,
  stars: 4.1,
  author: authorR8,
  steps: stepsR8
};

const recipe9 = {
  name: "Cheesecake",
  images: ["cheesecake1.jpg", "cheesecake2.jpg"],
  ingredients: ingredientsR9,
  stars: 4.5,
  author: authorR9,
  steps: stepsR9
};

const recipe10 = {
  name: "Selva negra",
  images: ["selvanegra1.jpg", "selvanegra2.jpg"],
  ingredients: ingredientsR10,
  stars: 4.9,
  author: authorR10,
  steps: stepsR10
};
