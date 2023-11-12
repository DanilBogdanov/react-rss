import axios from 'axios';
import { Character, CharacterRequest, CharacterResponse } from '../types/api';

class Api {
  private readonly host = 'https://rickandmortyapi.com/api';

  public async getCharacter(id: number): Promise<Character> {
    const url = `${this.host}/character/${id}`;
    const { data } = await axios.get<Character>(url);
    return data;
  }

  public async getCharacters(
    request: CharacterRequest
  ): Promise<CharacterResponse | null> {
    const pages: number[] = [];
    const prevPage = (request.page - 1) * request.limit;
    for (let i = 1; i <= request.limit; i += 1) {
      pages.push(prevPage + i);
    }

    let responses: CharacterResponse | null = null;

    for (const page of pages) {
      try {
        const resp = await this.fetchCharacters(request.name, page);
        if (!responses) {
          responses = resp;
        } else {
          responses.results.push(...resp.results);
        }
      } catch {
        break;
      }
    }

    return responses;
  }

  private async fetchCharacters(
    name: string,
    page: number
  ): Promise<CharacterResponse> {
    const url = `${this.host}/character?name=${name}&page=${page}`;
    const { data } = await axios.get<CharacterResponse>(url);
    if (!data.results) throw Error('Not Found');
    return data;
  }
}

export const api = new Api();
