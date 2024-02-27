import React, { useEffect, useRef } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import mcm from "../assets/Centennial_Logo.png"
import aws2 from "../assets/awsBadge.png"
import ibm from "../assets/Badges_v8-07_Practitioner.png"
import { Divider } from 'antd'

function Education() {

  return (
    <DefaultLayout>
      <div className='container'>
        <div className='row'>
          <h1>Degree</h1>
          <div className='col-lg-12 d-flex justify-content-center'>
            <div className='bxs p-3 onBig'>
              <img src={mcm} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>McMurry University</b></h3>
              <p>Abilene, Texas</p>
              <p>Bachelors of Science | Computer Science</p>
            </div>
          </div>
        </div>
        <div className='row pt-5'>
          <h1>Certifications</h1>
          <div className='col-lg-6 mb-3 d-flex justify-content-center'>
            <div className='bxs p-3 onBig-2'>
              <img src={aws2} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>Amazon Web Services (AWS)</b></h3>
              <p>Cloud Practitioner</p>
            </div>
          </div>
          <div className='col-lg-6 mb-3 d-flex justify-content-center'>
            <div className='bxs p-3 onBig-2'>
              <img src={ibm} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>IBM</b></h3>
              <p>Enterprise Design Thinking Practitioner</p>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Education