import Navbar from '../Components/Navbar';
import LoadingSkeleton from '../Components/LoadingSkeleton';
import { useVideoContext } from '../Context/VideoContext';
import TopVideoCard from '../Components/TopVideo';
import GridVideo from '../Components/VideoGrid';

function HomePage() {
  const { videos, loading, error } = useVideoContext();

  if (loading) {
    return <LoadingSkeleton />;
  }
  if (error) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!videos || videos.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-gray-400 text-xl">No hay videos disponibles</p>
        </div>
      </div>
    );
  }

  const dataVideo = videos[0];
  const remainingVideos = videos.slice(1);

  return (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="max-w-7xl mx-auto px-4 py-6 space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
          Cartelera de Conocimiento
        </h1>
      </header>
      <TopVideoCard dataVideo={dataVideo} />
      <GridVideo remainingVideos={remainingVideos} />
    </main>
  </div>
)};

export default HomePage;
