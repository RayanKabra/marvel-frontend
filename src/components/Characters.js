import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/characters.css";

const Characters = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://site--marvel-backend--574qbjcqcwyr.code.run/api/characters"
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
      <div className="characters-list">
        {data.map((data) => (
          <div key={data._id} className="character-card">
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt={data.name}
            />
            <h2 className="content-title">{data.name}</h2>
            <p className="content-description">{data.description}</p>
            <Link to={`/characters/:id/comics`}>View Comics</Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage(page > 0 ? page - 1 : 0)}
          disabled={page === 0}
        >
          Précédent
        </button>
        <button onClick={() => setPage(page + 1)}>Suivant</button>
      </div>
    </>
  );
};

export default Characters;
