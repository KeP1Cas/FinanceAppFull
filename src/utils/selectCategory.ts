import Food from "assets/icons/category-icons/donut.svg";
import Home from "assets/icons/category-icons/home.svg";
import Aid from "assets/icons/category-icons/aid.svg";
import Benefit from "assets/icons/category-icons/benefits.svg";
import Books from "assets/icons/category-icons/books.svg";
import Phone from "assets/icons/category-icons/chat.svg";
import Credit from "assets/icons/category-icons/credit.svg";
import Travel from "assets/icons/category-icons/earth.svg";
import HomeAppliance from "assets/icons/category-icons/home-appliance.svg";
import Insurance from "assets/icons/category-icons/insurance.svg";
import Kindergarten from "assets/icons/category-icons/kindergarten.svg";
import Clothes from "assets/icons/category-icons/wardrobe.svg";
import Gym from "assets/icons/category-icons/sport.svg";
import Tax from "assets/icons/category-icons/tax.svg";
import Transport from "assets/icons/category-icons/vehicles.svg";
import Award from "assets/icons/category-icons/medal.svg";
import Data from "assets/icons/category-icons/statistics.svg";
import Medicine from "assets/icons/category-icons/medicine.svg";
import PublicService from "assets/icons/category-icons/water.svg";
import Gift from "assets/icons/category-icons/giftbox.svg";
import Vacation from "assets/icons/category-icons/sunbed.svg";
import Entertainment from "assets/icons/category-icons/tv.svg";
import Salary from "assets/icons/category-icons/salary.svg";
import Petrol from "assets/icons/category-icons/petrol.svg";
import Repairs from "assets/icons/category-icons/tools.svg";
import Furniture from "assets/icons/category-icons/living-room.svg";

const categories = [
  { title: "Food", color: "#FFEAC2", icon: Food },
  { title: "Home service", color: "#F0E3FF", icon: Home },
  { title: "Clothes", color: "#FFD3C9", icon: Clothes },
  { title: "Entertainment", color: "#F0E3FF", icon: Entertainment },
  { title: "Salary", color: "#DDEFFF", icon: Salary },
  { title: "Transport", color: "#FFE5F3", icon: Transport },
  { title: "Credits", color: "#dde8f0", icon: Credit },
  { title: "Gifts", color: "#85c8de", icon: Gift },
  { title: "Benefit", color: "#b1daea", icon: Benefit },
  { title: "Aid", color: "#dae5ea", icon: Aid },
  { title: "Award", color: "#64ac8f", icon: Award },
  { title: "Tax", color: "#94d6ba", icon: Tax },
  { title: "Petrol", color: "#e7f5dc", icon: Petrol },
  { title: "Phone", color: "#c0dfc2", icon: Phone },
  { title: "Public service", color: "#D9FFFF", icon: PublicService },
  { title: "Kindergarten", color: "#CDF9E1", icon: Kindergarten },
  { title: "Gym", color: "#85c8de", icon: Gym },
  { title: "Insurance", color: "#b1daea", icon: Insurance },
  { title: "Vacation", color: "#dae5ea", icon: Vacation },
  { title: "Repairs", color: "#64ac8f", icon: Repairs },
  { title: "Medicine", color: "#94d6ba", icon: Medicine },
  { title: "Travel", color: "#B3FFFC", icon: Travel },
  { title: "Home appliances", color: "#97cbdc", icon: HomeAppliance },
  { title: "Books", color: "#018abd", icon: Books },
  { title: "Furniture", color: "#FFC2F0", icon: Furniture },
  { title: "Data", color: "#FFD678", icon: Data },
];

const selectCategoryIcon = (label: string) => {
  return categories.filter(category => category.title === label)[0].icon;
};

const selectCategoryColor = (label: string) => {
  return categories.filter(category => category.title === label)[0].color;
};

export { selectCategoryIcon, selectCategoryColor };
