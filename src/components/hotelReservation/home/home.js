import { GroupOfCards } from "../country";
import { Navbar } from "../navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="fw-semibold my-5">Travel around the world</h1>
        <GroupOfCards />
      </div>
    </div>
  );
}
