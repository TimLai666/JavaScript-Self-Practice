import { getWashData } from "./api/wash";
import "./App.css";
import ItemCard from "./components/ItemCard";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const newdata = await getWashData()
      console.log(newdata);
      setData(newdata.data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("done");
      setLoading(false);
    }
  };

  useEffect(() => {
    loading && setData([]);
  }, [loading]);

  return (
    <>
      <button onClick={getData}>Call API</button>
      <div className="item-container">
        {loading && <div>loading...</div>}
        {data.map((item, i) => (
          <div className="item" key={i}>
            <ItemCard title={item.月份} km={item.合計km} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
