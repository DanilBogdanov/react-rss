import React from 'react';
import { LSKEY_PREV_QUERY } from '../../types/constants';

type SearchBarProps = {
  onChange: (query: string) => void;
};

type SearchBarState = {
  query: string;
  error: Error | null;
};

export default class SearchBar extends React.Component<
  SearchBarProps,
  SearchBarState
> {
  state: SearchBarState = {
    query: localStorage.getItem(LSKEY_PREV_QUERY) || '',
    error: null,
  };

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    this.setState({ query: value });
  }

  onSearchClick() {
    const query = this.state.query.trim();
    localStorage.setItem(LSKEY_PREV_QUERY, query);
    this.props.onChange(query);
  }

  render() {
    if (this.state.error) throw this.state.error;
    return (
      <div>
        <input
          value={this.state.query}
          onChange={(event) => this.onChange(event)}
        ></input>
        <button type='button' onClick={() => this.onSearchClick()}>
          Search
        </button>
        <button onClick={() => this.setState({ error: new Error() })}>
          Try Error
        </button>
      </div>
    );
  }
}
