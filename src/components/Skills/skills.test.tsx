import { logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe.skip('skills test',()=>{
    const skillset=['html','css','js'];
    test('renders correctly',()=>{
        render(<Skills skills={skillset}></Skills>)
        const listelement = screen.getByRole('list'); //for ul
        expect(listelement).toBeInTheDocument();
    })
    test('renders list of skills correctly',()=>{
        render(<Skills skills={skillset}></Skills>)
        const listitemelement = screen.getAllByRole('listitem');//for li
        expect(listitemelement).toHaveLength(skillset.length);
    })
    test('renders login button',()=>{
        render(<Skills skills={skillset}></Skills>)
        const loginbtn = screen.getByRole('button',{ name:'Login'}); 
        expect(loginbtn).toBeInTheDocument();
    })
    // test('renders no start learning button',()=>{
    //     render(<Skills skills={skillset}></Skills>)
    //     const learnbtn = screen.getByRole('button',{ name:'start learning'}); 
    //     expect(learnbtn).not.toBeInTheDocument();
    // })
    test('renders no start learning button',()=>{
        render(<Skills skills={skillset}></Skills>)
        const learnbtn = screen.queryByRole('button',{ name:'start learning'}); 
        expect(learnbtn).not.toBeInTheDocument();
    })
    // test('renders  start learning button',async()=>{
    //     render(<Skills skills={skillset}></Skills>)
    //     const learnbtn = await screen.findByRole('button',{ name:'start learning'},{timeout:2000}); 
    //     expect(learnbtn).toBeInTheDocument();
    // })
    // test('renders  start learning button',async()=>{
    //     render(<Skills skills={skillset}></Skills>)
    //     screen.debug();
    //     const learnbtn = await screen.findByRole('button',{ name:'start learning'},{timeout:2000});
    //     screen.debug(); 
    //     expect(learnbtn).toBeInTheDocument();
    // })
    test('renders  start learning button',async()=>{
       const view = render(<Skills skills={skillset}></Skills>)
        // screen.debug();
        logRoles(view.container);
        const learnbtn = await screen.findByRole('button',{ name:'start learning'},{timeout:2000});
        // screen.debug(); 
        expect(learnbtn).toBeInTheDocument();
    })
})