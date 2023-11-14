export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  url: string;
}

export interface CharacterResponse {
  info: {
    count: number;
  };
  results: Character[];
}

export interface CharacterRequest {
  name: string;
  page: number;
  limit: PageLimit;
}

export enum PageLimit {
  L20 = 1,
  L40 = 2,
  L60 = 3,
}
