import {render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import { Counter } from './Counter'

describe.only('counter',()=>{
    test('renders correctly',()=>{
        render(<Counter></Counter>);
        const countelement = screen.getByRole('heading');
        expect(countelement).toBeInTheDocument();
        const incrementbtn = screen.getByRole('button',{name:'increment'});
        expect(incrementbtn).toBeInTheDocument();
    })
    test('count=0 renders correctly',()=>{
        render(<Counter></Counter>);
        const countelement = screen.getByRole('heading');
        expect(countelement).toHaveTextContent('0');
    })
    test('render count of 1 after clicking increment btn one time',async()=>{
        user.setup();
        render(<Counter></Counter>)
        const incrementbtn = screen.getByRole('button',{name:'increment'});
        await user.click(incrementbtn);
        const countelement = screen.getByRole('heading');
        expect(countelement).toHaveTextContent('1'); 

    })
    test('render count of 2 after clicking increment btn two time',async()=>{
        user.setup();
        render(<Counter></Counter>)
        const incrementbtn = screen.getByRole('button',{name:'increment'});
        await user.click(incrementbtn);
        await user.click(incrementbtn);
        const countelement = screen.getByRole('heading');
        expect(countelement).toHaveTextContent('2'); 
    })
    test('renders the count of 10 after clicking set btn',async()=>{
       user.setup();
       render(<Counter/>)
       const amountinput=screen.getByRole('spinbutton');
       await user.type(amountinput,'10');
       expect(amountinput).toHaveValue(10)
       const setbtn=screen.getByRole('button',{name : 'Set'})
       await user.click(setbtn);
       const countheader = screen.getByRole('heading');
       expect(countheader).toHaveTextContent('10')
    })
    //in page, when we press tab.. the focus is shifted from increment to number input to set btn..lets right testcase for the focus order
    //user.tab() allows to simulate the tab btn pressing
    test('elements are focused in right order',async()=>{
        user.setup();
        render(<Counter/>);
        const amountinput=screen.getByRole('spinbutton');
        const setbtn=screen.getByRole('button',{name : 'Set'})
        const incrementbtn=screen.getByRole('button',{name : 'increment'})
        await user.tab();
        expect(incrementbtn).toHaveFocus();
        await user.tab();
        expect(amountinput).toHaveFocus();
        await user.tab();
        expect(setbtn).toHaveFocus();
    })
})
