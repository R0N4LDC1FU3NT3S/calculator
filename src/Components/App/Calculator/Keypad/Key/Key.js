import propTypes from "prop-types"
import "./Key.css"

const Key = ({ keyAction, keyType, keyValue }) => {
	return (
		<div className={`key-container ${keyType}`} onClick={() => keyAction(keyValue)}>
			<p className="key-value">{keyValue}</p>
		</div>
	)
}

Key.propTypes = {
	keyAction: propTypes.func.isRequired,
	keyType: propTypes.string.isRequired,
	keyValue: propTypes.string.isRequired
}

export default Key
