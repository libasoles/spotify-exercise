import React from "react";

import Page from "../components/layout/Page";
import Artists from "./shared/items/Artists";
import SearchBox from "./shared/SearchBox";
import useSearch from "./Home/useSearch";
import If, { IfNot } from "../components/If";
import NoResults from "./shared/NoResults";

function Home(): JSX.Element {
  const { searchTerm, results } = useSearch({});
  const { artists } = results;

  const hasArtists = artists.length > 0;

  return (
    <Page>
      <SearchBox onSearch={searchTerm} />
      <If condition={hasArtists}>
        <Artists list={artists} />
      </If>
      <IfNot condition={hasArtists}>
        <NoResults />
      </IfNot>
    </Page>
  );
}

export default Home;
