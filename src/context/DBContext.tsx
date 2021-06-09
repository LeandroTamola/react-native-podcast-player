import React, {createContext, useEffect, useRef, useState} from 'react';
import {IDatabaseContract} from '../contracts/DatabaseContract';

import {PodcastModel} from '../models/PodcastModel';
import {SQliteServices} from '../services/sqliteServices';

interface DBContextProps {
  podcasts: PodcastModel[];
  subToPodcast: (podcast: PodcastModel) => Promise<void>;
  unsubToPodcast: (feedUrl: string) => Promise<void>;
}

export const DBContext = createContext<DBContextProps>({
  podcasts: [],
  subToPodcast: () => Promise.resolve(),
  unsubToPodcast: () => Promise.resolve(),
});

export const DBProvider: React.FC = ({children}) => {
  const [podcasts, setPodcasts] = useState<PodcastModel[]>([]);
  const db = useRef<IDatabaseContract | null>(null);

  useEffect(() => {
    db.current = new SQliteServices();
  }, []);

  useEffect(() => {
    (async () => {
      if (db.current) {
        const _podcasts = await db.current.getAllPodcast();
        setPodcasts(_podcasts);
      }
    })();
  }, [podcasts]);

  const subToPodcast = async (podcast: PodcastModel) => {
    if (db.current) {
      await db.current.subscribeToPodcast(podcast);
      const _podcasts = await db.current.getAllPodcast();
      setPodcasts(_podcasts);
    }
  };

  const unsubToPodcast = async (feedUrl: string) => {
    if (db.current) {
      await db.current.unsubscribeToPodcast(feedUrl);
      const _podcasts = await db.current.getAllPodcast();
      setPodcasts(_podcasts);
    }
  };

  const value: DBContextProps = {
    podcasts,
    subToPodcast,
    unsubToPodcast,
  };
  return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
};

export default DBContext;
