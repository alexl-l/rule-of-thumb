export interface RuleOfThumb {
  config: RuleOfThumbAttributes;
}

export interface RuleOfThumbAttributes {
  navbar: Navbar;
}

export interface Navbar {
  brand: Item;
  items: Item[];
}

export interface Item {
  position: number;
  routing: string;
  text: string;
}
