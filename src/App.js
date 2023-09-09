import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import useDebounce from './useDebounce';
import SkeletonCard from './SkeletonCard';

function App() {

  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    async function fetchData() {
      // setLoading(true);
      setCountries([]);

      const data = await fetch(
        `https://restcountries.com/v3.1/name/${debouncedSearch}`
      ).then((res) => res.json());
      if (data.status !== 404) {
        setCountries(data);
      }

      setLoading(false);
    }
    if (debouncedSearch) fetchData();
  }, [debouncedSearch])

  return (
    <div className="App m-5 text-center">
      <div className='text-center my-5'>
        <input placeholder='Enter country...' type='search' className='form-control w-50 mx-auto shadow' onChange={(e) => { setSearch(e.target.value); setLoading(true) }}></input>
      </div>
      <div className='text-center justify-content-center d-flex flex-wrap'>

        {countries.map((item, index) => loading === true ? <SkeletonCard key={index} /> : <Card props={item} key={index} />)}
      </div>
    </div>
  );
}

export default App;
