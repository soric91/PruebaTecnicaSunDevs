const HypeBar = ({ level, size = 'sm' }) => {
  const percentage = Math.min(level * 100 * 1.3, 100);

  const getColor = () => {
    if (level === 0) return 'bg-gray-700';
    if (level >= 0.25) return 'bg-gradient-to-r from-amber-400 to-yellow-500';
    if (level >= 0.15) return 'bg-gradient-to-r from-yellow-400 to-orange-400';
    return 'bg-gradient-to-r from-blue-400 to-cyan-400';
  };

  const height = size === 'md' ? 'h-2.5' : 'h-1.5';

  return (
    <div className="flex items-center gap-2">
      <div className={`flex-1 ${height} rounded-full bg-gray-800 overflow-hidden`}>
        <div
          className={`${height} rounded-full ${getColor()} transition-all duration-700 ease-out shadow-lg`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-xs font-mono text-gray-400 min-w-12 text-right">
        {level === 0 ? 'N/A' : (level * 100).toFixed(1) + '%'}
      </span>
    </div>
  );
};

export default HypeBar;
