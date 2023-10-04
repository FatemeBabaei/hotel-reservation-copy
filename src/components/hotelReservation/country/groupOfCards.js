import { CountriesCard } from "./index";

export default function GroupOfCards({ CountresInformation }) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {CountresInformation.map((item) => {
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
