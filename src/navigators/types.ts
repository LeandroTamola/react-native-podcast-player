import {SearchQuery_search} from '../types/graphql';

export type SearchStackRouteParamsList = {
  SearchScreen: undefined;
  PodcastDetails: {
    data: SearchQuery_search;
  };
};
