import React, { useEffect, useState } from "react";
import { FiDownload, FiCheck } from "react-icons/fi";

import { CallToActionButton } from "../../styles/Shared/Button";
import { countButtonClick } from "../../services/analytics-ua";

const PWAInstallerBtn = () => {
	const [promptInstall, setPromptInstall] = useState(null);
	const [alreadyInstalled, setAlreadyInstalled] = useState(false);

	useEffect(() => {
		setAlreadyInstalled(window.matchMedia("(display-mode: standalone)").matches);

		const handler = (e) => {
			e.preventDefault();
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

	return !alreadyInstalled ? (
		<CallToActionButton Primary onClick={handleInstallClick}>
			<FiDownload style={{ marginRight: "0.5rem" }} />
			Install The Web Application
		</CallToActionButton>
	) : (
		<CallToActionButton>
			<FiCheck style={{ marginRight: "0.5rem" }} /> Installed
		</CallToActionButton>
	);
};

export default PWAInstallerBtn;
