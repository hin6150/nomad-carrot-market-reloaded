export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="flex w-1/2 flex-col gap-4 rounded-xl bg-white p-4 shadow-xl ring *:outline-none has-[:invalid]:ring-red-300 md:flex-row dark:bg-gray-700">
        <input
          placeholder="Search here"
          type="text"
          required
          className="peer w-full rounded-full bg-gray-200 p-4 px-6 ring ring-transparent ring-offset-2 transition-shadow focus:ring-orange-400"
        />
        <button className="rounded-full bg-black px-10 py-3 text-white transition-transform hover:scale-90 peer-required:bg-red-500">
          Search
        </button>
      </div>
    </main>
  );
}
