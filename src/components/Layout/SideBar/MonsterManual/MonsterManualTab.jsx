import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectMonsterManual,
  setMonster,
  setMonsterNull,
} from "../../../../slices/monsterManualSlice";
import styles from "./MonsterManualTab.module.css";
import MonsterCard from "./MonsterCard";
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";

const MonsterManualTab = () => {
  const [searchText, setSearchText] = useState("");
  const [searchError, setSearchError] = useState(false);
  const dispatch = useDispatch();
  const monster = useSelector(selectMonsterManual);

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
      setSearchError(true);
      dispatch(setMonster());
    } else {
      console.log(data);
      dispatch(setMonster(data));
    }
  };

  const onEnterHandler = (event) => {
    if (event.key === "Enter") {
      searchMonsterManual();
    }
  };

  useEffect(() => {
    if (!searchError) {
      return;
    }

    setSearchError(true);

    const errorTimer = setTimeout(() => {
      setSearchError(false);
    }, 3000);

    return () => clearTimeout(errorTimer);
  }, [searchError]);

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
      {monster && <MonsterCard monster={monster} />}
      <div className={styles.warning}>
        {searchError && searchText && (
          <div className={styles["not-found"]}>
            "{searchText}" not found. Please Try again.
          </div>
        )}
        {searchError && !searchText && (
          <div className={styles["not-found"]}>
            Search for a monster by name above.
          </div>
        )}
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
