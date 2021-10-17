import { shallow } from "enzyme"
import Display from "./Display"

// ══════════════════//
//		UI test		//
// ══════════════════//

describe("Display", () => {
	let wrapper

	beforeEach(() => (wrapper = shallow(<Display displayValue={""} />)))

	it("#0. Snapshot", () => {
		expect(wrapper).toMatchSnapshot()
	})

	it("#1. Render correctly", () => {
		expect(wrapper.find("div").length).toEqual(1)
	})

	it("#2. Render displayValue", () => {
		wrapper.setProps({ displayValue: "test" })
		expect(wrapper.text()).toEqual("test")
	})
})
