import {FeedQuery_feed, SearchQuery_search} from '../types/graphql';

export type SearchStackRouteParamsList = {
  SearchScreen: undefined;
  PodcastDetails: {
    data: SearchQuery_search;
  };
  EpisodeDetails: {
    episode: FeedQuery_feed;
    podcast: SearchQuery_search;
  };
};
