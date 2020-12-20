import React from "react"
import { shallow } from "enzyme"
import Calculator from "./Calculator"
import Display from "./Display/Display"

describe("Calculator", () => {
	let wrapper = shallow(<Calculator />)

	it("#1 - Render correctly", () => {
		expect(wrapper.find("div").length).toEqual(1)
	})

	it("#2 - Render Display", () => {
		expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue} />)).toEqual(true)
	})
})
