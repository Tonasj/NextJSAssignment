
export default function Home() {
  return (
    <div className="flex flex-col mb-5 items-center justify-center align-items">
    <h1 className="text-2xl font-bold">Pörssisähkö electricity prices</h1>
    <div>
      <a href ="/dashboard">
        <button className="w-50 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Go to the site</button>
      </a>
    </div>
    </div>
  )
}
