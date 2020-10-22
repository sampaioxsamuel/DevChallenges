import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./context/randomContext";
import styles from "./Quotes.module.css";
import { Ellipsis } from "react-spinners-css";

const Quotes = () => {
  const { random, loading } = useContext(GlobalContext);

  if (loading)
    return (
      <div className={styles.loading}>
        <Ellipsis color="#F7DF94" />
      </div>
    );
  if (random === null) return null;

  return (
    <section className={styles.quotes + " " + styles.animation}>
      <div className={styles.quoteText}>
        <span className={styles.block}></span>
        <p>"{random.quote.quoteText}"</p>
        <Link to={`author/${random.quote.quoteAuthor}`}>
          <div className={styles.author}>
            <h2>
              {random.quote.quoteAuthor} <span className={styles.arrow}>→</span>
            </h2>
            <span className={styles.genre}>{random.quote.quoteGenre}</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Quotes;
