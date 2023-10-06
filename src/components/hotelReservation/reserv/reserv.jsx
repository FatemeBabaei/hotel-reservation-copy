import { useNavigate } from "react-router-dom";
import { Calendar } from "../datePicker";
import { useState } from "react";

export default function Reserv() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState(1);
  const [person, setPerson] = useState(1);
  const navigate = useNavigate();

  {person < 1 && setPerson(person + 1)}
  {room < 1 && setRoom(room + 1)}

  function handleSave() {
    alert("Your hotel reservation has been successfully registered");
    navigate("/home");
  }

  return (
    <div>
      <nav className="nav">
        <h4 className="container text-white fw-semibold my-3">booking.com</h4>
      </nav>

      <div className="container fs-4">
        <h1 className="d-flex justify-content-center my-5">
          Hotel Reservation
        </h1>

        <div className="d-flex justify-content-center">
          <label>Name:</label>
          <input className="w-50" type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" />
        </div>
        <div className="d-flex justify-content-center my-3">
          <label>Email :</label>
          <input className="w-50" type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" />
        </div>
        <div className="d-flex justify-content-center my-4">
          <label>parson:</label>
          <label>{person}</label>
          <button className="btn btn-outline-success" onClick={() => setPerson(person + 1)}>+</button>
          <button
            className="btn btn-outline-danger"
            onClick={() => setPerson(person - 1)}
          >
            -
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <label>Room:</label>
          <label>{room}</label>
          <button className="btn btn-outline-success" onClick={() => setRoom(room + 1)}>+</button>
          <button className="btn btn-outline-danger" onClick={() => setRoom(room - 1)}>-</button>
        </div>

        <h4 className="d-flex justify-content-center mt-5">Entry Date:</h4>
        <div className="d-flex justify-content-center">
          <Calendar />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary w-25 my-5" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
