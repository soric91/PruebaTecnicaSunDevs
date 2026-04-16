import HypeBar from "./HypeBar";
const VideoCard = ({ video, index = 0 }) => {
  const isTutorial = /tutorial/i.test(video.title);
  const hype = Number(video.hype || 0);
  const hypeStyles =
    hype >= 0.25
      ? "bg-rose-500 text-white"
      : hype >= 0.15
      ? "bg-amber-400 text-black"
      : "bg-sky-500 text-white";
  const hypeLabel = hype >= 0.25 ? "🔥 Hot" : hype >= 0.15 ? "⚡ Rising" : "📊 Low";
  return (
    <article
      className="group w-full max-w-75 rounded-lg border border-white/10 bg-zinc-900/90 overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in-up"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative h-37.5 w-full overflow-hidden bg-zinc-800">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent" />
        {hype > 0 && (
          <span className={`absolute top-2 right-2 rounded-full px-2 py-0.5 text-[10px] font-bold ${hypeStyles}`}>
            {hypeLabel}
          </span>
        )}
        {isTutorial && (
          <span className="absolute bottom-2 left-2 rounded-full bg-violet-500/90 px-2 py-0.5 text-[10px] font-semibold text-white">
            📚 Tutorial
          </span>
        )}
      </div>
      <div className="p-3 space-y-2">
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-100 group-hover:text-amber-300 transition-colors">
          {video.title}
        </h3>
        <div className="flex items-center justify-between text-[11px] text-zinc-400">
          <span className="truncate font-medium">{video.autor}</span>
          <span className="shrink-0">{video.publishedRelative}</span>
        </div>
        <HypeBar level={hype} />
      </div>
    </article>
  );
};
export default VideoCard;