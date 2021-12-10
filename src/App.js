import "./styles.css";
import React, { useState } from "react";

var books = {
  selfHelp: [
    {
      name: "The Pursuit of Happyness",
      author: "Chris Gardner",
      rating: "5/5"
    },
    {
      name: "The Power of Your Subconscious Mind",
      author: "Joseph Murphy",
      rating: "4/5"
    },
    {
      name: "Atomic Habits",
      author: "James Clear",
      rating: "4/5"
    }
  ],
  spiritual: [
    {
      name: "Bhagavad Gita",
      rating: "5/5"
    },
    {
      name: "Living with the Himalayan Masters",
      author: "Swami Rama",
      rating: "4/5"
    },
    {
      name: "Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      rating: "4/5"
    }
  ],
  fiction: [
    {
      name: "Area 51",
      author: "Annie Jacobsen",
      rating: "5/5"
    },
    {
      name: "Hamlet",
      author: "William Shakespeare",
      rating: "4/5"
    },
    {
      name: "Harry Potter",
      author: "J. K. Rowling",
      rating: "4/5"
    }
  ]
};

var book = Object.keys(books);

export default function App() {
  var [typeAsked, setType] = useState("selfHelp");

  function genreClick(genre) {
    setType(genre);
  }

  return (
    <div className="App">
      <h1>📚Goodbooks</h1>
      <label>Checkout my favorite books. Select a genre to get started</label>
      <div>
        {book.map((genre) => (
          <button
            onClick={() => genreClick(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.6rem",
              background: "#efefef",
              padding: "1rem",
              border: "1px solid black",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {books[typeAsked].map((result) => (
            <li
              key={result.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #9CA3AF",
                width: "80%",
                borderRadius: "0.5rem",
                margin: "1rem 0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{result.name}</div>
              <div style={{ fontSize: "larger" }}>{result.author}</div>
              <div style={{ fontSize: "larger" }}>{result.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
