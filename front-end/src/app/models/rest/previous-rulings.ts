export interface PreviousRulings {
  previousRulings: PreviousRulingsAttributes[];
}

export interface PreviousRulingsAttributes {
  name: string;
  picture: string;
  description: string;
  detail: Detail;
  votes: Votes;
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
