import { useNavigate } from "react-router-dom";

export default function HotelsCard({ url, name, star }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="container card mb-3 w-75 mt-5">
        <div className="row g-0">
          <div className="col-4">
            <img className="img-fluid" src={require("../../Images/" + url)} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{`star: ${star}`}</p>
              <br />
              <button className="btn bg-primary border-0 text-white" onClick={() => navigate("/reserv")} >
                reserv
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
