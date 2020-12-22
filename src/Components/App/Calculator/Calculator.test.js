import React from "react"
import { shallow, mount } from "enzyme"
import Calculator from "./Calculator"
import Display from "./Display/Display"
import Keypad from "./Keypad/Keypad"

//══════════════════//
//		UI test		//
//══════════════════//

describe("Calculator - Shallow", () => {
	let wrapper

	beforeEach(() => (wrapper = shallow(<Calculator />)))

	it("#0. Snapshot", () => expect(wrapper).toMatchSnapshot())

	it("#1. Render correctly", () => {
		expect(wrapper.find("div").length).toEqual(1)
	})

	it("#2. Render Display", () => {
		expect(wrapper.containsMatchingElement(<Display displayValue={wrapper.instance().state.displayValue} />)).toEqual(true)
	})

	it("#3. Render Keypad", () => {
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

describe("Calculator - Mount", () => {
	let wrapper

	beforeEach(() => (wrapper = mount(<Calculator />)))

	it("#0. Snapshot", () => expect(wrapper).toMatchSnapshot())

	it("#1. calls updateDisplay when a number key is clicked", () => {
		const spy = jest.spyOn(wrapper.instance(), "updateDisplay")
		wrapper.instance().forceUpdate()
		expect(spy).toHaveBeenCalledTimes(0)
		wrapper.find(".number-key").first().simulate("click")
		expect(spy).toHaveBeenCalledTimes(1)
	})

	it("#2. calls setOperator when an operator key is clicked", () => {
		const spy = jest.spyOn(wrapper.instance(), "setOperator")
		wrapper.instance().forceUpdate()
		expect(spy).toHaveBeenCalledTimes(0)
		wrapper.find(".operator-key").first().simulate("click")
		expect(spy).toHaveBeenCalledTimes(1)
	})

	it("#3. calls callOperator when the submit key is clicked", () => {
		const spy = jest.spyOn(wrapper.instance(), "callOperator")
		wrapper.instance().forceUpdate()
		expect(spy).toHaveBeenCalledTimes(0)
		wrapper.find(".submit-key").simulate("click")
		expect(spy).toHaveBeenCalledTimes(1)
	})
})

//══════════════════════════//
//		Functional test		//
//══════════════════════════//

describe("updateDisplay", () => {
	let wrapper

	beforeEach(() => (wrapper = shallow(<Calculator />)))

	it("#1. updates displayValue", () => {
		wrapper.instance().updateDisplay("5")
		expect(wrapper.state("displayValue")).toEqual("5")
	})

	it("#2. concatenates displayValue", () => {
		wrapper.instance().updateDisplay("5")
		wrapper.instance().updateDisplay("0")
		expect(wrapper.state("displayValue")).toEqual("50")
	})

	it('#3. removes leading "0" from displayValue', () => {
		wrapper.instance().updateDisplay("0")
		expect(wrapper.state("displayValue")).toEqual("0")
		wrapper.instance().updateDisplay("5")
		expect(wrapper.state("displayValue")).toEqual("5")
	})

	it('#4. prevents multiple leading "0"s from displayValue', () => {
		wrapper.instance().updateDisplay("0")
		wrapper.instance().updateDisplay("0")
		expect(wrapper.state("displayValue")).toEqual("0")
	})

	it("#5. removes last char of displayValue", () => {
		wrapper.instance().updateDisplay("5")
		wrapper.instance().updateDisplay("0")
		wrapper.instance().updateDisplay("ce")
		expect(wrapper.state("displayValue")).toEqual("5")
	})

	it('#6. prevents multiple instances of "." in displayValue', () => {
		wrapper.instance().updateDisplay(".")
		wrapper.instance().updateDisplay(".")
		expect(wrapper.state("displayValue")).toEqual(".")
	})

	it('#7. will set displayValue to "0" if displayValue is equal to an empty string', () => {
		wrapper.instance().updateDisplay("ce")
		expect(wrapper.state("displayValue")).toEqual("0")
	})
})

describe("setOperator", () => {
	let wrapper

	beforeEach(() => (wrapper = shallow(<Calculator />)))

	it("#1. updates the value of selectedOperator", () => {
		wrapper.instance().setOperator("+")
		expect(wrapper.state("selectedOperator")).toEqual("+")
		wrapper.instance().setOperator("/")
		expect(wrapper.state("selectedOperator")).toEqual("/")
	})

	it("#2. updates the value of storedValue to the value of displayValue", () => {
		wrapper.setState({ displayValue: "5" })
		wrapper.instance().setOperator("+")
		expect(wrapper.state("storedValue")).toEqual("5")
	})

	it('#3. updates the value of displayValue to "0"', () => {
		wrapper.setState({ displayValue: "5" })
		wrapper.instance().setOperator("+")
		expect(wrapper.state("displayValue")).toEqual("0")
	})

	it("#4. selectedOperator is not an empty string, does not update storedValue", () => {
		wrapper.setState({ displayValue: "5" })
		wrapper.instance().setOperator("+")
		expect(wrapper.state("storedValue")).toEqual("5")
		wrapper.instance().setOperator("-")
		expect(wrapper.state("storedValue")).toEqual("5")
	})
})

describe("callOperator", () => {
	let wrapper

	beforeEach(() => (wrapper = shallow(<Calculator />)))

	it("#1. updates displayValue to the sum of storedValue and displayValue", () => {
		wrapper.setState({ storedValue: "3" })
		wrapper.setState({ displayValue: "2" })
		wrapper.setState({ selectedOperator: "+" })
		wrapper.instance().callOperator()
		expect(wrapper.state("displayValue")).toEqual("5")
	})

	it("#2. updates displayValue to the difference of storedValue and displayValue", () => {
		wrapper.setState({ storedValue: "3" })
		wrapper.setState({ displayValue: "2" })
		wrapper.setState({ selectedOperator: "-" })
		wrapper.instance().callOperator()
		expect(wrapper.state("displayValue")).toEqual("1")
	})

	it("#3. updates displayValue to the product of storedValue and displayValue", () => {
		wrapper.setState({ storedValue: "3" })
		wrapper.setState({ displayValue: "2" })
		wrapper.setState({ selectedOperator: "x" })
		wrapper.instance().callOperator()
		expect(wrapper.state("displayValue")).toEqual("6")
	})

	it("#4. updates displayValue to the quotient of storedValue and displayValue", () => {
		wrapper.setState({ storedValue: "3" })
		wrapper.setState({ displayValue: "2" })
		wrapper.setState({ selectedOperator: "/" })
		wrapper.instance().callOperator()
		expect(wrapper.state("displayValue")).toEqual("1.5")
	})

	it('#5. updates displayValue to "0" if operation results in "NaN"', () => {
		wrapper.setState({ storedValue: "3" })
		wrapper.setState({ displayValue: "string" })
		wrapper.setState({ selectedOperator: "/" })
		wrapper.instance().callOperator()
		expect(wrapper.state("displayValue")).toEqual("0")
	})

	it('#6. updates displayValue to "0" if operation results in "Infinity"', () => {
		wrapper.setState({ storedValue: "7" })
		wrapper.setState({ displayValue: "0" })
		wrapper.setState({ selectedOperator: "/" })
		wrapper.instance().callOperator()
		expect(wrapper.state("displayValue")).toEqual("0")
	})

	it('#7. updates displayValue to "0" if selectedOperator does not match cases', () => {
		wrapper.setState({ storedValue: "7" })
		wrapper.setState({ displayValue: "10" })
		wrapper.setState({ selectedOperator: "string" })
		wrapper.instance().callOperator()
		expect(wrapper.state("displayValue")).toEqual("0")
	})

	it('#8. updates displayValue to "0" if called with no value for storedValue or selectedOperator', () => {
		wrapper.setState({ storedValue: "" })
		wrapper.setState({ displayValue: "10" })
		wrapper.setState({ selectedOperator: "" })
		wrapper.instance().callOperator()
		expect(wrapper.state("displayValue")).toEqual("0")
	})
})
