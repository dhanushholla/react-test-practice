import {render,screen} from '@testing-library/react'
import {Users} from "./users"

describe('users',()=>{
    test('renders correctly',()=>{
        render(<Users/>);
        const textelement=screen.getByText("Users");
        expect(textelement).toBeInTheDocument();
    })
})