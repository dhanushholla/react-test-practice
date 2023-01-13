import { render, screen } from "@testing-library/react"
import { Greettdd } from "./Greettdd"

// tdd .. functionality requirement :  it should greet ===> hello  and name passed then it should be like hello name.
// test('greet tdd renders correctly',()=>{
//     render(<Greettdd></Greettdd>)
//     const greeting = screen.getByText('Hello');
//     expect(greeting).toBeInTheDocument();
// })

// test('greet tdd with name renders correctly',()=>{
//     render(<Greettdd name='Dhanu'></Greettdd>)
//     const greeting = screen.getByText('Hello Dhanu');
//     expect(greeting).toBeInTheDocument();
// })

// test.only('greet tdd with name renders',()=>{
//     render(<Greettdd name='Dhanush Holla'></Greettdd>)
//     const greeting = screen.getByText('Hello Dhanush Holla');
//     expect(greeting).toBeInTheDocument();
// })

describe('all greet tdd testcase', () => {
    test.skip('greet tdd renders correctly', () => {
        render(<Greettdd></Greettdd>)
        const greeting = screen.getByText('Hello');
        expect(greeting).toBeInTheDocument();
    })

    test.skip('greet tdd with name renders correctly', () => {
        render(<Greettdd name='Dhanu'></Greettdd>)
        const greeting = screen.getByText('Hello Dhanu');
        expect(greeting).toBeInTheDocument();
    })
    describe('inner describe',()=>{
        test.skip('greet tdd with name renders', () => {
            render(<Greettdd name='Dhanush'></Greettdd>)
            const greeting = screen.getByText('Hello Dhanush');
            expect(greeting).toBeInTheDocument();
        })
    })
})

describe('multi describe',()=>{
    xit('greet tdd with name ', () => {
        render(<Greettdd name='anushree'></Greettdd>)
        const greeting = screen.getByText('Hello anushree');
        expect(greeting).toBeInTheDocument();
    })
})