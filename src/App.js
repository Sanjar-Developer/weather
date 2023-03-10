
import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./style.css"

const icon = require("../src/img/icon.png")

function App() {
  const [key, setKey]= useState()
  const [data, setData] = useState()
  const [value, setValue] = useState()
  
  const gtw = () => {
    let key = "84a3781201a7f9a9bda21e4f05b6c2f0"
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=${key}`)
      .then((res) => {
        setData(res?.data)
      })
  }
  console.log(data)
  return (
    <>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={8} xxl={4}>
            <div className="card_w">
              <div className="FRF">
                <input type="text" placeholder='Search' onChange={(e) => setValue(e.target.value)} />
                <button className='batn' onClick={gtw} >Search </button>
                </div>
                <h1>{data?.name}</h1>
          <h3>{data?.weather[0]?.main}</h3>
                <img className='bulut' src={icon} />
                <h2 className='dagre'>{Math.round(data?.main?.temp)}</h2>
                <ul className="box">
                  <li className="libox">Max: <span>{Math.round(data?.main?.temp_max)}</span></li>
                  <div className="line"></div>
                  <li className="libox">Min: <span>{Math.round(data?.main?.temp_min)}</span></li>
                </ul>
              </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;