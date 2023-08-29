import "./App.css";
import { useState, useEffect } from "react";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filterMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await res.json();
        setMonsters(() => {
          return [...users];
        });
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    setFilterMonsters(() =>
      monsters.filter((m) => m.name.toLowerCase().includes(searchField))
    );
  }, [monsters, searchField]);

  const onSearch = (e) => {
    setSearchField(() => e.target.value.toLowerCase());
  };

  return (
    <>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={(e) => onSearch(e)}
        placeHolder={"Search Monsters"}
        className={"search-box"}
      />
      <CardList monstersFiltered={filterMonsters} />
    </>
  );
};

export default App;
