import React from "react";

import Page from "../components/layout/Page";
import Artists from "./shared/items/Artists";
import SearchBox from "./shared/SearchBox";
import useSearch from "./useSearch";
import If from "../components/If";

function Home(): JSX.Element {
  const { searchTerm, results } = useSearch({});
  const { artists } = results;

  return (
    <Page>
      <SearchBox onSearch={searchTerm} />
      <If condition={artists.length > 0}>
        <Artists list={artists} />
      </If>
    </Page>
  );
}

export default Home;
