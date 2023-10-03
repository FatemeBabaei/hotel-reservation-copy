export default function CountriesCard({ url, name, description }) {
  return (
    <div>
      <div className="card my-5 mx-sm-4" style={{ width: "20rem" }}>
        <img
          height="250px"
          src={require("../../Images/" + url)}
          className="card-img-top w-100"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <button type="button" className="btn btn-primary text-white border-0">
            Show
          </button>
        </div>
      </div>
    </div>
  );
}
