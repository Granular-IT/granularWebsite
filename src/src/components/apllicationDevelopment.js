import React from 'react';
import styles from '../components/apllicationDevelopment.module.css'

export default () => (
    <> 
    <div className={`${styles.service_item} ${styles.apps} row m-0 service_item`}>
       
           <div className={"col-12 col-md-6"}>
                    <h1>
                            Application Development
                    </h1>
                        <hr/>
                    <p>We build and manage bespoke applications for business. Located in London and Nairobi we empower young people to grow their careers in a challenging environment. Our focus on people is what makes us an effective business partner. #JamStack #ReactJs #ServerlessAPI are the tools we build great applications on.</p>
                    <p>We would genuinely love to hear from you, whatever your situation. Please get in touch directly using email or social media.</p>
           </div>
           <div className={"col-12 col-md-6"}>
               <div className={"services_images"}>
               <img alt="Application Development" src="https://images.ctfassets.net/ac2ngyy3c6dw/5y0BaSn9cJMGnSw7mtJbgM/3c36787c95ccf9f151419f8593013088/ipad.png"/>
               </div>
           </div>
     
    </div>
    </>
)