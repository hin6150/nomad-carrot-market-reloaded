export default function Home() {
  return (
    <main className="bg-gray-50 w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col rounded-xl shadow-xl p-4 w-fit gap-4 bg-white dark:bg-gray-700">
        <div>
          <div className="flex justify-between">
            <div>
              <p>In transit</p>
              <p className="text-4xl font-bold">Coolblue</p>
            </div>
            <div className="bg-orange-400 rounded-full size-12"></div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="bg-green-500 rounded-2xl px-3 py-1">
            <p className="text-white">TODAY</p>
          </div>
          <p className="font-bold">9:30-10:30u</p>
        </div>
        <div className="bg-gray-200 w-full h-2" />
        <div className="flex gap-4">
          <p>Expected</p>
          <p>Sorting Center</p>
          <p>In transit</p>
          <p className="text-gray-400">Delivered</p>
        </div>
      </div>
    </main>
  );
}
