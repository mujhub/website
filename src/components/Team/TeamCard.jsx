import React from "react";
import { H6, Type } from "../../styles/Shared/StyledTypes";
import { Card } from "../../styles/components/TeamStyles";
import { FaLinkedin, FaGithub, FaLink, FaInstagram, FaBehanceSquare } from "react-icons/fa";

// import
export const TeamCard = (props) => {
	const { links } = props;
	return (
		<Card>
			<img src={props.img} alt={props.name} height='300px' width='300px' />
			<H6 className='memberName'>{props.name}</H6>
			<Type className='memberPost'>{props.post}</Type>
			{/* <Divider /> */}
			<div className='memberLinks'>
				{links.map((link, i) => {
					let icon;
					switch (link.icon) {
						case "Linkedin":
							icon = <FaLinkedin size='20px' />;
							break;
						case "Github":
							icon = <FaGithub size='20px' />;
							break;
						case "Instagram":
							icon = <FaInstagram size='20px' />;
							break;
						case "Behance":
							icon = <FaBehanceSquare size='20px' />;
							break;
						default:
							icon = <FaLink size='20px' />;
							break;
					}
					return (
						<a key={i.toString()} target='_black' rel='noreferrer noopener' href={link.href}>
							{icon}
						</a>
					);
				})}
			</div>
		</Card>
	);
};
