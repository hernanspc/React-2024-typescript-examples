import React from 'react'

interface Person {
    fullName: string,
    age: number,
    address: Address,
    isAlive?: boolean,
}

interface Address {
    country: string,
    houseNro: number,
}

export const ObjectLiterals = () => {


    const person: Person = {
        fullName: 'Hernan',
        age: 25,
        address: {
            country: 'United States',
            houseNro: 120,
        }

    }



    return (
        <div>
            <h3>Objeto literal</h3>
            <pre>
                {JSON.stringify(person, null, 2)}

            </pre>
        </div>
    )
}


