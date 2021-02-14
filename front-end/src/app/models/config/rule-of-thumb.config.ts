export interface RuleOfThumb {
  config: RuleOfThumbAttributes;
}

export interface RuleOfThumbAttributes {
  navbar: Navbar;
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