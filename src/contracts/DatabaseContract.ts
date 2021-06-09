import {PodcastModel} from '../models/PodcastModel';

export interface IDatabaseContract {
  getAllPodcast(): Promise<PodcastModel[]>;
  subscribeToPodcast(podcast: PodcastModel): Promise<void>;
  unsubscribeToPodcast(feedUrl: string): Promise<void>;
  isReady: boolean;
}
