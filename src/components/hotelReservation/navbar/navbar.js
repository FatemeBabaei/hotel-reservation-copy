export default function Navbar() {
  return (
    <div className="nav">
      <div className="container">
        <div className="row pt-4">
          <label className="col-9 text-white fw-semibold">Booking.com</label>
          <div className="col-3 d-flex justify-content-end">
            <button className="btn btn-light">sing in</button>
          </div>
        </div>
        <div className="row">
          <h1 className="text-white pt-5 fw-bolder">Find your next stay</h1>
          <p className="text-white pb-5 fw-medium">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
        <div style={{ height: "50px" }}>
          <input
            className="h-100 w-100 border border-warning "
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}