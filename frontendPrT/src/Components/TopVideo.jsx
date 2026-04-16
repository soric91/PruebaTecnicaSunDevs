import HypeBar from './HypeBar';

const TopVideoCard = ({ dataVideo }) => {
  return (
    <div className="relative w-full mb-10 animate-fade-in-up">
      {/* brillo exterior */}
      <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-amber-400 via-yellow-300 to-purple-500 opacity-70 blur-xl animate-pulse-glow" />
      <article
        className="
          relative z-10 w-full overflow-hidden rounded-2xl border-2 border-yellow-500/30
          bg-gray-900/90 backdrop-blur-sm shadow-2xl group
          flex flex-col md:flex-row
          h-auto md:h-[20vh] md:min-h-60
        "
      >
        {/* Imagen izquierda */}
        <div className="relative w-full md:w-[42%] h-55 md:h-full overflow-hidden shrink-0">
          <img
            src={dataVideo.thumbnailUrl}
            alt={dataVideo.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          <span className="absolute top-4 left-4 rounded-full bg-linear-to-r from-amber-500 to-yellow-500 px-4 py-1.5 text-xs font-bold text-black shadow-lg animate-bounce-slow">
            👑 Joya de la Corona
          </span>
        </div>
        {/* Descripción derecha */}
        <div className="w-full md:w-[58%] h-full p-6 bg-linear-to-b from-gray-900 to-gray-950 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🔥</span>
              <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                Mayor Hype Detectado
              </p>
            </div>
            <h2 className="text-xl md:text-2xl font-bold leading-tight text-white line-clamp-2">
              {dataVideo.title}
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                {dataVideo.autor.charAt(0) || 'A'}
              </div>
              <p className="text-sm text-gray-300">{dataVideo.autor}</p>
            </div>
          </div>
          <div className="space-y-2 pt-3">
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Nivel de Hype
              </p>
              <span className="text-xs text-gray-500">
                {dataVideo.publishedRelative}
              </span>
            </div>
            <HypeBar level={dataVideo.hype} size="md" />
          </div>
        </div>
      </article>
    </div>
  );
};
export default TopVideoCard;
