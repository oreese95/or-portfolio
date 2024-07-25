import React, { useEffect, useRef } from 'react'
import DefaultLayout from '../components/DefaultLayout'
import mcm from "../assets/Centennial_Logo.png"
import aws2 from "../assets/awsBadge.png"
import ibmUX from "../assets/Badges_v8-07_Practitioner.png"
import ML from "../assets/ML_ibm.png"
import compVis from "../assets/compVis.png"
import deepL from "../assets/DeepLearn_ibm.png"
import dnn from "../assets/DNNPT.png"
import DL_TF from "../assets/DL_TF.png"
import ibm from "../assets/Professional_Certificate_-_AI_Engineering.png"
import { Divider } from 'antd'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

function Education() {

  return (
    <DefaultLayout>
      <div className='container pt-3'>
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
          <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className='bxs p-3 onBig-2'>
              <img src={ibm} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>IBM</b></h3>
              <p>AI Engineering Professional</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3 onBig-2'>
              <img src={aws2} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>Amazon Web Services</b></h3>
              <p>Cloud Practitioner</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3 onBig-2'>
              <img src={ibmUX} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>IBM</b></h3>
              <p>Enterprise Design Thinking Practitioner</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3 onBig-2'>
              <img src={ML} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>IBM</b></h3>
              <p>Machine Learning with Python</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3 onBig-2'>
              <img src={deepL} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>IBM</b></h3>
              <p>Deep Learning with Keras</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3 onBig-2'>
              <img src={compVis} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>IBM</b></h3>
              <p>Computer Vision and Image Processing</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3 onBig-2'>
              <img src={dnn} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>IBM</b></h3>
              <p>Deep Neural Networks with PyTorch</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='bxs p-3 onBig-2'>
              <img src={DL_TF} width="150" />
              <Divider style={{ backgroundColor: "dodgerblue" }} />
              <h3><b>IBM</b></h3>
              <p>Deep Learning with Tensorflow</p>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Education