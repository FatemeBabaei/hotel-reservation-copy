import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  function handleLoginButton() {
    if (keyword) {
      navigate("/home");
    } else {
      alert("please type Email");
    }
  }

  return (
    <div>
      <nav className="nav">
        <h4 className="container text-white fw-semibold">booking.com</h4>
      </nav>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-4 mt-5">
            <h3 className="fw-semibold">Login or create an account</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 mt-2">
            <h5>Email address :</h5>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 mt-5">
            <input
              type="email"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="col-12 col-lg-10 h-100"
              placeholder="babaeeii.fateme@gmail.com"
            />
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 my-4">
            <button
              className="btn btn-primary col-12 col-lg-10 h-100"
              onClick={handleLoginButton}
            >
              Continue with email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
