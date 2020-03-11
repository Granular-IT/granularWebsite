import React from 'react';
import styles from '../components/devops.module.css'

export default () => (
    <> 
    <div className={`${styles.devops} service_item row`}>
      
        
        <div className={"col-12 col-md-6"}>
               <div className={"services_images"}>
               <img alt="Application Development" src="https://images.ctfassets.net/ac2ngyy3c6dw/2b19Y8scs6oUqgUggyEYoI/2baed363d6f7ae6e2e8826d54e437b00/mac.png"/>
               </div>
           </div>

           <div className={"col-12 col-md-6"}>
               <h1>
               DevOps
               </h1>
               <hr/>
               <p>
               Our DevOps team break the silos between developers, project managers and IT.  We provide quality assurance testers and integration automation to our projects as standard.

Our Devops are backed up by dedicated project managers.  #NETLIFY #AWS #GITHUB #AZURE 
               </p>
               <p>
               We are always looking for talented people  to join our DevOps process. We would genuinely love to hear from you, whatever your situation. Please get in touch directly using email or social media. 
               </p>
           </div>
     
    </div>
    </>
)