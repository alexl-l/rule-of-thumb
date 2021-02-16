export interface RulingData {
  success: string;
  data: PreviousRulingsAttributes[];
}
export interface PreviousRulings {
  currentRulings: PreviousRulingsAttributes[];
  previousRulings: PreviousRulingsAttributes[];
}
export interface PreviousRulingsAttributes {
  _id: number;
  name: string;
  picture: string;
  description: string;
  detail: Detail;
  votes: Votes;
  overview: string;
  link: string;
  daysLeft: number;
}
export interface Detail {
  time: number;
  career: string;
}
export interface Votes {
  like: number;
  dislike: number;
}

export interface RulingDataPut {
  success: boolean;
  data: PreviousRulingsAttributes;
}