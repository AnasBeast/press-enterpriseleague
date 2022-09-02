import React from 'react'

export default function Overlay() {
  return (
    <div>
        <div className='side-navigation none'>
            <div className='side-navigation-container'>
                <div className='side-navigation-container-box'>
                    <div className='side-navigation-container-box-title'>Product</div>
                    <div className='dashes'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='side-navigation-container-menu'>
                        <a href="#" target="_self">
                            <img src={require('../assests/platform.png')} alt="platform"/>
                            Platform
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/get-listed.png")} alt="get-listed"/>
                            Get Listed
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/all-categories.png")} alt="all-categories"/>
                            All categories
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/tender-hub.png")} alt="tender-hub"/>
                            Tender Hub
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/directory-icon.png")} alt="directory"/>
                            Directory
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/marketplace-icon.png")} alt="marketplace"/>
                            Marketplace
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/compare-plans-icon.png")} alt="compare-plans"/>
                            Compare plans
                        </a> 
                    </div>
                </div>


                <div className='side-navigation-container-box'>
                    <div className='side-navigation-container-box-title'>Company</div>
                    <div className='dashes'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='side-navigation-container-menu'>
                        <a href="#" target="_self">
                            <img src={require('../assests/about-icon.png')} alt="about-icon"/>
                            About
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/team-icon.png")} alt="team-icon"/>
                            Team
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/careers-icon.png")} alt="careers-icon"/>
                            Careers
                        </a>
                        <a href="#" target="_self">
                            Advertise
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/contact.png")} alt="contact-icon"/>
                            Contact us
                        </a>
                        
                    </div>
                </div>
                <div className='side-navigation-container-box'>
                    <div className='side-navigation-container-box-title'>Product</div>
                    <div className='dashes'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='side-navigation-container-menu'>
                        <a href="#" target="_self">
                            <img src={require('../assests/solutions-icon.png')} alt="platform"/>
                            Solutions
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/newsroom-icon.png")} alt="newsroom-icon"/>
                            Newsroom
                        </a>
                        <a href="#" target="_self">
                            <img src={require("../assests/from-the-blog.png")} alt="from-the-blog"/>
                            From the blog
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className='side-navigation-buttons'>
                <a className='register-button'></a>
                <a target="_blank" className="log-in-button" href="#">Log in</a>
            </div>

            
        </div>
        <div className='header-navigation-mobile'>
                <div className='header-navigation-mobile-container'>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </div>
            </div>
    </div>
    
  )
}
