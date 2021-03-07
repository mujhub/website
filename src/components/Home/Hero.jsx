import React from "react";

import { countButtonClick } from "../../services/analytics-ua";

import { H3, Type, Caption } from "../../styles/Shared/StyledTypes";
import { Hero as HeroDiv } from "../../styles/components/HomeStyles";
import { CallToActionButton } from "../../styles/Shared/Button";

// icons
import { FiDownload } from "react-icons/fi";

export const Hero = () => {
	const handleWebCTAClick = () => {
		countButtonClick("Install WebApp");
	};

	return (
		<>
			<HeroDiv>
				<div className='desktop' style={{ marginBottom: "2rem" }}>
					{/* <H5 style={{ margin: "1rem 0 1.5rem 0" }}>About Us</H5> */}
					{/* <Type>
            MUJ HUB is an application that caters to the day-to-day needs of any
            student in our university, from displaying the mess menu to ordering
            food from outlets. The app developed by fellow students aims at
            making your life at MUJ easier.
          </Type>

          <Type>
            Ever heard of effortless, that is what MUJ HUB is all about.
            Nonetheless, we strive harder each day to solve issues on campus
            with the use of technology and present the solutions to you in our
            student friendly interface.
          </Type> */}

					<H3 style={{ margin: "1rem 2rem 1.5rem 0" }}>Welcome to your one stop solution for everything in MUJ!</H3>
					<Type style={{ margin: "1rem 3rem 1.5rem 0" }}>
						Bear with us as we launch our array of features in Android and iOS applications very soon.
					</Type>
				</div>

				<div className='mobile' style={{ marginBottom: "2rem" }}>
					<div className='buttons'>
						{/* <CallToActionButton Primary>
              <FaGooglePlay style={{ marginRight: "0.5rem" }} /> Get it on
              Google Play
            </CallToActionButton> */}
						<CallToActionButton Primary onClick={handleWebCTAClick}>
							<FiDownload style={{ marginRight: "0.5rem" }} /> Install The Web Application
						</CallToActionButton>
					</div>

					<Caption style={{ marginTop: "1rem" }}>COMING SOON TO PLAY STORE AND APP STORE</Caption>
				</div>
			</HeroDiv>
		</>
	);
};
