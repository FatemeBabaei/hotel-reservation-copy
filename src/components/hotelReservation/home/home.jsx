import { useState } from "react";
import { GroupOfCards } from "../country";
import { Navbar } from "../navbar";
import { CountresInformation } from "../../DATA";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [countres, setCountres] = useState(CountresInformation);

  function handleOnKeyDown (e) {
    setKeyword(e.target.value);
    if(e.key === "Enter") {
      const search = CountresInformation.filter((item) => {
        return item.Name.toLowerCase().includes(keyword.toLowerCase());
      })
      setCountres(search);
    }
  }

  return (
    <div>
      <Navbar onkeydown={handleOnKeyDown} />
      <div className="container">
        <h1 className="fw-semibold my-5">Travel around the world</h1>
        <GroupOfCards CountresInformation={countres} />
      </div>
    </div>
  );
}