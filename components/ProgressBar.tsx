'use client';

interface ProgressBarProps {
  totalSeconds: number;
  speed: number;
}

export default function ProgressBar({ totalSeconds, speed }: ProgressBarProps) {
  const acceleratedTime = totalSeconds / speed;
  const isSlower = speed < 1;
  
  // 当速度小于1时，以较长的时间（acceleratedTime）为基准
  const baseTime = isSlower ? acceleratedTime : totalSeconds;
  
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="space-y-4">
      {/* 原速进度条 */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">Original Speed (1x)</span>
          <span className="font-medium text-gray-700 dark:text-gray-300">{formatTime(totalSeconds)}</span>
        </div>
        <div className="h-6 w-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
            style={{ 
              width: `${(totalSeconds / baseTime) * 100}%`,
              marginLeft: isSlower ? 0 : 'auto'
            }}
          />
        </div>
      </div>

      {/* 倍速进度条 */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600 dark:text-gray-400">
            {speed}x Speed
            <span className={`ml-2 px-2 py-0.5 rounded text-xs ${
              isSlower 
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            }`}>
              {isSlower ? 'Slower' : 'Faster'}
            </span>
          </span>
          <span className="font-medium text-gray-700 dark:text-gray-300">{formatTime(acceleratedTime)}</span>
        </div>
        <div className="h-6 w-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ease-in-out ${
              isSlower ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ 
              width: `${(acceleratedTime / baseTime) * 100}%`,
              marginLeft: isSlower ? 0 : 'auto'
            }}
          />
        </div>
      </div>

      {/* 时间对比 */}
      <div className="text-sm text-center">
        <span className={`font-medium ${isSlower ? 'text-yellow-600 dark:text-yellow-400' : 'text-green-600 dark:text-green-400'}`}>
          {isSlower 
            ? `Takes ${formatTime(Math.abs(acceleratedTime - totalSeconds))} longer` 
            : `Saves ${formatTime(Math.abs(acceleratedTime - totalSeconds))}`}
        </span>
      </div>
    </div>
  );
}
