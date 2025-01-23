import { Video } from 'lucide-react';
import VideoCalculator from '../components/VideoCalculator';

export const runtime = 'edge';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <Video className="mx-auto h-12 w-12 text-primary mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Playback Speed Calculator
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Save hours of your time with smart video playback speeds</p>
        </div>

        <VideoCalculator />

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg space-y-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Smart Playback Guide</h2>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Quick Start</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <p>1. Enter the full video duration</p>
                <p>2. Input your current progress (if any)</p>
                <p>3. Choose your preferred playback speed</p>
                <p>4. See your optimized viewing time instantly</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Speed Selection Guide</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="font-medium text-primary mb-2">Casual Viewing</p>
                  <p className="text-gray-600 dark:text-gray-400">1x - 1.25x</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Perfect for entertainment</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="font-medium text-primary mb-2">Learning</p>
                  <p className="text-gray-600 dark:text-gray-400">1.25x - 1.5x</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">Ideal for tutorials</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="font-medium text-primary mb-2">Review</p>
                  <p className="text-gray-600 dark:text-gray-400">1.5x - 1.75x</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">For familiar content</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="font-medium text-primary mb-2">Speed Watch</p>
                  <p className="text-gray-600 dark:text-gray-400">1.75x - 2x</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">For quick overview</p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-2"> Pro Tips</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Start with lower speeds and gradually increase</li>
                <li>• Use 1.25x for minimal audio distortion</li>
                <li>• Take breaks during longer sessions</li>
                <li>• Adjust based on content complexity</li>
              </ul>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <p className="text-sm font-medium text-gray-900 dark:text-white mb-3">Quick Reference Table</p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead>
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Original Length</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Speed</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Watch Time</th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Time Saved</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="text-sm">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1 hour</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1.25x</td>
                      <td className="px-3 py-2 font-medium text-primary">48m</td>
                      <td className="px-3 py-2 text-green-600 dark:text-green-400">12m</td>
                    </tr>
                    <tr className="text-sm bg-gray-50 dark:bg-gray-800">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1 hour</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1.5x</td>
                      <td className="px-3 py-2 font-medium text-primary">40m</td>
                      <td className="px-3 py-2 text-green-600 dark:text-green-400">20m</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1 hour</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">2x</td>
                      <td className="px-3 py-2 font-medium text-primary">30m</td>
                      <td className="px-3 py-2 text-green-600 dark:text-green-400">30m</td>
                    </tr>
                    <tr className="text-sm bg-gray-50 dark:bg-gray-800">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">2 hours</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1.5x</td>
                      <td className="px-3 py-2 font-medium text-primary">1h 20m</td>
                      <td className="px-3 py-2 text-green-600 dark:text-green-400">40m</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">2 hours</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1.75x</td>
                      <td className="px-3 py-2 font-medium text-primary">1h 9m</td>
                      <td className="px-3 py-2 text-green-600 dark:text-green-400">51m</td>
                    </tr>
                    <tr className="text-sm bg-gray-50 dark:bg-gray-800">
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">3 hours</td>
                      <td className="px-3 py-2 text-gray-600 dark:text-gray-400">1.75x</td>
                      <td className="px-3 py-2 font-medium text-primary">1h 43m</td>
                      <td className="px-3 py-2 text-green-600 dark:text-green-400">1h 17m</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Q: How long will it take to watch a 2-hour online course at 1.25x speed?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Using our playback speed calculator, a 2-hour course played at 1.25x speed will take 1 hour and 36 minutes to complete.
                This means you can save 24 minutes of your time while still being able to comfortably follow the content.
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Q: I have a 4-hour lecture series. How much time can I save by watching it at 2x speed?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                By using our calculator, we can see that a 4-hour lecture series at 2x speed will only take 2 hours to complete.
                This is a significant time saving of 2 hours! Just make sure you&apos;re comfortable with the faster pace before
                attempting this speed.
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Q: What&apos;s the viewing time for a 3-hour documentary at 1.75x speed?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                According to our playback speed calculator, a 3-hour documentary watched at 1.75x speed will take 1 hour and 43 minutes to finish.
                This efficient viewing speed saves you 1 hour and 17 minutes while maintaining good comprehension of the content.
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Q: How much time will I save watching a 2.5-hour movie at 1.5x speed?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Using our calculator, we can determine that a 2.5-hour movie at 1.5x speed will take 1 hour and 40 minutes to watch.
                This means you&apos;ll save 50 minutes of viewing time while still being able to enjoy the movie&apos;s content and storyline.
              </p>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">Q: If I have a 1-hour tutorial, how quickly can I complete it at 1.75x speed?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2">
                Our playback speed calculator shows that a 1-hour tutorial at 1.75x speed will only take 34 minutes to complete.
                This optimization saves you 26 minutes, making it perfect for quick learning sessions while maintaining good comprehension.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}