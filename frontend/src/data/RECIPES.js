import image1 from "../assets/images/spinach_cottage_cheese_puff_pastry.jpg";
import image72 from "../assets/images/ropa_vieja.jpg";

import { sub } from "date-fns";

export const RECIPES = [
  {
    id: "1x",
    title: "Gnocchi with tomato sauce",
    content: "",
    ingridients: [
      { amount: "1 cup", name: "flour" },
      { amount: "4 big", name: "potatoes" },
      { amount: "1", name: "egg" },
      { amount: "350 ml", name: "tomato passata" },
      { amount: "1", name: "onion" },
      { amount: "1", name: "garlic clove" },
      { amount: "1 spoon", name: "olive oil" },
    ],
    category: "pasta",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "2x",
    title: "Carbonara",
    content: "my recipe 2 ",
    ingridients: [
      { amount: "2", name: "egg yolk" },
      { amount: "", name: "parmesan" },
    ],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "3x",
    title: "Risotto with muchrooms",
    content: "my recipe 3",
    ingridients: [
      { amount: "1 cup", name: "flour" },
      { amount: "250 ml", name: "milk" },
    ],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "4x",
    title: "Alpler maccgrone",
    content: "my recipe 4",
    ingridients: [
      { amount: "1 cup", name: "flour" },
      { amount: "250 ml", name: "milk" },
    ],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "5x",
    title: "Pizza from cottage cheese",
    content: "my recipe 5",
    ingridients: [
      { amount: "1 cup", name: "flour" },
      { amount: "250 ml", name: "milk" },
    ],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "6x",
    title: "Chole masala with chicken tights",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "7x",
    title: "Mango chicken with fries",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "8x",
    title: "Tomato fettucine with burrata",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "9x",
    title: "Red bean and sweet potato salad with cilanto dressing",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "10x",
    title: "Cheakpea curry with chicken tights",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "11x",
    title: "Guacamole with tortilla",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "12x",
    title: "Bocadillo with pork and avocado",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "13x",
    title: "Schabowy witch mashed potatoes",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "14x",
    title: "Spinach and chottage cheese baked in puff pastry",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: image1,
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "15x",
    title: "Basque cheesecake",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "16x",
    title: "Papas arrugadas",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "17x",
    title: "Tortilla de papas",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "18x",
    title: "Cottage cheese pizza",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "19x",
    title: "Sopa azteca",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "20x",
    title: "Tomato soup",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "21x",
    title: "Pumpkin cream soup",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "22x",
    title: "Naan bread",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "23x",
    title: "Shredded curry chicken with mashed sweet potato and coconut milk",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "24x",
    title: "Arepas with reina pepina",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "25x",
    title: "Bruschetta",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "26x",
    title: "Egg paste",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "27x",
    title: "Devolay",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "28x",
    title: "Spaghetti bolognese",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "29x",
    title: "Tacos witch chicken",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "30x",
    title: "Chicken wrapped with bacon with bell pepper sauce and rice",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "31x",
    title: "Mexican chips and salsa",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "32x",
    title: "Onion soup",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "33x",
    title: "Cheakpea and mayo paste",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "34x",
    title: "Wurst salad",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "35x",
    title: "Tuna salad with pickles",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "36x",
    title: "Tuna salad with cheese",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "37x",
    title: "Goląbki",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "38x",
    title: "Gulash in hungarian style",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "39x",
    title: "Fledli suppe",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "40x",
    title: "Tarta de chocolate de abuela",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "41x",
    title: "Vogeli - Roladki mięsne",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "42x",
    title: "Horseraddish sauce",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "43x",
    title: "Chili con carne and sour cream",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "44x",
    title: "Honey lemon chicken",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "45x",
    title: "",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "46x",
    title: "Wurst salad",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "47x",
    title: "Wurst salad",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "48x",
    title: "Butter chicken",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "49x",
    title: "Stuffed bell pepper with rice and minced meat",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "50x",
    title: "Greek salad with pita",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "51x",
    title: "BBQ ribs",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "52x",
    title: "No-bake chocolate cheesecake",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "53x",
    title: "Coleslaw",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "54x",
    title: "Pierogi",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "55x",
    title: "Papas bravas",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "56x",
    title: "Pulpo ala Gallega",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "57x",
    title: "Pulpo ala Gallega",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "58x",
    title: "Cauliflour cream soup",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "59x",
    title: "Fried cauliflour and egg",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "60x",
    title: "Crepes",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "61x",
    title: "Pancakes",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "62x",
    title: "Feta baked with cherrz tomatoes",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "63x",
    title: "Chicken salad with honey/mustard deressing",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "64x",
    title: "Caesar salad",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "65x",
    title: "Garlic bread",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "66x",
    title: "Fondue Chinoise",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "67x",
    title: "Curry sauce",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "68x",
    title: "Banana sauce",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "69x",
    title: "Coctail sauce",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "70x",
    title: "Halloumi cheese with fries",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "71x",
    title: "Baked puff pastry with ham, cheese, onion",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "72x",
    title: "Ropa vieja",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: image72,
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  {
    id: "73x",
    title: "Greek salad",
    content: "",
    ingridients: [{ amount: "", name: "" }],
    category: "",
    image: "",
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
];
