import React from 'react'

function NewsScreen() {
    
    return (
    <div className='background'>
            <div className='main-title d-flex justify-content-center' id='news-title'>
                <h1 className='light-gray'>Enterprise League <span className='reverse-color'>In the News</span></h1>
            </div>
            <div className='main-title d-flex justify-content-center none' id='press-title'>
                <h1 className='light-gray'>Enterprise League <span className='reverse-color'>Press</span></h1>
            </div>
            <div className='d-flex justify-content-center align-items-center gap-3'>
                <button className='button-main underline' id="in-the-news">In the News</button>
                <button className='button-main' id="press">Press</button>
            </div>
        <div className='news-screen'>
            <div id="news" className='news-page'>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/startupinfo.png')} id="startupinfo-logo" alt="startupinfo-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Enterprise League, Building the Fastest Growing Business Platform for Companies</h5>
                    <p className='news-page-card-text text-left'>That’s why it is important to optimize the way we gather and analyze user feedback. When creating our feedback forms, we focus on addressing common concerns and misunderstandings that we have heard about from our support channels. We often opt for the personal approach with our users and are in regular contact with them through social media and email.
                    <br/> <br/>
                    Irina Georgieva CEO and co-founder of Enterprise League
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/business-insider-logo.png')} id="business-insider-logo" alt="business-insider-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Best online business communities</h5>
                    <p className='news-page-card-text text-left'>Enterprise League is a platform that connects SMEs, enabling them to find business partnerships and collaborations. The Al-powered online platform allows users to screen potential partnerships quickly, and organize existing ones. The aim is to help your business become more visible, and grow faster, something Enterprise League knows all about - it's fast-growing business itself.
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/classicinformatics.png')} id="classicinformatics-logo" alt="classicinformatics-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Best Business Apps</h5>
                    <p className='news-page-card-text text-left'>Irina Georgieva, Co-Founder & CEO of Enterprise League tells that ‘Enterprise League’ is the fastest growing business platform for startups and SMEs, having acquired circa 100K users in 2020 alone. Powered by a smart search algorithm, companies get recommended business opportunities tailored to their preferences. Companies use the platform to take back control over their finances and operations, reduce business dependencies like relying on middlemen, limited clients, weak supply chain, and more.
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/startup.png')} id="startup-logo" alt="startup-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Top 101 small and medium businesses and startups</h5>
                    <p className='news-page-card-text text-left'>At Enterprise League, we are passionate about helping people improve the way they do business. We are on a mission to help millions of entrepreneurs expand their business horizon and increase their company’s success.
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/uknews.png')} id="uknews-logo" alt="uknews-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Top 101 smaBusiness platform Enterprise League sees unprecedented user growth</h5>
                    <p className='news-page-card-text text-left'>Enterprise League is extremely proud to share such results particularly since it is facilitating the way companies collaborate during these difficult times we are facing. We are constantly collecting first-hand feedback from our users with the sole purpose of creating and providing more value to companies within the UK.
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/umi.png')} id="umi-logo" alt="umi-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Startup Stories: Enterprise League</h5>
                    <p className='news-page-card-text text-left'>Enterprise League (EL) is a B2B platform for SMEs. Through EL’s platform, small businesses can advertise what their value offerings are for free and search for other firms they can do business with. Moreover, companies can specify exactly what they need at the moment through “bid” posts which are also searchable through our extensive search filters (location, industry, sector, number of employees, and specific keywords).
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/upgrade.png')} id="upgrade-logo" alt="upgrade-logo"/></div>
                    <h5 className='news-page-card-title text-left'>5 Cost effective ways to scale up your business</h5>
                    <p className='news-page-card-text text-left'>Many entrepreneurs around the world are under constant pressure to scale up their businesses. They repeatedly receive different bits of advice from both investors and advisors. One side wants to scale your business fast, whilst the other advises you to do go through the process patiently and carefully. To make things easier for you when choosing the best business scaling strategy, we will go through every detail you need to know, starting with the basics.
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/upjourney.png')} id="upjourney-logo" alt="upjourney-logo"/></div>
                    <h5 className='news-page-card-title text-left'>How to Stop Feeling Overwhelmed at Work (121 Powerful Tips)</h5>
                    <p className='news-page-card-text text-left'>At some point, you must realize that you need to change something if you want to keep your health and sanity, and still succeed with your business. I understood that, adapted to the situation and found a solution to this common problem that many entrepreneurs face.
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/prmoment.png')} id="prmoment-logo" alt="prmoment-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Reasons to be Cheerful about Brexit</h5>
                    <p className='news-page-card-text text-left'>We are expecting to fare even better as there will be an increasing need to connect EU and UK SMEs to work together. As we are breaking walls between countries, we are witnessing a lot of connections between companies from the same industry, meaning SMEs are open to collaborate with their fellow industry members, to expand knowledge and create new opportunities. This will undoubtedly trigger a surge in innovation and we can expect to see growth for SMEs.
                    <br/><br/>
                    Irina Georgieva CEO and co-founder of Enterprise League
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/globalapptesting.png')} id="globalapptesting-logo" alt="globalapptesting-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Time Management Techniques from CTOs</h5>
                    <p className='news-page-card-text text-left'>As a CTO the most important things for me are the productivity & efficiency of my team. Considering the fast-paced & information-saturated world we live in, it is crucial for us to be clear about the priorities for the team and how that reflects our goals
                    <br/><br/>
                    - Atanas Georgiev, Co-Founder & CTO of Enterprise League
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/cydomedia.png')} id="cydomedia-logo" alt="cydomedia-logo"/></div>
                    <h5 className='news-page-card-title text-left'>3 Entrepreneurs provide advice on leading teams with remote employees</h5>
                    <p className='news-page-card-text text-left'>At Enterprise League, people are our most valuable resources. Their contribution helps us keep the business platform running and growing despite the pandemic crisis we are currently facing.
                    <br/><br/>
                    As we have been constrained to rely solely on remote working, I have adopted weekly checkpoints for leading teams and weekly goss meetings to keep a quality communication level and recreate the team’s connection remotely.
                    <br/><br/>
                    Irina Georgieva CEO and co-founder of Enterprise League
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/tech-round-logo.png')} id="tech-round-logo" alt="tech-round-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Interview with Irina Georgieva, Co-founder and CEO of Enterprise League</h5>
                    <p className='news-page-card-text text-left'>We can expect to see Enterprise League to play a significant part in helping businesses out of the crisis caused by the pandemic. Many companies will turn to the platform in search for business deals and collaborations to fill out the gaps left by their clients and business partners.
                    <br/><br/>
                    To better address this need, we are working hard to quickly scale the platform to more countries besides the UK and USA where we have a solid presence. The aim is to create the world’s go-to place where business happens.
                    <br/><br/>
                    Irina Georgieva CEO and co-founder of Enterprise League
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/harmonizelyblog.png')} id="harmonizelyblog-logo" alt="harmonizelyblog-logo"/></div>
                    <h5 className='news-page-card-title text-left'>10+ insightful tips for new managers</h5>
                    <p className='news-page-card-text text-left'>In order to unleash your employees’ full potential, you must give them responsibilities. Allocate each employee processes which they own and manage independently. Your role will be to provide them with guidance and be available for consultations. Therefore giving them a sense of ownership and responsibility will enable them to grow in their role quicker and more successfully. It will challenge their time management and organizational skills but with time and perseverance, they will acquire skills that won’t come from micromanagement.
                    <br/><br/>
                    Irina Georgieva CEO and co-founder of Enterprise League
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/usco.png')} id="usco-logo" alt="usco-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Ways to cut overhead costs</h5>
                    <p className='news-page-card-text text-left'>Review your marketing mix [and] compare how much you are spending and gaining from each channel. If, for example, you are investing a lot in PR … but you don’t see a significant increase in your website traffic, it is very likely that you are targeting the wrong marketing channel.
                    <br/><br/>
                    Irina Georgieva CEO and co-founder of Enterprise League
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/mycorporation.png')} id="mycorporation-logo" alt="mycorporation-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Work from home outfit</h5>
                    <p className='news-page-card-text text-left'>A simple day dress is my to-go WFH outfit. It is easy to wear, and often very comfortable for long hours spent sitting on a desk. The main reasoning behind this type of outfit is to wear something that isn’t tight and makes you feel uncomfortable, that you cannot wait to take off after work.
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/welivetobuild.png')} id="welivetobuild-logo" alt="welivetobuild-logo"/></div>
                    <h5 className='news-page-card-title text-left'>CEO Interview - Irina Georgieva</h5>
                    <p className='news-page-card-text text-left'>The original idea was to bring more business opportunities to small companies around the world by giving them direct access to potential business collaborations and eliminate the need to rely on the middleman. This is still at the core of what we do.
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/carolroth.png')} id="carolroth-logo" alt="carolroth-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Positive Mindset Tips for Small Business</h5>
                    <p className='news-page-card-text text-left'>Focus on the things/aspects of your work that you can control. Be rational, put your energy towards identifying ways you can adapt your business e.g., increase your online presence, join seminars, do online networking, etc. Key is to think of ways to adapt your practices to fit the current situation we are facing.
                    <br/><br/>
                    Irina Georgieva CEO and co-founder of Enterprise League
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/workclub.png')} id="workclub-logo" alt="workclub-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Future of Works Interview - Irina Georgieva</h5>
                    <p className='news-page-card-text text-left'>Our goal has been to be very agile in terms of our employee performance and their processes. Thus we introduced monthly employee performance reviews to help us identify bottlenecks in a timely manner and work on eliminating these.
                    <br/>
                    Continuous feedback will remain to be an essential practice within our company as it’s essential to help our employees navigate their job responsibilities and meet performance expectations successfully.
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/beyourown.png')} id="beyourown-logo" alt="beyourown-logo"/></div>
                    <h5 className='news-page-card-title text-left'>Business Education for female entrepreneurs</h5>
                    <p className='news-page-card-text text-left'>The number of female entrepreneurs has been on the rise in recent years and now more than ever women are aspiring to achieve financial freedom. However, it is a fact that many are discouraged by the huge gap of knowledge they are faced with. Not knowing where to start and what steps they need to take, keeps women stuck in their 9-5 jobs.
                    <br/><br/>
                    Irina Georgieva CEO and co-founder of Enterprise League
                    </p>
                </div>
                <div className='news-page-card'>
                    <div className='news-page-card-img'><img src={require('../assests/femfounder.png')} id="femfounder-logo" alt="femfounder-logo"/></div>
                    <h5 className='news-page-card-title text-left'>From a communist country to a London entrepreneur, a female founder's journey with Irina Georgieva</h5>
                    <p className='news-page-card-text text-left'>Her company's mission is to empower small businesses to grow by enabling them to find new business opportunities quickly and easily.
                    </p>
                </div>
            </div>
        </div>
        <div className='press-page none' >
            <div className='press-page-item' id='press-page-item-one'>
                <img src={require('../assests/press-img-three.png')} id="press-img-three-logo" alt="press-img-three-logo"/>
                <h5 className='press-page-title'>2020 in review: A letter from our CEO and Co-Founder</h5>
                <p className='press-page-item-text press-page-subtitle'>London, UK, December 30th, 2020</p>
                <p className='press-page-item-text text-less' id='text-less-one'>Another year is drawing to a close; and we once again find ourselves planning for the future, but also reflecting on the events of 2020 – we hope that despite the difficulties and uncertainty this year has brought, you have managed to stay strong and focused on the things you can control. <br/></p>
                <p className='press-page-item-text text-more' id='text-more-one'>In that manner, Enterprise League has continued to work hard on connecting businesses worldwide. Our focus has always been to bring more business opportunities to small businesses. Thus, seeing how severely they suffered due to the pandemic, our drive to improve the platform, and provide them with better solutions, only grew stronger.
                    <br/>
                    <br/>
                    Thanks to nearly 100k new companies that joined the platform (a big milestone for us!) we got an unprecedented growth momentum which consequently brought us a humbling number of opportunities.
                    <br/>
                    <br/>
                    This success didn’t pass unrecognised – we had the privilege of being named as one of the best business platforms by the Business Insider.
                    <br/>
                    <br/>
                    Lead by the same currents of growth, this year we have formed deeper relationships with both new and old users, expanded our partners’ circle, and scaled our team.
                    <br/>
                    <br/>
                    As we reflect, we think about who we are and who we want to be, both personally and as a company. A commitment to quality and value is one of our fundamental business principles, we firmly believe in excelling in what we promise and deliver.
                    <br/><br/>
                    What we’re most proud of this year is that we’ve managed to provide the same high level of service and solutions to all companies, regardless of their background. Given that, we seek to make our solutions easily accessible – keeping the lines of communication open in order to help our users with their platform experience. We are committed to combine courage and wisdom to move forward; confidently pursuing growth and investment while not abandoning our values.
                    <br/><br/>
                    It is our hope that these things have all been clearly evident in the past year, and that they continue into the future. Finally, we once again express our sincere appreciation to all of our users, readers and collaborators; wishing you and your families a bright hopeful start to 2021.
                    <br/><br/>
                    Irina Georgieva
                    <br/>
                    Co-founder and CEO of Enterprise League
                </p>
                <button className='press-page-button' id='read-one'>Read More</button>
                <button className='press-page-button none' id='read-one-less'>Read Less</button>
            </div>
            <div className='press-page-item' id='press-page-item-two'>
                <img src={require('../assests/press-img-two.png')} id="press-img-two-logo" alt="press-img-two-logo"/>
                <h5 className='press-page-title'>Over 100,000 companies join business platform since the virus crisis started</h5>
                <p className='press-page-item-text press-page-subtitle'>London, UK, October 14th, 2020</p>
                <p className='press-page-item-text text-less' id='text-less-two'>London, UK, Oct 14th, Enterprise League today announced that it registered a huge increase of over 100,000 SMEs joining its business platform. Companies seek to minimise their business loss after their forced closure in more than 40 countries worldwide and ahead of a second lockdown.  <br/>“The only way for companies to survive is to reinvent themselves” said Enterprise League’s CTO, Atanas Georgiev. <br/></p>
                <p className='press-page-item-text text-more' id='text-more-two'>In that manner, Enterprise League has continued to work hard on connecting businesses worldwide. Our focus has always been to bring more business opportunities to small businesses. Thus, seeing how severely they suffered due to the pandemic, our drive to improve the platform, and provide them with better solutions, only grew stronger.
                    Among these SMEs are companies from various industries including: technology, retail, food, manufacturing, service providers and many more. Enterprise League facilitates the remote connection between businesses. The smart AI algorithm matches companies that have potential to collaborate with each other. 74% of the suggested business matches end up with a business deal.
                    <br/>
                    <br/>
                    The business platform is meant for every business in the world, from all sectors and all locations.
                    <br/>
                    Enterprise League is quickly becoming a known platform to identify and access new business opportunities, find business partners and close business deals all fully remotely. Designed to help all companies, even the ones most at risk during this crisis.
                </p>
                <button className='press-page-button' id='read-two'>Read More</button>
                <button className='press-page-button none' id='read-two-less'>Read Less</button>
            </div>
            <div className='press-page-item' id='press-page-item-three'>
                <img src={require('../assests/press-img-one.png')} id="press-img-one-logo" alt="press-img-one-logo"/>
                <h5 className='press-page-title'>The Solution to the Global Business #Lockdown</h5>
                <p className='press-page-item-text press-page-subtitle'>London, UK - March 26, 2020</p>
                <p className='press-page-item-text text-less' id='text-less-three'>Enterprise League today has announced that the B2B platform through which companies collaborate remotely is open to SMEs for free. This action comes as an attempt to help SMEs minimise the losses they are incurring due to the forced lockdown imposed in more than 40 countries worldwide. <br/>  Enterprise League facilitates the way SMEs find new business partnerships and deals through a sophisticated software powered by AI and machine learning.</p>
                <p className='press-page-item-text text-more' id='text-more-three'>SMEs can find opportunities that match their individual needs and allows them to publish business tenders as well as bid on tenders posted by other companies. Meant for every business in the world, from all sectors and all locations. Enterprise League is quickly becoming a known platform to identify and access new business opportunities, find business partners and shake deals all completely remotely.
                    <br/>
                    <br/>
                    “Amid this crisis the only way companies can survive is to reinvent themselves” said Enterprise League CTO, Atanas Georgiev. Designed to help all companies, even the ones most at risk during this crisis.
                </p>
                <button className='press-page-button' id='read-three'>Read More</button>
                <button className='press-page-button none' id='read-three-less'>Read Less</button>
            </div>
        </div>
    </div>
    
  )
}

export default NewsScreen;