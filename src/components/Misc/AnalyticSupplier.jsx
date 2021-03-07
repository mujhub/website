import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { pageView } from "../../services/analytics-ua";

const AnalyticSupplier = () => {
	const history = useHistory();

	useEffect(() => {
		pageView(history.location.pathname);
		return history.listen((location) => {
			pageView(history.location.pathname);
		});
	});

	return null;
};

export default AnalyticSupplier;
