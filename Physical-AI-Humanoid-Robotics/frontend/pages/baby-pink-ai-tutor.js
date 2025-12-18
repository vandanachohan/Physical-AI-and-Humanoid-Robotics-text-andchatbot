import Head from 'next/head';
import BabyPinkLayout from '../components/BabyPinkLayout';
import AIChatbot from '../components/AIChatbot';
import BabyPinkTextbookSidebar from '../components/BabyPinkTextbookSidebar';

export default function BabyPinkAITutorPage() {
  return (
    <>
      <Head>
        <title>AI Tutor for Physical AI & Humanoid Robotics - Baby Pink Edition</title>
        <meta name="description" content="Interactive AI tutor for Physical AI & Humanoid Robotics textbook in beautiful baby pink theme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BabyPinkLayout showAIChatbot={false}>
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: '#880e4f' }}
            >
              Physical AI & Humanoid Robotics
            </h1>
            <p
              className="text-lg"
              style={{ color: '#ad1457' }}
            >
              Interactive AI Tutor - Learn with real-time assistance
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Baby Pink Textbook Sidebar - 40% width on large screens */}
            <div className="lg:w-2/5">
              <BabyPinkTextbookSidebar />
            </div>

            {/* Chat Interface - 60% width on large screens */}
            <div className="lg:w-3/5">
              <div
                className="bg-white rounded-xl shadow-lg p-1 border"
                style={{ borderColor: '#f8c6d0' }}
              >
                <AIChatbot />
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm max-w-2xl mx-auto" style={{ color: '#ad1457' }}>
            <p>
              This interactive AI tutor helps you understand the concepts of Physical AI & Humanoid Robotics.
              Ask questions about any chapter or topic, and get step-by-step explanations with examples.
            </p>
          </div>
        </div>
      </BabyPinkLayout>
    </>
  );
}