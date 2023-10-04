import { useState } from "react";
import { GroupOfCards } from "../country";
import { Navbar } from "../navbar";
import { CountresInformation } from "../../DATA";

export default function Home() {
  const [keyword, setKeyword] = useState("");

  const search = CountresInformation.filter((item) => {
    return item.Name.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <div>
      <Navbar value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <div className="container">
        <h1 className="fw-semibold my-5">Travel around the world</h1>
        <GroupOfCards CountresInformation={search} />
      </div>
    </div>
  );
}
