import React from 'react'
import TeamMember from './TeamMember'

function TeamDisp() {
  return (
    <>
    <section id='team'>
        <div className="container">
            <div className="row">
                <div className="col-50"><TeamMember name="Parth" para= "Hey, I'm MERN stack Developer"/></div>
                <div className="col-50"><TeamMember name="Dhruvi" para= "Hey, I'm Fullstack Developer"/></div>
                <div className="col-50"><TeamMember name="Devna" para= "Hey, I'm Java Developer"/></div>
                <div className="col-50"><TeamMember name="Mohit" para= "Hey, I'm CEO at Garba Night"/></div>
            </div>
        </div>

    </section>
    
    </>
  )
}

export default TeamDisp