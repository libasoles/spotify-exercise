import React from "react";

import Page from "../components/layout/Page";
import Artists from "./shared/items/Artists";
import SearchBox from "./shared/SearchBox";
import useSearch from "./Home/useSearch";
import If, { IfNot } from "../components/If";
import NoResults from "./shared/SearchBox/NoResults";
import Loading from "./shared/SearchBox/Loading";
import Tracks from "./shared/items/Tracks";

function Home(): JSX.Element {
  const { loading, searchTerm, results } = useSearch({});
  const { artists, tracks } = results;

  const hasArtists = artists.length > 0;

  return (
    <Page>
      <SearchBox onSearch={searchTerm} />

      <If condition={loading}>
        <Loading />
      </If>

      <If condition={!loading && hasArtists}>
        <Tracks list={tracks} />
        <Artists list={artists} />
      </If>

      <IfNot condition={loading || hasArtists}>
        <NoResults />
      </IfNot>
    </Page>
  );
}

export default Home;
