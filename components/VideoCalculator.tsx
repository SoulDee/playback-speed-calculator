'use client';
import { useReducer, useEffect, useCallback } from 'react';
import ProgressBar from './ProgressBar';
import { formatTime } from '../lib/timeUtils';

const labelClass = "block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1";
const commonInputClass = "w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white";

interface State {
  total: {
    hours: string;
    minutes: string;
    seconds: string;
  };
  watched: {
    hours: string;
    minutes: string;
    seconds: string;
  };
  speed: string;
  result: string;
  timeSaved: string;
  error?: string;
}

type Action =
  | { type: 'SET_TOTAL_TIME'; payload: { field: 'hours' | 'minutes' | 'seconds'; value: string } }
  | { type: 'SET_WATCHED_TIME'; payload: { field: 'hours' | 'minutes' | 'seconds'; value: string } }
  | { type: 'SET_SPEED'; payload: string }
  | { type: 'SET_RESULT'; payload: { result: string; timeSaved: string } }
  | { type: 'SET_ERROR'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_TOTAL_TIME':
      return {
        ...state,
        total: {
          ...state.total,
          [action.payload.field]: action.payload.value
        }
      };
    case 'SET_WATCHED_TIME':
      return {
        ...state,
        watched: {
          ...state.watched,
          [action.payload.field]: action.payload.value
        }
      };
    case 'SET_SPEED':
      return {
        ...state,
        speed: action.payload
      };
    case 'SET_RESULT':
      return {
        ...state,
        result: action.payload.result,
        timeSaved: action.payload.timeSaved,
        error: undefined
      };
    case 'SET_ERROR':
      return {
        ...state,
        result: '',
        timeSaved: '',
        error: action.payload
      };
    default:
      return state;
  }
}

const initialState: State = {
  total: {
    hours: '2',
    minutes: '0',
    seconds: '0'
  },
  watched: {
    hours: '0',
    minutes: '0',
    seconds: '0'
  },
  speed: '1.5',
  result: '',
  timeSaved: ''
};

export default function VideoCalculator() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validateInput = useCallback(() => {
    const total = {
      hours: parseFloat(state.total.hours),
      minutes: parseFloat(state.total.minutes),
      seconds: parseFloat(state.total.seconds)
    };
    
    const watched = {
      hours: parseFloat(state.watched.hours),
      minutes: parseFloat(state.watched.minutes),
      seconds: parseFloat(state.watched.seconds)
    };
    
    const speed = parseFloat(state.speed);

    // 验证总时长
    if (isNaN(total.hours) || total.hours < 0 ||
        isNaN(total.minutes) || total.minutes < 0 || total.minutes > 59 ||
        isNaN(total.seconds) || total.seconds < 0 || total.seconds > 59) {
      dispatch({ type: 'SET_ERROR', payload: 'Invalid total time format' });
      return false;
    }

    // 验证已观看时长
    if (isNaN(watched.hours) || watched.hours < 0 ||
        isNaN(watched.minutes) || watched.minutes < 0 || watched.minutes > 59 ||
        isNaN(watched.seconds) || watched.seconds < 0 || watched.seconds > 59) {
      dispatch({ type: 'SET_ERROR', payload: 'Invalid watched time format' });
      return false;
    }

    // 验证播放速度
    if (isNaN(speed) || speed < 0.25 || speed > 4) {
      dispatch({ type: 'SET_ERROR', payload: 'Speed must be between 0.25x and 4x' });
      return false;
    }

    // 验证已观看时长不超过总时长
    const totalSeconds = (total.hours * 3600) + (total.minutes * 60) + total.seconds;
    const watchedSeconds = (watched.hours * 3600) + (watched.minutes * 60) + watched.seconds;
    
    if (watchedSeconds > totalSeconds) {
      dispatch({ type: 'SET_ERROR', payload: 'Watched time cannot exceed total time' });
      return false;
    }

    return true;
  }, [state.total, state.watched, state.speed]);

  const calculateDuration = useCallback(() => {
    if (!validateInput()) return;

    const totalTimeInSeconds = (parseFloat(state.total.hours) * 3600) + 
                             (parseFloat(state.total.minutes) * 60) + 
                             parseFloat(state.total.seconds);
    
    const watchedTimeInSeconds = (parseFloat(state.watched.hours) * 3600) + 
                                (parseFloat(state.watched.minutes) * 60) + 
                                parseFloat(state.watched.seconds);
    
    const remainingSeconds = totalTimeInSeconds - watchedTimeInSeconds;
    const speedFloat = parseFloat(state.speed);
    
    const speedDuration = remainingSeconds / speedFloat;
    const timeDifference = remainingSeconds - speedDuration;
    
    const result = formatTime(speedDuration);
    const timeSaved = speedFloat > 1 
      ? `Save ${formatTime(timeDifference)} with ${speedFloat}x playback`
      : speedFloat < 1
      ? `Add ${formatTime(-timeDifference)} with ${speedFloat}x playback`
      : '';

    dispatch({ type: 'SET_RESULT', payload: { result, timeSaved } });
  }, [state.total, state.watched, state.speed]);

  useEffect(() => {
    calculateDuration();
  }, [calculateDuration]);

  const handleTimeChange = (type: 'total' | 'watched', field: 'hours' | 'minutes' | 'seconds') => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (type === 'total') {
        dispatch({ type: 'SET_TOTAL_TIME', payload: { field, value } });
      } else {
        dispatch({ type: 'SET_WATCHED_TIME', payload: { field, value } });
      }
    };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_SPEED', payload: e.target.value });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-8 mb-8">
      <div className="space-y-6">
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
                value={state.total.hours}
                onChange={handleTimeChange('total', 'hours')}
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
                value={state.total.minutes}
                onChange={handleTimeChange('total', 'minutes')}
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
                value={state.total.seconds}
                onChange={handleTimeChange('total', 'seconds')}
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
                value={state.watched.hours}
                onChange={handleTimeChange('watched', 'hours')}
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
                value={state.watched.minutes}
                onChange={handleTimeChange('watched', 'minutes')}
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
                value={state.watched.seconds}
                onChange={handleTimeChange('watched', 'seconds')}
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
            value={state.speed}
            onChange={handleSpeedChange}
            className={commonInputClass}
            placeholder="Enter playback speed (e.g., 1.5)"
          />
        </div>

        <div className="space-y-2">
          <label className={labelClass}>Time Comparison</label>
          <ProgressBar
            totalSeconds={(Number(state.total.hours) * 3600) + 
                         (Number(state.total.minutes) * 60) + 
                         Number(state.total.seconds)}
            speed={Number(state.speed)}
          />
        </div>

        {state.result && (
          <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Estimated Time: <span className="text-primary">{state.result}</span>
            </p>
            {state.timeSaved && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {state.timeSaved}
              </p>
            )}
          </div>
        )}

        {state.error && (
          <div className="p-4 bg-red-50 dark:bg-red-900 rounded-lg">
            <p className="text-sm font-medium text-red-700 dark:text-red-200">
              {state.error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
