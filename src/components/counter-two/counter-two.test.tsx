import {render,screen} from '@testing-library/react'
import user from '@testing-library/user-event'
import { CounterTwo } from './counter-two'

describe("CounterTwo",()=>{
    test('renders correctly',()=>{
        render(<CounterTwo count={0}/>)
        const textelement=screen.getByText('Counter Two');
        expect(textelement).toBeInTheDocument();
    })
    test('button click handlers are called',async()=>{
        const Incrementhandler = jest.fn();
        const Decrementhandler = jest.fn();
        render(<CounterTwo count={0} 
        handleIncrement={Incrementhandler}
        handleDecrement={Decrementhandler}
        />)
        const incrementbtn = screen.getByRole('button',{name:'Increment'});
        const decrementbtn = screen.getByRole('button',{name:'Decrement'});
        user.setup();
        await user.click(incrementbtn);
        await user.click(decrementbtn);
        expect(Incrementhandler).toHaveBeenCalledTimes(1);
        expect(Decrementhandler).toHaveBeenCalledTimes(1);
    })
})