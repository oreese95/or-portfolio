import React, { useRef, useEffect } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import or from "../assets/ORFace2.png"
import bs5 from "../assets/bootstrap-5-1.svg"
import css from "../assets/css.png"
import html from "../assets/html5-12.png"
import js from "../assets/JavaScript-logo.png"
import node from "../assets/node.png"
import njs from "../assets/nodejs.png"
import git from "../assets/icons8-github-30.png"
import gmail from "../assets/icons8-gmail-144.png"
import light from "../assets/light.png"
import fig from "../assets/Figma-1-logo.png"
import sktch from "../assets/Sketch_Logo.svg.png"
import gcld from "../assets/google cloud.png"
import aws from "../assets/aws.png"
import mdb from "../assets/MongoDB-Emblem.png"
import xd from "../assets/adobe-xd-logo-png-transparent.png"
import strp from "../assets/Stripe-Emblem.png"
import shpfy from "../assets/shopify-partner-logo.png"
import sqr from "../assets/square Logo.png"
import { Divider } from 'antd'
import { Typewriter } from 'react-simple-typewriter'

function Home() {

    return (
        <DefaultLayout>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 pt-5'>
                        <h1><b>Odis Reese</b></h1>
                        <div className="flex">
                            <h3 className='color'><Typewriter words={['UI/UX Designer.', 'Front End Developer;', 'UX Researcher.', 'AWS Cloud Architect.', 'Entrepreneur.']} cursor loop={false} /></h3>
                        </div>
                        {/* <h3>Developer;<br />designer.<br />Business Strategist</h3> */}
                        <p>A dedicated individual who always strives to work on end to end products which develop sustainable, inovative, and scalable technial systems to create impact.</p>
                        <div className='pb-3'>
                            <a href='https://github.com/oreese95' target="_blank"><img src={git} width="35"/></a>&nbsp;&nbsp;
                            <a href="mailto:Reese.Odis29@Gmail.com" target="_blank"><img src={gmail} width="35"/></a>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img src={or} width="430" />
                    </div>
                </div>
                <div className='row m-5'>
                    <div className='col-lg-12'>
                        <h3><b>What I Do?</b></h3>
                    </div>
                </div>
                <div className='row m-3 flex justify-content-center'>
                    <div className='col-lg-12 bxs p-3 onBig'>
                        <h4>Full Stack Development</h4>
                        <Divider style={{ backgroundColor: "dodgerblue" }} />
                        <div className=''>
                            <img className='m-1' src={html} width="50" />
                            <img className='m-1' src={css} width="50" />
                            <img className='m-1' src={js} width="50" />
                            <img className='m-1' src={bs5} width="50" />
                            <img className='m-1' src={node} width="50" />
                            <img className='m-1' src={njs} width="100" />
                        </div>
                        <p><img src={light} width="25" />Building responsive website front end using React</p>
                        <p><img src={light} width="25" />Creating application backend in Node and Express.</p>
                    </div>
                </div>
                <div className='row m-3 flex justify-content-center'>
                    <div className='col-lg-12 bxs p-3 onBig'>
                        <h4>UI/UX Design</h4>
                        <Divider style={{ backgroundColor: "dodgerblue" }} />
                        <div>
                            <img className='m-1' src={fig} width="50" />
                            <img className='m-1' src={sktch} width="50" />
                            <img className='m-1' src={xd} width="50" />
                        </div>
                        <p><img src={light} width="25" />Design highly attractive user interfaces for mobile and web applications</p>
                        <p><img src={light} width="25" />Create the flow of application functionalities to optimize user experience</p>
                    </div>
                </div>
                <div className='row m-3 flex justify-content-center'>
                    <div className='col-lg-12 bxs p-3 onBig'>
                        <h4>Cloud Infra-Architecture</h4>
                        <Divider style={{ backgroundColor: "dodgerblue" }} />
                        <div>
                            <img className='m-1' src={aws} width="70" />
                            <img className='m-1' src={gcld} width="50" />
                            <img className='m-1' src={mdb} width="25" />
                        </div>
                        <p><img src={light} width="25" />Hosting and maintain websities on virtual machine instances</p>
                        <p><img src={light} width="25" />Integration of databases</p>
                    </div>
                </div>
                <div className='row m-3 flex justify-content-center'>
                    <div className='col-lg-12 bxs p-3 onBig'>
                        <h4>Ecommerce &amp; Business Strategy</h4>
                        <Divider style={{ backgroundColor: "dodgerblue" }} />
                        <div>
                            <img className='m-1' src={shpfy} width="125" />
                            <img className='m-1' src={strp} width="80" />
                            <img className='m-1' src={sqr} width="50" />
                        </div>
                        <p><img src={light} width="25" />Strategize plans for marketing and sales through online channels for various online business types</p>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Home