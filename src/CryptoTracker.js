import './input.css';

function CryptoTracker({
  id,
  image,
  name,
  symbol,
  current_price,
  market_cap,
  total_volume,
  price_change_percentage_24h
}) {
   return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 justify-center p-4">
    <div className="flex flex-col w-3/4  justify-center mx-auto p-0">
      <div className="flex flex-col h-auto p-2 xl:flex-row w-full justify-around border border-stone-900 rounded-md mx-auto bg-zinc-900 h-20 items-center" key={id}>
        <div className="py-2 text-white" ><img className="h-15 w-14" src={image} alt="crypto" /></div>
        <div className="py-2 text-white text-2xl" ><p className="text-2xl">{name}</p></div>
        <div className="py-2 text-white text-2xl" ><p>{symbol}</p></div>
        <div className="py-2 text-white text-2xl" ><p>${current_price}</p></div>
        <div className="py-2 text-white text-2xl text-center" ><p>Mkt Cap: ${market_cap.toLocaleString()}</p></div>
        <div className="py-2 text-white text-2xl" ><p>${total_volume.toLocaleString()}</p></div>
        <span className={` font-bold text-2xl ${price_change_percentage_24h > 0 ? 'py-2 text-green-900' : ' py-2 text-red-900'}`}>{price_change_percentage_24h.toFixed(2)}%</span>
      </div>
    </div>
  </div>
  );
}

export default CryptoTracker;