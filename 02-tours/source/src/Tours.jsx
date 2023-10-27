import React from "react";
import Tour from "./Tour";

import { useEffect, useState } from "react";
import axios from "axios";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
  const [tours, setTours] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setTours(res.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeHandler = (e) => {
    setTours(tours.filter((tour) => tour.id !== e));
  };

  return (
    <section className="flex">
      {loading ? (
        <p className="loading"></p>
      ) : (
        <h2 style={{ marginBottom: "20px" }}>
          {tours?.length > 0 ? "Our Tours" : "No Tours Left"}
        </h2>
      )}
      {error && (
        <h4 style={{ color: "red", textAlign: "center" }}>
          Something went wrong...
        </h4>
      )}
      {!loading &&
        !error &&
        (tours?.length > 0 ? (
          <div className="tours">
            {tours.map((tour) => (
              <Tour key={tour.id} {...tour} removeHandler={removeHandler} />
            ))}
          </div>
        ) : (
          <button className="btn" onClick={() => fetchData()}>
            Refresh
          </button>
        ))}
    </section>
  );
};

export default Tours;
