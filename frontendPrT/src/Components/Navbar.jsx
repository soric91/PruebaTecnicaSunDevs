import { useVideoContext } from '../Context/VideoContext';

function Navbar() {
  const { videos } = useVideoContext();
  const total = videos.length;
  return (
    <header className="px-2 py-2 border-b border-gray-800 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-3">
        <span className="text-xl">🎬</span>
        <div>
          <h1 className="text-white font-semibold text-lg">
            Cartelera de Conocimiento
          </h1>
          <p className="text-gray-400 text-sm ">
           Los videos más relevantes!
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full">
        {total ?? '0'} videos
      </div>
    </header>
  );
}

export default Navbar;
