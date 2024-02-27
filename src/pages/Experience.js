import { Divider } from 'antd'
import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import overview from "../assets/case study/18C7D2B8-9733-4D51-8211-ADE3BCFEBA41_1_105_c.jpeg"
import goals from "../assets/case study/3F6B34B4-8AC3-4586-8162-57B2F969D241_1_105_c.jpeg"
import users from "../assets/case study/users.jpeg"
import mkt from "../assets/case study/C53B0814-99EB-43FD-8867-83D27F55C6AC_1_105_c.jpeg"
import sktch from "../assets/case study/645975E8-5CE3-48C9-900A-BBF36FE8EBCD_1_105_c.jpeg"
import final from "../assets/case study/8F12B141-979C-470A-BF06-39BF7DB38EBE_1_105_c.jpeg"

function Experience() {
  return (
    <DefaultLayout>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-start'>
            <h2><b>OpenTable</b></h2>
            <p>OpenTable is an online restaurant-reservation service company, that allows you to reserve, or modify your reservation—anytime, anywhere.</p>
          </div>
        </div>
        <Divider />
        <div className='row'>
          <div className='col-lg-3 d-flex align-items-center'>
            <h4>Overview</h4>
          </div>
          <div className='col-lg-9'>
            <img className='img-fluid' src={overview} width="700" />
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className="col-lg-4">
            <h4><b>Objective</b></h4>
            <p>Make customers feel safe and informed during their dining experience, and help restaurants
              adapt to the demand of outdoor dining and safety precautions brought on by the COVID-19
              pandemic.</p>
            <br />
          </div>
          <div className="col-lg-4">
            <h4><b>My Role</b></h4>
            <p>UX Research<br />UI Design<br />Wireframes</p>
            <br />
          </div>
          <div className="col-lg-4">
            <h4><b>Tools</b></h4>
            <p>Figma<br />Adobe Photoshop<br />Adobe Illustrator</p>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-lg-12'>
            <img className='img-fluid' src={goals} width="750" />
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col-lg-12'>
            <h4>Research</h4>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-lg-6'>
            <h4>Qualitative Interviews</h4>
            <img src={users} width="350" />
            <p className='text-start'>Since COVIC-19 impacted each and everyone vastly, everyone's experience was unique. I chose to conduct qualitative user interviews with a diverse range of people, in order to find opportunities to
              improve OpenTable's user experience on a personal level during this time.
            </p>
            <p className='text-start'> I interviewed with 6 OpenTable users, ranging in ages 20 to 62. Over a 3 day span, I gained two key insights from our users. I developed these findings
              into distinct problem statements to help empathize with the user’s thoughts and feelings as they move
              through the user experience.</p>
          </div>
          <div className='col-lg-6'>
            <h4>Market Analysis</h4>
            <p className='text-start'>After conducting interviews, I noticed there were mentions of ideal features from other platforms/products from the interviewees - I decided to do a market study of the current OpenTable app and its direct competitors.</p>
            <p className='text-start'>This step allowed me to gain more insight of how different platforms are integrating COVID-19 Health and Safety Protocols into their user experience.</p>
            <img className='img-fluid' src={mkt} width="500" />
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col-lg-6 d-flex align-items-center'>
            <h4>Problem Statements</h4>
          </div>
          <div className='col-lg-6'>
            <ol>
              <li className='text-start'>How might we allow users to indicate their flexibility when searching?</li>
              <li className='text-start'>How might we make the difference in safety precautions between restaurants visible to
                the user?</li>
            </ol>
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col-lg-3 d-flex align-items-center'>
            <h4>Sketches</h4>
          </div>
          <div className='col-lg-9'>
            <img className='img-fluid' src={sktch} />
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col-lg-3 d-flex align-items-center'>
            <h4>Solution</h4>
          </div>
          <div className='col-lg-9'>
            <img className='img-fluid' src={final} />
          </div>
        </div>
        <br />
        <br />
        <div className='row'>
          <div className='col-lg-12'>
            <h4>Reflection</h4>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className='col-lg-4'>
            <h4>Challenges</h4>
            <p className='text-start'>While my research supported the choice to use two problem statements, I found that this
              decision made things more complicated down the road. My team and I continuously found
              ourselves toggling our focus between the two, and eventually decided on making one statement
              our primary focus moving forward.<br /><br />
              This project taught me how important it is to continuously revisit the user. I find that it
              is easy to get lost in the details, to fall down the rabbit hole of perfection. As a team,
              we consistently went back to our research and persona to help us empathize with our users.
            </p>
          </div>
          <div className='col-lg-4'>
            <h4>Motivations</h4>
            <p className='text-start'>After synthesizing my data, I realized that a total redesign of the UI or navigation was
              unjustified. Our users had minimal pain points overall in regard to the overall experience,
              which allowed us the space to really get creative. As health has become more important than
              ever due to COVID-19, maximizing the safety of our users was our most important
              goal.<br /><br />One piece of the puzzle that I kept in mind throughout the process was the fact
              that the pandemic is temporary (or so we hope). While restaurants and dining out may never
              be the same, I can work to improve and enhance the experience for years to come. I wanted to
              implement a design that could be as temporary or permanent as necessary, without completely
              restructuring the experience for an issue that may be resolved within months.
            </p>
          </div>
          <div className='col-lg-4'>
            <h4>Next Steps</h4>
            <p className='text-start'>My primary goal moving forward is to make the experience all around more accessible. I want
              to design experiences that allow every single user the opportunity to interact. As more and
              more users find technology as a necessary part of their everyday lives, accessible design
              becomes increasingly vital.<br /><br /> After the final round of usability testing, I received
              feedback that the experience could be improved. Surprised? Of course not! The design process
              is never-ending. Learning from our users which items were hard to see, what may have
              confused them, or even what they loved about our product gave me all the more information
              about how we could make our design even better.
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Experience