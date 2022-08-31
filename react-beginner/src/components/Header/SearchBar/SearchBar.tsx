import * as React from 'react';

import { faMagnifyingGlass as SearchIcon } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';

import { Button } from 'components/Button/Button';
import { SearchBarContainer } from 'components/Header/SearchBar/search.styled';

export function SearchBar() {
  const [isSearching, setIsSearching] = React.useState(false);
  const toggleSearch = () => setIsSearching((prev) => !prev);
  return (
    <SearchBarContainer>
      {isSearching && (
        <input
          type="search"
          placeholder="Search..."
        />
      )}
      <Button
        onClick={toggleSearch}
        iconBefore={SearchIcon}
      />
    </SearchBarContainer>
  );
}
