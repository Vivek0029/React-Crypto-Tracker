import CryptoTracker from './CryptoTracker';
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const url =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        alert('server is down!');
      });
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(data =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id='app' className="App">
  <div className="h-screen flex-col">
    <div className="p-4 flex flex-col items-center">
      <input id='search' className="my-8 py-1 rounded-md" type="text" name="name" placeholder="Search Any Currency" onChange={handleChange}/>
    </div>
    <div className="flex-1 w-full">
      {filteredData.map(data => (
        <CryptoTracker
          key={data.id}
          id={data.id}
          name={data.name}
          current_price={data.current_price}
          symbol={data.symbol}
          total_volume={data.total_volume}
          market_cap={data.market_cap}
          image={data.image}
          price_change_percentage_24h={data.price_change_percentage_24h}
        />
      ))}
    </div>
  </div>
</div>

)};
export default App;