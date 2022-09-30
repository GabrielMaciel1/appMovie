import React, { useState } from "react";
import styles from '../styles/Search.module.css'
import { useRouter } from "next/router";

const Search = () => {
  
  const [nameSearch, setNameSearch] = useState("");

    const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameSearch) return;

    router.push(`/search?q=${nameSearch}`);
    setNameSearch("");
  };

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          placeholder="Procurar"
          onChange={(e) => setNameSearch(e.target.value)}
          value={nameSearch}
        />
      </form>
    </section>
  );
};

export default Search;
