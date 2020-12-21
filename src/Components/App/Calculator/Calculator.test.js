import React from "react"
import { shallow } from "enzyme"
import Calculator from "./Calculator"
import Display from "./Display/Display"
import Keypad from "./Keypad/Keypad"

describe("Calculator", () => {
	let wrapper

	beforeEach(() => (wrapper = shallow(<Calculator />)))

	it("#0 - Snapshot", () => expect(wrapper).toMatchSnapshot())

	it("#1 - Render correctly", () => {
		expect(wrapper.find("div").length).toEqual(1)
	})

	it("#2 - Render Display", () => {
		expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue} />)).toEqual(true)
	})

	it("#3 - Render Keypad", () => {
		expect(
			wrapper.containsMatchingElement(
				<Keypad
					callOperator={wrapper.instance().callOperator}
					numbers={wrapper.instance().state.numbers}
					operators={wrapper.instance().state.operators}
					setOperator={wrapper.instance().setOperator}
					updateDisplay={wrapper.instance().updateDisplay}
				/>
			)
		).toEqual(true)
	})
})
