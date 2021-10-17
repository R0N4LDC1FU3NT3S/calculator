import { shallow } from "enzyme"
import App from "./App"
import Calculator from "./Calculator/Calculator"

// ══════════════════//
//		UI test		//
// ══════════════════//

describe("App", () => {
	let wrapper

	beforeEach(() => (wrapper = shallow(<App />)))

	it("#0. Snapshot", () => {
		expect(wrapper).toMatchSnapshot()
	})

	it("#1. Render correctly", () => {
		expect(wrapper.find("div").length).toEqual(1)
	})

	it("#2. Contain Calculator component", () => {
		expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true)
	})
})
