type Categories = "한식" | "양식" | "일식" | "중식";

type Restaurant = {
  category: Categories;
  name: string;
  distance?: number;
  menus?: string[];
};

const restaurants = [];

const addRestaurant = (restaurant: Restaurant): void => {
  restaurants.push(restaurant);
};

const filterByCategoryAndRestaurant = (
  category: Categories,
  // 클린-코난의 질문: restaurant 객체를 파라미터로 주는 이유가 무엇인가요?
  restaurant: Restaurant
): Restaurant[] => {
  return restaurants.filter((restaurant) => restaurant.category === category);
};
