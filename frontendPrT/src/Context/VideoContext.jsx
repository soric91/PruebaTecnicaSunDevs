import { createContext, useEffect, useState, useContext } from 'react';
import { getDataVideos } from '../Api/video.js';

const VideoGlobalContext = createContext();

export const useVideoContext = () => {
  const context = useContext(VideoGlobalContext);
  if (!context) {
    throw new Error(
      'useVideoContext must be used within a GlobalVideoProvider',
    );
  }
  return context;
};

export const GlobalVideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getDataVideos();
        setVideos(data);
      } catch (err) {
        const message =
          err?.response?.data?.message ||
          err?.message ||
          'No se pudieron cargar los videos';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <VideoGlobalContext.Provider value={{ videos, loading, error }}>
      {children}
    </VideoGlobalContext.Provider>
  );
};
