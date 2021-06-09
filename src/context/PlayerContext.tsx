import React, {createContext, useContext, useEffect, useState} from 'react';
import RNTrackPlayer, {
  State as TrackPlayerState,
  STATE_PAUSED,
  STATE_PLAYING,
  STATE_STOPPED,
  Track,
} from 'react-native-track-player';

interface PlayerContextType {
  isPlaying: boolean;
  isPaused: boolean;
  isStopped: boolean;
  isEmpty: boolean;
  currentTrack: Track | null;
  play: (track?: Track) => void;
  addToQueue: (track: Track) => void;
  removeFromQueue: (trackId: string) => void;
  pause: () => void;
  seekTo: (amount?: number | undefined) => void;
  goTo: (amount: number) => void;
}

export const PlayerContext = createContext<PlayerContextType>({
  isPlaying: false,
  isPaused: false,
  isStopped: false,
  isEmpty: true,
  currentTrack: null,
  play: () => null,
  addToQueue: () => null,
  removeFromQueue: () => null,
  pause: () => null,
  seekTo: () => null,
  goTo: () => null,
});

export const PlayerContextProvider: React.FC = ({children}) => {
  const [playerState, setPlayerState] = useState<null | TrackPlayerState>(null);

  const [currentTrack, setCurrentTrack] = useState<null | Track>(null);

  useEffect(() => {
    const listener = RNTrackPlayer.addEventListener(
      'playback-state',
      ({state}: {state: TrackPlayerState}) => {
        setPlayerState(state);
      },
    );
    return () => {
      listener.remove();
    };
  }, []);

  const play = async (track?: Track) => {
    if (!track) {
      if (currentTrack) {
        await RNTrackPlayer.play();
      }
      return;
    }

    if (currentTrack && track.id === currentTrack.id) {
      await RNTrackPlayer.play();
      return;
    }

    await RNTrackPlayer.add([track]);
    setCurrentTrack(track);
    await RNTrackPlayer.play();
  };

  const addToQueue = async (track: Track) => {
    const queue = await RNTrackPlayer.getQueue();
    if (queue.find(item => item.id === track.id)) {
      return;
    }
    await RNTrackPlayer.add([track]);
  };

  const removeFromQueue = async (trackId: string) => {
    if (currentTrack && currentTrack.id === trackId) {
      await RNTrackPlayer.remove(trackId);
      setCurrentTrack(null);
      return;
    }
    await RNTrackPlayer.remove(trackId);
  };

  const pause = async () => {
    await RNTrackPlayer.pause();
  };

  const seekTo = async (amount: number = 30) => {
    const position = await RNTrackPlayer.getPosition();
    await RNTrackPlayer.seekTo(position + amount);
  };

  const goTo = async (amount: number) => {
    await RNTrackPlayer.seekTo(amount);
  };

  const value: PlayerContextType = {
    isPlaying: playerState === STATE_PLAYING,
    isPaused: playerState === STATE_PAUSED,
    isStopped: playerState === STATE_STOPPED,
    isEmpty: playerState === null,
    currentTrack,
    play,
    addToQueue,
    removeFromQueue,
    pause,
    seekTo,
    goTo,
  };

  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
};

export const usePlayerContext = () => useContext(PlayerContext);
