import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import { getRandomLists } from "../../repository/repository";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    getRandomLists(type, genre).then((rs) => setLists(rs));
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
