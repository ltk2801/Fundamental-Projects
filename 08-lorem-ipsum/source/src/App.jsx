import { useEffect, useState } from "react";

import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [quantity, setQuantity] = useState(1);

  const [paragraph, setParagraph] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraph(data.slice(0, Number(quantity)));
  };

  return (
    <main>
      <div className="section-center">
        <h4>tired of boring lorem ipsum?</h4>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label htmlFor="quantity">Paragraphs :</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min={1}
            step={1}
            max={data.length}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
        <article className="lorem-text">
          {paragraph?.map((para) => (
            <p key={nanoid()}>{para}</p>
          ))}
        </article>
      </div>
    </main>
  );
};
export default App;
