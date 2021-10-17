import { shallow } from "enzyme"
import Key from "./Key.js"

// ══════════════════//
//		UI test		//
// ══════════════════//

describe("Key", () => {
	let wrapper

	beforeEach(() => (wrapper = shallow(<Key keyAction={jest.fn()} keyType={""} keyValue={""} />)))

	it("#0. Snapshot", () => expect(wrapper).toMatchSnapshot())

	it("#1. Render correctly", () => {
		expect(wrapper.find("div").length).toEqual(1)
	})

	it("#2. Render the value of keyValue", () => {
		wrapper.setProps({ keyValue: "test" })
		expect(wrapper.text()).toEqual("test")
	})
})
