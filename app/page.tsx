import { Video } from 'lucide-react';
import VideoCalculator from '../components/VideoCalculator';

export const runtime = 'edge';

const Header = () => {
  return (
    <div className='relative text-center mb-8'>
      <a
        href="https://github.com/SoulDee/playback-speed-calculator"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-0 right-0 p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
        aria-label="View source on GitHub"
      >
        <svg
          viewBox="0 0 16 16"
          className="w-6 h-6"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </a>
      <Video className='mx-auto h-12 w-12 text-primary mb-4' />
      <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Playback Speed Calculator</h1>
      <p className='mt-2 text-sm text-gray-600 dark:text-gray-400'>Save hours of your time with smart video playback speeds</p>
    </div>
  );
};

const SmartPlaybackGuide = () => {
  return (
    <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-6 mb-8'>
      <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>Smart Playback Guide</h2>

      <div className='space-y-4'>
        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>Quick Start</h3>
          <ul className='list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400'>
            <li>Enter the full video duration</li>
            <li>Input your current progress (if any)</li>
            <li>See your optimized viewing time instantly</li>
          </ul>
        </div>

        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>Speed Selection Guide</h3>
          <div className='grid grid-cols-2 gap-4 text-sm'>
            <div className='p-3 bg-gray-100 dark:bg-gray-800 rounded-lg'>
              <p className='font-medium text-primary mb-2'>Casual Viewing</p>
              <p className='text-gray-600 dark:text-gray-400'>1x - 1.25x</p>
              <p className='text-xs text-gray-500 dark:text-gray-500 mt-1'>Perfect for entertainment</p>
            </div>
            <div className='p-3 bg-gray-100 dark:bg-gray-800 rounded-lg'>
              <p className='font-medium text-primary mb-2'>Learning</p>
              <p className='text-gray-600 dark:text-gray-400'>1.25x - 1.5x</p>
              <p className='text-xs text-gray-500 dark:text-gray-500 mt-1'>Ideal for tutorials</p>
            </div>
            <div className='p-3 bg-gray-100 dark:bg-gray-800 rounded-lg'>
              <p className='font-medium text-primary mb-2'>Review</p>
              <p className='text-gray-600 dark:text-gray-400'>1.5x - 1.75x</p>
              <p className='text-xs text-gray-500 dark:text-gray-500 mt-1'>For familiar content</p>
            </div>
            <div className='p-3 bg-gray-100 dark:bg-gray-800 rounded-lg'>
              <p className='font-medium text-primary mb-2'>Speed Watch</p>
              <p className='text-gray-600 dark:text-gray-400'>1.75x - 2x</p>
              <p className='text-xs text-gray-500 dark:text-gray-500 mt-1'>For quick overview</p>
            </div>
          </div>
        </div>

        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>Quick Reference Table</h3>
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
              <thead>
                <tr>
                  <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                    Original Length
                  </th>
                  <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                    Speed
                  </th>
                  <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                    Watch Time
                  </th>
                  <th className='px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'>
                    Time Saved
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 dark:divide-gray-700'>
                <tr className='text-sm'>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>1 hour</td>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>1.25x</td>
                  <td className='px-3 py-2 font-medium text-primary'>48m</td>
                  <td className='px-3 py-2 text-green-600 dark:text-green-400'>12m</td>
                </tr>
                <tr className='text-sm bg-gray-50 dark:bg-gray-800'>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>1 hour</td>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>1.5x</td>
                  <td className='px-3 py-2 font-medium text-primary'>40m</td>
                  <td className='px-3 py-2 text-green-600 dark:text-green-400'>20m</td>
                </tr>
                <tr className='text-sm'>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>1 hour</td>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>2x</td>
                  <td className='px-3 py-2 font-medium text-primary'>30m</td>
                  <td className='px-3 py-2 text-green-600 dark:text-green-400'>30m</td>
                </tr>
                <tr className='text-sm bg-gray-50 dark:bg-gray-800'>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>2 hours</td>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>1.5x</td>
                  <td className='px-3 py-2 font-medium text-primary'>1h 20m</td>
                  <td className='px-3 py-2 text-green-600 dark:text-green-400'>40m</td>
                </tr>
                <tr className='text-sm'>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>2 hours</td>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>1.75x</td>
                  <td className='px-3 py-2 font-medium text-primary'>1h 9m</td>
                  <td className='px-3 py-2 text-green-600 dark:text-green-400'>51m</td>
                </tr>
                <tr className='text-sm bg-gray-50 dark:bg-gray-800'>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>3 hours</td>
                  <td className='px-3 py-2 text-gray-600 dark:text-gray-400'>1.75x</td>
                  <td className='px-3 py-2 font-medium text-primary'>1h 43m</td>
                  <td className='px-3 py-2 text-green-600 dark:text-green-400'>1h 17m</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>Pro Tips</h3>
          <ul className='list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400'>
            <li>Start with lower speeds and gradually increase</li>
            <li>Use 1.25x for minimal audio distortion</li>
            <li>Take breaks during longer sessions</li>
            <li>Adjust based on content complexity</li>
          </ul>
        </div>

        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>How it works?</h3>
          <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>
              Remaining Time = (Total Time - Watched Time) ÷ Playback Speed
              <p className="ml-5 mt-1 text-xs text-gray-500 dark:text-gray-500">
                Example: For a 2h video, watched 30min, at 2x speed:<br />
                (2h - 30min = 90min) ÷ 2 = 45min remaining
              </p>
            </li>
            <li>
              Time Saved = (Total Time - Watched Time) - Remaining Time
              <p className="ml-5 mt-1 text-xs text-gray-500 dark:text-gray-500">
                Example: From above, original remaining time is 90min:<br />
                90min - 45min = 45min saved
              </p>
            </li>
            <li>
              Results are rounded to the nearest second
              <p className="ml-5 mt-1 text-xs text-gray-500 dark:text-gray-500">
                Example: 1h 30min 15.7s → 1h 30min 16s
              </p>
            </li>
            <li>
              <a href="#examples" className="text-primary hover:text-primary-dark">
                View more examples →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Examples = () => {
  return (
    <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8'>
      <h2 id='examples' className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>Examples</h2>
      <div className='space-y-6'>
        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>
            Q: How long will it take to watch a 2-hour online course at 1.25x speed?
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-2'>
            Using our playback speed calculator, a 2-hour course played at 1.25x speed will take 1 hour and 36 minutes to complete. This
            means you can save 24 minutes of your time while still being able to comfortably follow the content.
          </p>
        </div>

        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>
            Q: I have a 4-hour lecture series. How much time can I save by watching it at 2x speed?
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-2'>
            By using our calculator, we can see that a 4-hour lecture series at 2x speed will only take 2 hours to complete. This is a
            significant time saving of 2 hours! Just make sure you&apos;re comfortable with the faster pace before attempting this speed.
          </p>
        </div>

        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>
            Q: What&apos;s the viewing time for a 3-hour documentary at 1.75x speed?
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-2'>
            According to our playback speed calculator, a 3-hour documentary watched at 1.75x speed will take 1 hour and 43 minutes to
            finish. This efficient viewing speed saves you 1 hour and 17 minutes while maintaining good comprehension of the content.
          </p>
        </div>

        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>
            Q: How much time will I save watching a 2.5-hour movie at 1.5x speed?
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-2'>
            Using our calculator, we can determine that a 2.5-hour movie at 1.5x speed will take 1 hour and 40 minutes to watch. This means
            you&apos;ll save 50 minutes of viewing time while still being able to enjoy the movie&apos;s content and storyline.
          </p>
        </div>

        <div className='p-4 bg-gray-50 dark:bg-gray-900 rounded-lg'>
          <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-3'>
            Q: If I have a 1-hour tutorial, how quickly can I complete it at 1.75x speed?
          </h3>
          <p className='text-gray-600 dark:text-gray-400 mb-2'>
            Our playback speed calculator shows that a 1-hour tutorial at 1.75x speed will only take 34 minutes to complete. This
            optimization saves you 26 minutes, making it perfect for quick learning sessions while maintaining good comprehension.
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-xl mx-auto'>
        <Header />
        <VideoCalculator />
        <SmartPlaybackGuide />
        <Examples />
        <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8'>
          <h2 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>About</h2>
          <div className='flex items-center justify-center space-x-6'>
            <a
              href="https://x.com/SoulDee_9527"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="Follow me on X (Twitter)"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="ml-2">@SoulDee_9527</span>
            </a>
            <a
              href="https://bento.me/souldee"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              aria-label="Visit my Bento profile"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm3.5-9c.828 0 1.5-.672 1.5-1.5S16.328 8 15.5 8 14 8.672 14 9.5s.672 1.5 1.5 1.5zm-7 0c.828 0 1.5-.672 1.5-1.5S9.328 8 8.5 8 7 8.672 7 9.5 7.672 11 8.5 11zm3.5 6c2.5 0 4.5-1.5 4.5-3.5S14.5 10 12 10s-4.5 1.5-4.5 3.5S9.5 17 12 17z"/>
              </svg>
              <span className="ml-2">bento.me/souldee</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
