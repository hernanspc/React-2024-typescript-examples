import React, { useState } from 'react'


interface Options {
    initialValue?: number;
}

export const useCounter = ({ initialValue }: Options) => {


    const [count, setCount] = useState<number>(10);

    const increaseBy = (value: number) => {

        if (value < 0) return;

        setCount(count + value);
    }

    return {
        //properties
        count,
        //methods
        increaseBy,
    }
}

