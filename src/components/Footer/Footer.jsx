import React from "react";
import sambhavLogo from "../../assets/output_image-removebg-preview.png";
import classes from "./Footer.module.css";

const insta = "https://www.instagram.com/gr_sdcollege/profilecard/";
const linkedin = "https://www.linkedin.com/company/artificial-intelligence-io/";

// const grabbitinsta = "https://www.instagram.com/grabbits_/";
// const grabbitlinkedin = "https://www.linkedin.com/company/grabbits/";
// const grabbittwitter = "https://twitter.com/grabbits_";
// const grabbitwebsite = "https://grabbits.vercel.app/";

// const spiderurl = "https://www.linkedin.com/in/tejasnasre/";
// const saurabh = "https://www.linkedin.com/in/saurabh-barde-5b617321a/";
// const sanyog = "https://www.linkedin.com/in/sanyog-mahajan-8288a7204/";

// const grabbiturl = "https://www.grabbitdypcoe.in";
const Footer = () => {
  return (
    <div className={classes.footer_outer}>
      <div className={classes.footer}>
        <div className={classes.footer_first}>
          <div className={classes.footer_sambhav_image_div}>
            <div>
              <img
                className={classes.footer_sambhav_image}
                src={sambhavLogo}
                alt="sambhavLogo"
              ></img>
            </div>
            <div>
              {/* <h1 className={classes.footer_sambhav}>SAMBHAV'23</h1> */}
            </div>
          </div>
          <p className={classes.footer_sambhav_description}>
          I-Fest 2025 is a Tech event especially organized for our Future Tech Wizards. Let&apos;s
            make a Tech move.
          </p>
          <div className={classes.footer_social_item}>
            <div>
              <a
                href={insta}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/fluency/48/ffffff/instagram-new.png"
                  alt=""
                />
              </a>
            </div>
            {/* <div>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}
              >
                <img
                  className={classes.footer_social_link}
                  src="https://img.icons8.com/color/48/ffffff/linkedin-circled--v1.png"
                  alt=""
                />
              </a>{" "}
            </div> */}
            {/* <div>
              <a
                href={sambhavtwitter}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footer_a_link}>
                <img className={classes.footer_social_link} src="https://img.icons8.com/fluency/48/ffffff/twitter-circled.png" alt="" />
              </a>  </div> */}
          </div>
        </div>
        
        {/* <div className={classes.footer}second'>
          <h2 className={classes.footer}menu-heading'>Menu</h2>
          <h6 className={classes.footer}page-link'>About US</h6>
          <h6 className={classes.footer}page-link'>Term of Use</h6>
          <h6 className={classes.footer}page-link'>Privary Policy</h6>
          <h6 className={classes.footer}page-link'>Order History</h6>
          <h6 className={classes.footer}page-link'>Return policy</h6>
        </div> */}
        <div className={classes.footer_third}>
          <h2 className={classes.footer_menu_heading}>Contact Us</h2>
          <div className={classes.footer_contact}>
            <div className={classes.footer_contact_item_image}>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt=""
              />
            </div>
            <div>
              <p>Smt. Sushiladevi Deshmukh College of ASC, Airoli</p>
            </div>
          </div>
          <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/ios-filled/50/ffffff/outgoing-call.png"
                alt=""
              />
            </div>
            {/* <div className={classes.contact_no}>
               <div>
                <h3>Teacher Incharge</h3>
                <p>Dr. Prakash Naik (+91 98193 70433)</p>
                <p>Asst. Prof. Vanita Sharma </p> <p>(+91 91671 01155)</p>
              </div>
              <div>
                <h3>Students Co-ordinate </h3>
                <p>Sachinkumar Nishad (+91 77382 05133)</p>
                <p>Ragini Kanojia (+91 83568 80936)</p>
              </div>
            </div> */}
            <div className={classes.persons}>
            <div className={classes.personBox}>
              <h4 className={classes.personHeading}>Teacher Incharge</h4>
              <div className={classes.details}>
                <p>Dr. Prakash Naik</p>
                <a className={classes.anchor} href="tel:+919815370433">+919815370433</a>
                <p>Asst. Prof. Vanita Sharma</p>
                <a className={classes.anchor} href="tel:+919167101155">+919167101155</a>
              </div>
            </div>
            <div className={classes.personBox}>
              <h4 className={classes.personHeading}>Students Co-ordinate</h4>
              <div className={classes.details}>
                <p>Sachinkumar Nishad</p>
                <a className={classes.anchor} href="tel:+917738205133">+91 77382 05133</a>
                <p>Ragini Kanojiya</p>
                <a className={classes.anchor} href="tel:+918356880936">+91 83568 80936</a>
              </div>
            </div>
          </div>
          </div>
          {/* <div className={classes.footer_contact}>
            <div>
              <img
                className={classes.footer_contact_image}
                src="https://img.icons8.com/glyph-neue/64/ffffff/gmail.png"
                alt=""
              />
            </div>
            <div>
              <p className={classes.mail}>sachinkumarnishad321@gmail.com</p>
              <p className={classes.mail}>raginikanojiya4204@gmail.com</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className={classes.footer_creator_div}>
        <h4 className={classes.footer_creator}>
          Made With 🩷 By{" "}
          <a
            href="#home"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.footer_a_link}
          >
            IT Club 
          </a>{" "}
        </h4>
      </div>
    </div>
  );
};

export default Footer;
