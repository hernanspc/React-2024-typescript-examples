
export const BasicFunctions = () => {

    const addTwoNumber = (a: number, b: number): string => {

        return `${a + b}`;
    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado de sumar : {addTwoNumber(2, 8)}</span>
        </>
    )
}
