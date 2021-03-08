import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

import { CallToActionButton } from "../../styles/Shared/Button";
import { countButtonClick } from "../../services/analytics-ua";

const PWAInstallerBtn = () => {
	const [supportsPWA, setSupportsPWA] = useState(false);
	const [promptInstall, setPromptInstall] = useState(null);

	useEffect(() => {
		const handler = (e) => {
			e.preventDefault();
			setSupportsPWA(true);
			setPromptInstall(e);
		};
		window.addEventListener("beforeinstallprompt", handler);

		return () => window.removeEventListener("transitionend", handler);
	}, []);

	const handleInstallClick = (event) => {
		event.preventDefault();
		if (!promptInstall) {
			return;
		}
		countButtonClick("Install WebApp");
		promptInstall.prompt();
	};
	if (!supportsPWA) {
		return null;
	}
	return (
		<CallToActionButton Primary onClick={handleInstallClick}>
			<FiDownload style={{ marginRight: "0.5rem" }} /> Install The Web Application
		</CallToActionButton>
	);
};

export default PWAInstallerBtn;
