import { CharacterResponse } from '../types/api';

class Api {
  private readonly host = 'https://rickandmortyapi.com/api';

  public async search(query: string): Promise<CharacterResponse> {
    return await this.fetchCharacters(query);
  }

  public async getCharacters(): Promise<CharacterResponse> {
    return await this.fetchCharacters();
  }

  private async fetchCharacters(name?: string): Promise<CharacterResponse> {
    const url = `${this.host}/character${name ? `?name=${name}` : ''}`;
    const resp: Response = await fetch(url);
    const res: CharacterResponse = await resp.json();
    return res;
  }
}

export const api = new Api();
