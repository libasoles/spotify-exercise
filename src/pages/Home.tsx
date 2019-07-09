import React from "react";

import Page from "../components/layout/Page";
import Artists from "./shared/items/Artists";
import SearchBox from "./shared/SearchBox";
import useSearch from "./useSearch";

function Home(): JSX.Element {
  const { searchTerm, results } = useSearch();

  return (
    <Page>
      <SearchBox onSearch={searchTerm} />
      <Artists list={results.artists} />
    </Page>
  );
}

export default Home;
