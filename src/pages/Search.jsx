import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/BookCard";

function Search() {
  let { key } = useParams();
  const FEILDS =
    "kind,totalItems,items(id,selfLink,volumeInfo(title,authors,description,pageCount,averageRating,imageLinks))";
  const MAX_RESULTS = 20;
  const GOOGLE_BOOKS_API =
    "https://www.googleapis.com/books/v1/volumes?" +
    new URLSearchParams({
      q: key,
      fields: FEILDS,
      maxResults: MAX_RESULTS,
    });
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${GOOGLE_BOOKS_API}`)
      .then((response) => response.json())
      .then((object) => {
        setItems(object.items);
      });
    // eslint-disable-next-line
  }, [key]);

  return (
    <div className="container mx-auto max-w-5xl px-6 py-10 mt-40 md:mt-20">
      <h1 className="text-xl font-bold text-yellow-800 mb-4">Displaying Results for : <span className="font-bold text-orange-700">{key}</span></h1>
      <div className="grid-cols-1 md:grid md:grid-cols-2 gap-4">
        {items.map((e, i) => (
          <span className="hover:underline decoration-yellow-700 decoration-2"><Card data={e} key={i} /></span>
        ))}
      </div>
    </div>
  );
}

export default Search;