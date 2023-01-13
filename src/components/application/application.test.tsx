import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe.skip('Application', () => {
    // test('Name renders correctly',()=>{
    //     render(<Application></Application>)
    //     const nameElement = screen.getByRole('textbox');
    //     expect(nameElement).toBeInTheDocument();
    // })
    // test('heading renders correctly', () => {
    //     render(<Application></Application>)
    //     const heading = screen.getByRole('heading', {
    //         name: 'Job application'
    //     });
    //     expect(heading).toBeInTheDocument();
    // })
    // test('heading2 renders correctly', () => {
    //     render(<Application></Application>)
    //     const heading1 = screen.getByRole('heading', {
    //         name: 'Section 1'
    //     });
    //     expect(heading1).toBeInTheDocument();
    // })
    test('heading renders correctly', () => {
        render(<Application></Application>)
        const heading = screen.getByRole('heading', {
           level:1
        });
        expect(heading).toBeInTheDocument();
    })
    test('heading2 renders correctly', () => {
        render(<Application></Application>)
        const heading1 = screen.getByRole('heading', {
           level:2
        });
        expect(heading1).toBeInTheDocument();
    })
    test('Name renders correctly', () => {
        render(<Application></Application>)
        const nameElement = screen.getByRole('textbox', {
            name: 'Name'
        });
        expect(nameElement).toBeInTheDocument();
    })
    test('joblocation renders correctly', () => {
        render(<Application></Application>)
        const jobLocation = screen.getByRole('combobox')
        expect(jobLocation).toBeInTheDocument();
    })
    test('checkbox renders correctly', () => {
        render(<Application></Application>)
        const terms = screen.getByRole('checkbox')
        expect(terms).toBeInTheDocument();
    })
    test('button renders correctly', () => {
        render(<Application></Application>)
        const submit = screen.getByRole('button')
        expect(submit).toBeInTheDocument();
    })
    test('bio element renders correctly', () => {
        render(<Application></Application>)
        const bio = screen.getByRole('textbox', {
            name: 'Bio'
        })
        expect(bio).toBeInTheDocument();
    })
    test('bio2 element renders correctly', () => {
        render(<Application></Application>)
        const bio2 = screen.getByLabelText('Bio');
        expect(bio2).toBeInTheDocument();
    })
    // test('terms renders correctly', () => {
    //     render(<Application></Application>)
    //     const terms = screen.getByLabelText('I agree to terms and consitions')
    //     expect(terms).toBeInTheDocument();
    // })
    test('terms renders correctly', () => {
        render(<Application></Application>)
        const terms = screen.getByLabelText('I agree to terms and consitions' ,{ 
            selector:'input'
        })
        expect(terms).toBeInTheDocument();
    })
    test('name placeholder renders correctly', () => {
        render(<Application></Application>)
        const nameplaceholder=screen.getByPlaceholderText('name?')
        expect(nameplaceholder).toBeInTheDocument();
    })
    test('getbyText renders correctly', () => {
        render(<Application></Application>)
        const para=screen.getByText('lorem')
        expect(para).toBeInTheDocument();
    })
    test('getbyDisplayValue renders correctly', () => {
        render(<Application></Application>)
        const para=screen.getByDisplayValue('Dhanush')
        expect(para).toBeInTheDocument();
    })
    test('getbyAltText renders correctly', () => {
        render(<Application></Application>)
        const para=screen.getByAltText('yarra nee?')
        expect(para).toBeInTheDocument();
    })
    test('getbyTitle renders correctly', () => {
        render(<Application></Application>)
        const para=screen.getByTitle('close')
        expect(para).toBeInTheDocument();
    })
    test('getbyTestId renders correctly', () => {
        render(<Application></Application>)
        const para=screen.getByTestId('id1')
        expect(para).toBeInTheDocument();
    })
})