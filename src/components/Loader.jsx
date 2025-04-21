export default function Loader() {
	return (
		<div id="container" className="loader">
			<div id="bot">
				<div id="eyes">
					<div id="left">
						<div className="eye"></div>
					</div>
					<div id="right">
						<div className="eye"></div>
					</div>
				</div>
				<div id="leftarm">
					<div className="finger"></div>
					<div className="finger"></div>
				</div>
				<div id="rightarm">
					<div className="finger"></div>
					<div className="finger"></div>
				</div>
			</div>
			<div id="neck"></div>
			<div id="body"></div>
			<div id="legs">
				<div id="left">
					<div className="foot"></div>
				</div>
				<div id="right">
					<div className="foot"></div>
				</div>
			</div>
		</div>
	);
}
