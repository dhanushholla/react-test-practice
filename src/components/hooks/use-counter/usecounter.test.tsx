import {renderHook} from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import { useCounter } from './useCounter'

describe('usecounter',()=>{
    test('should render initial count',()=>{
       const {result}= renderHook(useCounter);
       expect(result.current.count).toBe(0);
    })
    
    test('should accept and render the same initial count',()=>{
        const {result}= renderHook(useCounter,{initialProps:{initialCount:10}});
        expect(result.current.count).toBe(10);
    })
    test('should test increment & decrement',()=>{
        const {result}= renderHook(useCounter,{initialProps:{initialCount:10}});
        act(()=> result.current.increment()); 
        expect(result.current.count).toBe(11);
        act(()=> result.current.decrement()); 
        expect(result.current.count).toBe(10);

    })
})