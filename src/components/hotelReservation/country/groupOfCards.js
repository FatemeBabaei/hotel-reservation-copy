import { countresInformation } from "../../DATA";
import { CountriesCard } from "./index";

export default function GroupOfCards() {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {countresInformation.map((item) => {
        return (
          <CountriesCard
            key={item.Id}
            url={item.Url}
            name={item.Name}
            description={item.Description}
          />
        );
      })}
    </div>
  );
}



