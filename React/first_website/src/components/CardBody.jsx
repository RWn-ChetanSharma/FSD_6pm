import React from 'react'
import Card from './Card'

function CardBody() {
  return (
    <>
    <div className="container-fluid text-bg-info">

        <div className="container p-5 text-bg-dark">
            <div className="row">
                <div className="col"><Card title= "Chetan"/></div>
                <div className="col"><Card title= "Mitan"/></div>
                <div className="col"><Card title= "Ishit"/></div>
                <div className="col"><Card title= "Vinit"/></div>
                <div className="col"><Card title= "Parth"/></div>
                <div className="col"><Card title= "Mohit"/></div>
                <div className="col"><Card title= "Vansh"/></div>
                <div className="col"><Card title= "Dhruvi"/></div>
                <div className="col"><Card title= "Devna"/></div>
                <div className="col"><Card title= "Rudra"/></div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default CardBody