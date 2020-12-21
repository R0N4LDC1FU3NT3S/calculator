import React from "react"
import { shallow, mount } from "enzyme"
import Keypad from "./Keypad"

describe("Keypad - Shallow", () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<Keypad callOperator={jest.fn()} numbers={[]} operators={[]} setOperator={jest.fn()} updateDisplay={jest.fn()} />)
	})

	it("#0 - Snapshot", () => expect(wrapper).toMatchSnapshot())

	it("#1 - Render correctly", () => {
		expect(wrapper.find("div").length).toEqual(4)
	})

	it("#4 - Render an instance of the Key component for each index of numbers, operators, and the submit Key", () => {
		const numbers = ["0", "1"]
		const operators = ["+", "-"]
		const submit = 1
		const keyTotal = numbers.length + operators.length + submit
		wrapper.setProps({ numbers, operators })
		expect(wrapper.find("Key").length).toEqual(keyTotal)
	})
})

describe("Keypad - Mount", () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(<Keypad callOperator={jest.fn()} numbers={[]} operators={[]} setOperator={jest.fn()} updateDisplay={jest.fn()} />)
	})

	it("#0 - Snapshot", () => expect(wrapper).toMatchSnapshot())

	it("#2 - Render the values of numbers", () => {
		wrapper.setProps({ numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] })
		expect(wrapper.find(".numbers-container").text()).toEqual("0123456789")
	})

	it("#3 - Render the values of operators", () => {
		wrapper.setProps({ operators: ["+", "-", "*", "/"] })
		expect(wrapper.find(".operators-container").text()).toEqual("+-*/")
	})
})
