import React , {useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch("https://fortnite-api.p.rapidapi.com/upcoming-items/en", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "fortnite-api.p.rapidapi.com",
                "x-rapidapi-key": "f28089e4bemsh3de4c73967e1d36p12e39cjsn60ffe215d2f8"
            }
        })

        const items = await data.json();
        console.log(items.items);
        setItems(items.items);
        
    }

    

  return (
    <div>
      {items.map(item => (
          <h1 key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </h1>
      ))}
    </div>
  );
}

export default Shop;
