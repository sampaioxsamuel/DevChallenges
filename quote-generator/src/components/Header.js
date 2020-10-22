import React from "react";
import RandomIcon from "@material-ui/icons/Sync";
import styles from "./Header.module.css";
import { Link } from "@material-ui/core";
import { GlobalContext } from "./context/randomContext";

const Header = () => {
  const { random, getRandomQuote } = React.useContext(GlobalContext);

  const handleRandom = () => {
    getRandomQuote();
    console.log(random);
  };

  return (
    <header className={styles.header}>
      <div className={styles.icon}>
        <Link onClick={handleRandom}>
          <span className={styles.span}>
            random <RandomIcon className={styles.random} />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
