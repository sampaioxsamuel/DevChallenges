import React from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Author.module.css";
import { Ellipsis } from "react-spinners-css";

const Author = () => {
  const { id } = useParams();
  const [quotes, setQuotes] = React.useState(null);

  React.useEffect(() => {
    const getAuthorQuotes = async (id) => {
      const Garden = await fetch(
        `https://quote-garden.herokuapp.com/api/v2/authors/${id}`
      );
      const toJson = await Garden.json();
      setQuotes(toJson);
    };

    getAuthorQuotes(id);
  }, [id]);

  if (quotes === null)
    return (
      <div className={styles.loading}>
        <Ellipsis color="#F7DF94" />
      </div>
    );

  return (
    <section className={styles.quotes + " " + styles.animation}>
      <div>
        <Link to="/">
          <span className={styles.backArrow}>←</span>
        </Link>
        <h2 className={styles.author}>{id}</h2>
        {quotes.quotes.map((quote) => (
          <p key={quote._id} className={styles.quoteTexts}>
            {quote.quoteText}
          </p>
        ))}
      </div>
    </section>
  );
};

export default Author;
