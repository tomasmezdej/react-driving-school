import Banner from "../Cards/Banner";
import InfoCard from "../Cards/InfoCard";

export default function MainPageBody() {
  return (
    <div className="mainPageBody">
      <div className="row">
        <div className="col-12">
          <Banner />
        </div>
      </div>
      <div className="row" style={{"margin-top": "150px"}}>
        <div className="col-6">
          <InfoCard />
        </div>
        <div className="col-6">
          <InfoCard />
        </div>
      </div>
      <div className="row" style={{"margin-top": "150px"}}>
        <div className="col-6">
          <InfoCard />
        </div>
        <div className="col-6">
          <InfoCard />
        </div>
      </div>
      <div className="row" style={{"margin-top": "150px"}}>
        <div className="col-6">
          <InfoCard />
        </div>
        <div className="col-6">
          <InfoCard />
        </div>
      </div>
      <div className="row" style={{"margin-top": "150px"}}>
        <div className="col-6">
          <InfoCard />
        </div>
        <div className="col-6">
          <InfoCard />
        </div>
      </div>
    </div>
  )
}