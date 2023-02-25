import { useState } from "react";
import styles from './MonsterManualTab.module.css'
import MonsterCard from "./MonsterCard";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";

const MonsterManualTab = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState();

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const searchMonsterManual = async () => {
    const monster = searchText.trim().replace(/\s+/g, "-").toLowerCase();
    const response = await fetch(
      `https://www.dnd5eapi.co/api/monsters/${monster}`
    );
    const data = await response.json();

    if (!data.name) {
      setSearchResults("notFound");
    } else {
      setSearchResults(data);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["search-bar"]}>
        <Input
          value={searchText}
          handleOnChange={handleSearchTextChange}
          label="Search"
        />
        <Button onClick={searchMonsterManual}>Search</Button>
      </div>
      {searchResults !== "notFound" && searchResults && (
        <MonsterCard
          monster={searchResults}
        />
      )}

      {searchResults === "notFound" && <h2>Monster not found</h2>}
    </div>
  );
};

export default MonsterManualTab;
