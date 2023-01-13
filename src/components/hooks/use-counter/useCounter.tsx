import { useState } from "react";
import {useCounterProps} from './userDCounter.types'
import React from 'react'

export const useCounter = ({initialCount=0}: UseCounterProps ={}) => {
    const [count,setCount]=useState(initialCount);
    const increment = () =>setCount(count+1)
    const decrement = () =>setCount(count-1)
    return {count,increment,decrement};
}

