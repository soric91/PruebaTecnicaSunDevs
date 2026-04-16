import VideoCard from "./VideoCard";
const GridVideo = ({ remainingVideos = [] }) => {
  return (
    <section className="w-full mt-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm uppercase tracking-[0.18em] text-zinc-400 font-semibold">
          Mas videos
        </h2>
        <span className="text-xs text-zinc-500">{remainingVideos.length} resultados</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center sm:place-items-stretch">
        {remainingVideos.map((video, index) => (
          <VideoCard key={video.id || `${video.title}-${index}`} video={video} index={index} />
        ))}
      </div>
    </section>
  );
};
export default GridVideo;