type Categories = "한식" | "양식" | "일식" | "중식";

type Restaurant = {
  category: Categories;
  name: string;
  distance?: number;
  menus?: string[];
};

const restaurants = [];

const addRestaurant = (restaurant: Restaurant): void => {
  //
};

const filterByCategory = (
  category: Categories,
  restaurant: Restaurant
): Restaurant[] => {
  //
};
