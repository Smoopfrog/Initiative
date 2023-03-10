import { useState } from "react";
import styles from "./MonsterManualTab.module.css";
import MonsterCard from "./MonsterCard";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";

const MonsterManualTab = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(false);

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
      setSearchResults(false);
    } else {
      setSearchResults(data);
    }
  };

  const onEnterHandler = (event) => {
    if (event.key === 'Enter') {
      searchMonsterManual()
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["search-bar"]}>
        <div>
          <Input
            value={searchText}
            handleOnChange={handleSearchTextChange}
            onKeyDown={onEnterHandler}
            label="Search"
          />
        </div>
        <div>
          <Button onClick={searchMonsterManual}>Search</Button>
        </div>
      </div>
      {searchResults !== "notFound" && searchResults && (
        <MonsterCard monster={searchResults} />
      )}

      {/* {!searchResults && ( */}
      <div className={styles.warning}>
        Search for any monster in the &nbsp;
        <a
          href="https://5thsrd.org/gamemaster_rules/monster_indexes/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Official 5th Edition SRD.
        </a>
      </div>
      {/* )} */}
    </div>
  );
};

export default MonsterManualTab;
