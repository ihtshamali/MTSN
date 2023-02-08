import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Link from 'next/link';
import vue from '../services/web-dev/vue.png'
import laravel from '../services/web-dev/laravel.png'
import node from '../services/web-dev/node.png'
import js from '../services/web-dev/js.png'
import react from '../services/web-dev/react.png'
import laptop from '../services/web-dev/laptop.png'
import Blockchain from '../services/blockchain-dev/blockchain.png'
import ios from '../services/mobile-dev/ios.png'
import android from '../services/mobile-dev/android.png'
import flutter from '../services/mobile-dev/flutter.png'
import bitcoin from '../services/blockchain-dev/1.png'
import img2 from '../services/blockchain-dev/2.png'
import img3 from '../services/blockchain-dev/3.png'
import img4 from '../services/blockchain-dev/4.png'
import img5 from '../services/blockchain-dev/5.png'
import photoshop from '../services/deisgn/photoshop.png'
import sketch from '../services/deisgn/sketch.png'
import figma from '../services/deisgn/figma.png'
import xd from '../services/deisgn/xd.png'
import python from '../services/ai/python.png'
import java from '../services/ai/java.png'
import cpp from '../services/ai/cpp.png'
import ruby from '../services/ai/ruby.png'
import ai from '../services/ai/ai-img.png'
import design from '../services/deisgn/design.png'
import mobile from '../services/mobile-dev/mobile-img.png'
import Image from "next/image";


export default class CenterMode extends Component {
  render() {
    var settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    };
    return (
      <Container>
        <div className="text-white d-md-none">
          <Slider {...settings}>

            <div className="">
              <div className="bg-black-tint d-flex flex-column p-4 p-sm-8 col">
                <h3 className="h2 text-white mb-4 mb-lg-8">Web Development</h3>
                <p>
                  Need help with your SaaS and CRM web apps? Our dedicated teams provide the expert-level
                  end-to-end development required to produce a high-quality product.
                </p>
                <ul className='margin-1 ms-n5 list-unstyled mb-8 d-flex justify-content-start'>
                  <li className='ps-3'>
                    <Image src={react}
                      alt="ReactJS"
                      width={35}
                      height={35} />
                  </li>
                  <li className='ps-3'>
                    <Image src={vue}
                      alt="VueJS"
                      width={35}
                      height={35} />
                  </li>
                  <li className='ps-3'>
                    <Image src={js}
                      alt="JavaScript"
                      width={35}
                      height={35} />
                  </li>
                  <li className='ps-3'>
                    <Image src={node}
                      alt="Node"
                      width={33}
                      height={35} />
                  </li>
                  
                </ul>
                <Link className='text-white text-decoration-none' href={'/services/web-development'}>
                  View Work<span className='arrow-right mt-1 ms-2'>
                  </span>
                </Link>
              </div>
            </div>


            <div className="bg-black-tint d-flex flex-column p-4 p-sm-8 col">
              <h3 className="h2 text-white mb-4 mb-lg-8">Mobile Development</h3>
              <p>
                MTSN provides the skilled development team
                and infrastructure needed to create successful
                and profitable mobile apps that captivate users.
              </p>
              <ul className='margin-1 ms-n5 list-unstyled mb-8 d-flex justify-content-start'>
                <li className='ps-3'>
                  <Image src={ios}
                    alt="ios"
                    width={40}
                    height={40} />
                </li>
                <li className='ps-3'>
                  <Image src={android}
                    alt="android"
                    width={35}
                    height={35} />
                </li>
                <li className='ps-3'>
                  <Image src={flutter}
                    alt="flutter"
                    width={35}
                    height={35} />
                </li>
                <li className='ps-3'>
                  <Image src={react}
                    alt="react"
                    width={33}
                    height={35} />
                </li>
              </ul>
              <Link className='text-white text-decoration-none' href={'/services/mobile-development'}>
                View Work<span className='arrow-right mt-1 ms-2'></span>
              </Link>

            </div>

            {/* <div className="bg-black-tint d-flex flex-column p-4 p-sm-8 col">
              <h3 className="h2 text-white mb-4 mb-lg-8">Blockchain Development</h3>
              <p>
                MTSN's experienced blockchain development
                experts are equipped to assist with the creation
                of blockchain technology and NFT marketplaces.
                Contact us to learn more about the benefits of
                working with a tailored team.
              </p>
              <ul className='margin-1 ms-n5 list-unstyled mb-8 d-flex justify-content-start'>
                <li className='ps-3'>
                  <Image src={bitcoin}
                    alt="bitcoin"
                    width={35}
                    height={35} />
                </li>
                <li className='ps-3'>
                  <Image src={img2}
                    alt="img2"
                    width={35}
                    height={35} />
                </li>
                <li className='ps-3'>
                  <Image src={img3}
                    alt="img3"
                    width={35}
                    height={35} />
                </li>
                <li className='ps-3'>
                  <Image src={img4}
                    alt="img4"
                    width={33}
                    height={35} />
                </li>
                <li className='ps-3'>
                  <Image src={img5}
                    alt="img5"
                    width={35}
                    height={35} />
                </li>
              </ul>
              <Link className='text-white text-decoration-none' href={'/services/blockchain-development'}>View Work<span className='arrow-right mt-1 ms-2'></span></Link>

            </div> */}

            <div className="bg-black-tint d-flex flex-column p-4 p-sm-8 col">
              <h3 className="h2 text-white mb-4 mb-lg-8">Design</h3>
              <p>
                MTSN offers quick access to expert UI/UX
                design teams to support the success of your
                projects, even if you lack the internal resources
                or time to handle the work in-house.
              </p>
              <ul className='margin-1 ms-n5 list-unstyled mb-8 d-flex justify-content-start'>
                <li className='ps-3'>
                  <Image src={photoshop}
                    alt="photoshop"
                    width={35}
                    height={35} />
                </li>
                <li className='ps-3'>
                  <Image src={sketch}
                    alt="sketch"
                    width={35}
                    height={35} />
                </li>
                <li className='ps-3'>
                  <Image src={figma}
                    alt="figma"
                    width={25}
                    height={40}
                  />
                </li>
                <li className='ps-3'>
                  <Image src={xd}
                    alt="xd"
                    width={33}
                    height={30} />
                </li>
              </ul>
              <Link className='text-white text-decoration-none' href={'/services/design'}>View Work<span className='arrow-right mt-1 ms-2'></span></Link>

            </div>

          </Slider>
        </div>
      </Container>
    );
  }
}