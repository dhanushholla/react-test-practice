import { render,screen } from "@testing-library/react"
import { Greet } from "./Greet"

test.skip('check greet component',()=>{
    render(<Greet></Greet>)
    // const greetingword = screen.getByText('Hello');
    // const greetingword = screen.getByText('hello');
    const greetingword = screen.getByText(/hello/i); // making use of regex with i flag to make case insensitive
    expect(greetingword).toBeInTheDocument();
})
