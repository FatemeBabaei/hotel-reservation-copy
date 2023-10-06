import { useLocation } from "react-router-dom";
import { HotelsInformation } from "../../DATA";
import { HotelsCard } from "./index";

export default function ListOfHotels() {

  const location = useLocation();
  
  return (
    <div>
      <nav className="nav ">
        <h4 className="container text-white fw-semibold my-3">booking.com</h4>
      </nav>
      <div>
        {HotelsInformation
          .filter((item) => item.countryId === location.state.countryId)
          .map((item) => {
            return (
              <HotelsCard
                key={item.Id}
                url={item.url}
                star={item.star}
                name={item.Name}
              />
            );
          })}
        </div>
      </div>
  );
}
