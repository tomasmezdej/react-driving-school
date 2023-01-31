

import Banner from "../Cards/Banner";
import InfoCard from "../Cards/InfoCard";

export default function MainPageBody() {
  return (
    <div className="mainPageBody">
      <div className="row mb-5">
        <div className="col-12 mb-5">
          <Banner />
        </div>
      </div>
      <div className="row mt-15" style={{"margin-top": "150px"}}>
        <div className="col-6 d-flex justify-content-center">
          <InfoCard />
        </div>
        <div className="col-6 d-flex justify-content-center">
          <InfoCard />
        </div>
      </div>
    </div>
  )
}