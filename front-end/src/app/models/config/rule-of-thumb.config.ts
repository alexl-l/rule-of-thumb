export interface RuleOfThumb {
  config: RuleOfThumbAttributes;
}

export interface RuleOfThumbAttributes {
  navbar: Navbar;
  rulings: Rulings;
}
export interface Navbar {
  brand: Item;
  items: Item[];
  search: Search;
}
export interface Item {
  position: number;
  routing: string;
  text: string;
}
export interface Search {
  icon: string;
}
export interface Rulings {
  title: string;
  votes: Votes;
  alert: Alert;
}
export interface Votes {
  title: string;
  question: string;
  icon: string;
  detailLink: string;
  detailClose: string;
  time: string;
}
export interface Alert {
  title: string;
  subtitle: string;
  description: string;
}
