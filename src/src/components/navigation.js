import React from 'react';
import styles from '../components/navigation.module.css'
  export default () => (
      <>
      <div className={styles.navigation}>
      <nav id="nav" className="skel-panels-fixed">
      <div className="row main_logo align-center ">
        <div className="col-lg-6 columns">
            <div className="LOGO"> </div>
        </div>
		<div className="col-lg-6 columns">
			<ul className="nav align-center">
            <li>Contact</li>
            <li>About</li>
            <li>Work</li>
            </ul>	
		</div>
    </div>
    
        </nav>
      </div>
      </>
  )