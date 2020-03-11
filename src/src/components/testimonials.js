import React from 'react';
import styles from '../components/testimonials.module.css'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class testimonials extends React.Component {
    state = {  }
    render() { 
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
          };
        return (
            <>
    <div className={`${styles.testimonials } service_item row`}>
      
        
      <div className={"col-12 col-md-12"}>
            <h1>
            TESTIMONIALS
            </h1>
            <Slider {...settings}>
        <div>
         <p>"I have worked with Granular IT for the last three years as a trusted development partner for the development of websites and apps. They built and maintain our large scale Learning Management System and provide support on a number of development projects across a range of technologies. Granular IT have been fantastic, providing high quality work in time and on budget, and are a pleasure to work with, going above and beyond to get things done. Thank you for all of your hard work on our projects!"</p>
        </div>
        <div>
         <p>A major reason why we are able to do what we do is because of the services providers like Granular IT who did an excellent job designing and setting up our online database. It has not only made our data collection easier but has also simplified the review process for applications for our medical support fund.</p>
        </div>
        <div>
         <p>Having worked with Granular IT for many years, I did not hesitate to work with them again on the Young Soles website build on Shopify. From understanding the brief and what is needed to achieve a fantastic end product through to advising on the best way to solve problems and the quick delivery of a great website, I have always found Granular IT to be the perfect development partner. The ongoing support and bug fixing is also above and beyond that of other development partners I have worked with in the past</p>
        </div>
      
      </Slider>
         </div>

   
  </div>
            </>
          );
    }
}
 
export default testimonials;