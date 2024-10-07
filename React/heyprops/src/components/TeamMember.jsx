import React from 'react'
import Button from './Button'

// function TeamMember(props) {
    function TeamMember({name, para}) {
  return (
    <>
    <div className="card">
        <h1>{name}</h1>
        <p>{para}</p>
        <Button/>
    </div>
    {/* <div className="card">
        <h1>{props.name}</h1>
        <p>{props.para}</p>
        <button>Read More</button>
    </div> */}
    </>
  )
}

export default TeamMember