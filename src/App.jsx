import { useEffect, useState } from "react"
import icon_ellipsis from "./assets/images/icon-ellipsis.svg"

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
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
        <div className="card"></div>
        { 
          data.map((oCategory, index) => {
            return <div key={index} className="card" data-category={oCategory.title}>
              <div className="card__inner">
                <div className="card__header">
                  <h3 className="card__heading">{oCategory.title}</h3>
                  <button className="button" data-type="transparent"><img src={icon_ellipsis} alt="Details Button" /></button>
                </div>
                <div className="card__body">
                  <h1 className="heading-1">{oCategory.timeframes.daily.current}hrs</h1>
                  <p>Last Week - {oCategory.timeframes.daily.previous}hrs</p>
                </div>
              </div>
            </div>
          })
        }
      </main>
		</>
  )
}

export default App
