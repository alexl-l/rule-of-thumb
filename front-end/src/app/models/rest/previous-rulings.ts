export interface PreviousRulings {
  currentRulings: PreviousRulingsAttributes[];
  previousRulings: PreviousRulingsAttributes[];
}
export interface PreviousRulingsAttributes {
  id: number;
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
  time: string;
  career: string;
}
export interface Votes {
  like: number;
  dislike: number;
  myVote: number;
}
