import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "../pages/comics.css";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--marvel-backend--574qbjcqcwyr.code.run/api/comics"
      );
      // console.log(response.data);
      setData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <div>Chargement...</div>
  ) : (
    <>
      <div className="comics-list">
        {data.map((data) => (
          <div key={data._id} className="comic-card">
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt={data.name}
            />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comics;
