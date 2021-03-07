import ReactGA from "react-ga";
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);

export const pageView = (location) => {
	ReactGA.pageview(`${location}`);
};

export const countMessView = () => {
	ReactGA.event({ category: "Natural", action: "Mess Menu Viewed" });
};

export const countButtonClick = (buttonName) => {
	console.log(buttonName);
	ReactGA.event({ category: "Clicks", action: `Clicked ${buttonName}` });
};

export const triggerEvent = ({ category = "Anonymous", action = "Not Defined", optional }) => {
	ReactGA.event({ category, action, ...optional });
};
