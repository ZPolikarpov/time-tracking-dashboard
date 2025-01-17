import { useEffect, useState } from "react"
import icon_ellipsis from "./assets/images/icon-ellipsis.svg"
import img_jeremy from "./assets/images/image-jeremy.png"

function App() {
  const [timeframe, setTimeframe] = useState("daily")
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((oResponse) => {
        return oResponse.json();
      })
      .then((arData) => {
        setData(arData)
      });
  }, []);


	return (
		<>
			<main className="container" data-type="full-bleed">
        <div className="dashboard">
          <div className="card" data-type="profile">
            <div className="card__header">
              <img className="avatar" src={img_jeremy} alt="Portrait of a smiling man" />
              <div>
                <p className="fs-300">Report for</p>
                <h2 className="heading-2 | fw-light margin-block-start-2">Jeremy Robson</h2>
              </div>
            </div>
            <div className="card__body">
              <button className="button | capitalize" data-type="transparent" data-active={timeframe === "daily"}
                onClick={() => {setTimeframe("daily")}}>Daily</button>
              <button className="button | capitalize" data-type="transparent" data-active={timeframe === "weekly"}
                onClick={() => {setTimeframe("weekly")}}>Weekly</button>
              <button className="button | capitalize" data-type="transparent" data-active={timeframe === "monthly"}
                onClick={() => {setTimeframe("monthly")}}>Monthly</button>
            </div>
          </div>
          { 
            data.map((oCategory, index) => {
              return <div key={index} className="card" data-type="activity" data-category={oCategory.title}>
                <div className="card__inner">
                  <div className="card__header">
                    <h3 className="card__heading">{oCategory.title}</h3>
                    <button className="button | hover-white" data-type="transparent"><img src={icon_ellipsis} alt="Details Button" /></button>
                  </div>
                  <div className="card__body">
                    <h1 className="heading-1 | fw-light">{oCategory.timeframes[timeframe].current}hrs</h1>
                    <p className="fs-300">Last Week - {oCategory.timeframes[timeframe].previous}hrs</p>
                  </div>
                </div>
              </div>
            })
          }
        </div>
      </main>
		</>
  )
}

export default App
