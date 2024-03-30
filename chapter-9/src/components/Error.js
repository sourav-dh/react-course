import { useRouteError } from "react-router-dom";

const  Error = () => {
	const error = useRouteError();
	return (
		<>
			<h1>Opps...</h1>
			<h3>Something went wrong!!!</h3>
			<h4>{error.status}: {error.statusText}</h4>
		</>
	);
}

export default Error;