import { withPrefix } from "gatsby";
import * as React from "react";
import { Helmet } from 'react-helmet';
import { AboutUI, EducationExperience, NavigationUI, SkillsUI, UserInfo } from "../components";
import '../scss/style.scss';


const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <script defer src={withPrefix('typed/typed.min.js')} type="text/javascript" />
        <script defer src={withPrefix('easing/easing.min.js')} type="text/javascript" />
        <script defer src={withPrefix('waypoints/waypoints.min.js')} type="text/javascript" />
        <script defer src={withPrefix('owlcarousel/owl.carousel.min.js')} type="text/javascript" />
        <script defer src={withPrefix('isotope/isotope.pkgd.min.js')} type="text/javascript" />
        <script defer src={withPrefix('lightbox/js/lightbox.min.js')} type="text/javascript" />
        <script defer src={withPrefix('main.js')} type="text/javascript" />
      </Helmet>

      <main>
        <NavigationUI />
        <UserInfo />
        <AboutUI />
        <EducationExperience />
        <SkillsUI />
      </main>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
