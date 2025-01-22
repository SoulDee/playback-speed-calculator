'use client';
import { useState, useEffect, useCallback } from 'react';

const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1";
const commonInputClass = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white";

export default function VideoCalculator() {
  const [totalHours, setTotalHours] = useState<string>('2');
  const [totalMinutes, setTotalMinutes] = useState<string>('0');
  const [totalSeconds, setTotalSeconds] = useState<string>('0');
  const [watchedHours, setWatchedHours] = useState<string>('0');
  const [watchedMinutes, setWatchedMinutes] = useState<string>('0');
  const [watchedSeconds, setWatchedSeconds] = useState<string>('0');
  const [speed, setSpeed] = useState<string>('1.5');
  const [result, setResult] = useState<string>('');
  const [timeSaved, setTimeSaved] = useState<string>('');

  const formatTime = useCallback((seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.round(seconds % 60);
    
    return `${hours > 0 ? `${hours}h ` : ''}${minutes > 0 || hours > 0 ? `${minutes}m ` : ''}${remainingSeconds}s`;
  }, []);

  const calculateDuration = useCallback(() => {
    const totalTimeInSeconds = (parseFloat(totalHours || '0') * 3600) + 
                             (parseFloat(totalMinutes || '0') * 60) + 
                             parseFloat(totalSeconds || '0');
    
    const watchedTimeInSeconds = (parseFloat(watchedHours || '0') * 3600) + 
                                (parseFloat(watchedMinutes || '0') * 60) + 
                                parseFloat(watchedSeconds || '0');
    
    const remainingSeconds = totalTimeInSeconds - watchedTimeInSeconds;
    const speedFloat = parseFloat(speed || '1');
    
    if (remainingSeconds <= 0 || speedFloat <= 0) {
      setResult('');
      setTimeSaved('');
      return;
    }
    
    const normalDuration = remainingSeconds;
    const speedDuration = remainingSeconds / speedFloat;
    const timeDifference = normalDuration - speedDuration;
    
    setResult(formatTime(speedDuration));
    
    if (speedFloat > 1) {
      setTimeSaved(`Save ${formatTime(timeDifference)} with ${speedFloat}x playback`);
    } else if (speedFloat < 1) {
      setTimeSaved(`Add ${formatTime(-timeDifference)} with ${speedFloat}x playback`);
    } else {
      setTimeSaved('');
    }
  }, [totalHours, totalMinutes, totalSeconds, watchedHours, watchedMinutes, watchedSeconds, speed, formatTime]);

  useEffect(() => {
    calculateDuration();
  }, [calculateDuration]);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-8 mb-8">
      <div>
        <div className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Video Length</div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="totalHours" className={labelClass}>Hours</label>
            <input
              type="number"
              id="totalHours"
              min="0"
              step="1"
              value={totalHours}
              onChange={(e) => setTotalHours(e.target.value)}
              className={commonInputClass}
            />
          </div>
          <div>
            <label htmlFor="totalMinutes" className={labelClass}>Minutes</label>
            <input
              type="number"
              id="totalMinutes"
              min="0"
              max="59"
              step="1"
              value={totalMinutes}
              onChange={(e) => setTotalMinutes(e.target.value)}
              className={commonInputClass}
            />
          </div>
          <div>
            <label htmlFor="totalSeconds" className={labelClass}>Seconds</label>
            <input
              type="number"
              id="totalSeconds"
              min="0"
              max="59"
              step="1"
              value={totalSeconds}
              onChange={(e) => setTotalSeconds(e.target.value)}
              className={commonInputClass}
            />
          </div>
        </div>
      </div>

      <div>
        <div className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Watched Progress</div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="watchedHours" className={labelClass}>Hours</label>
            <input
              type="number"
              id="watchedHours"
              min="0"
              step="1"
              value={watchedHours}
              onChange={(e) => setWatchedHours(e.target.value)}
              className={commonInputClass}
            />
          </div>
          <div>
            <label htmlFor="watchedMinutes" className={labelClass}>Minutes</label>
            <input
              type="number"
              id="watchedMinutes"
              min="0"
              max="59"
              step="1"
              value={watchedMinutes}
              onChange={(e) => setWatchedMinutes(e.target.value)}
              className={commonInputClass}
            />
          </div>
          <div>
            <label htmlFor="watchedSeconds" className={labelClass}>Seconds</label>
            <input
              type="number"
              id="watchedSeconds"
              min="0"
              max="59"
              step="1"
              value={watchedSeconds}
              onChange={(e) => setWatchedSeconds(e.target.value)}
              className={commonInputClass}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="speed" className={labelClass}>
          Playback Speed Multiplier
        </label>
        <input
          type="number"
          id="speed"
          min="0.25"
          step="0.25"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
          className={commonInputClass}
          placeholder="Enter playback speed (e.g., 1.5)"
        />
      </div>

      {result && (
        <div className="text-center p-4 bg-secondary rounded-lg space-y-2">
          <div>
            <p className="text-sm text-secondary-foreground mb-1">Time to Complete at {speed}x Speed</p>
            <p className="text-2xl font-bold text-primary">{result}</p>
          </div>
          {timeSaved && (
            <p className="text-sm font-medium text-secondary-foreground">{timeSaved}</p>
          )}
        </div>
      )}
    </div>
  );
}
