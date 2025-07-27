import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Head>
        <title>IdeaShack</title>
      </Head>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">IdeaShack</h1>
        <p className="text-center text-gray-600 mt-2">Where ideas go before they're built.</p>
      </header>
      <main className="max-w-2xl mx-auto">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Trending Ideas</h2>
          <div className="bg-white shadow rounded p-4">Coming soon...</div>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Submit an Idea</h2>
          <div className="bg-white shadow rounded p-4">Form placeholder...</div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Have an idea? Post it.</li>
            <li>Get upvotes if others want it too.</li>
            <li>Builders browse and bring it to life.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
