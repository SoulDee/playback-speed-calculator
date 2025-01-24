/**
 * 格式化秒数为易读的时间字符串
 * @param seconds 总秒数
 * @returns 格式化后的时间字符串 (e.g. "1h 23m 45s")
 */
export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.round(seconds % 60);
  
  return `${hours > 0 ? `${hours}h ` : ''}${minutes > 0 || hours > 0 ? `${minutes}m ` : ''}${remainingSeconds}s`;
};

/**
 * 将时间字符串解析为秒数
 * @param timeString 时间字符串 (e.g. "1h 23m 45s")
 * @returns 总秒数
 */
export const parseTimeToSeconds = (timeString: string): number => {
  const hoursMatch = timeString.match(/(\d+)h/);
  const minutesMatch = timeString.match(/(\d+)m/);
  const secondsMatch = timeString.match(/(\d+)s/);

  const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
  const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
  const seconds = secondsMatch ? parseInt(secondsMatch[1]) : 0;

  return (hours * 3600) + (minutes * 60) + seconds;
};
