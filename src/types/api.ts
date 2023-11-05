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
  l20 = 1,
  l40 = 2,
  l60 = 3,
}
