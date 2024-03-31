
export const BasycTypes = () => {

    const name: string = "Hernan";
    const age: number = 25;
    const isActive: boolean = true;
    const powers: string[] = ['React', 'Raect Native', 'JavaScript',];
    powers.push('Next JS')

    return (
        <>
            <h3>Tipos basicos</h3>
            {name}   {age}   {isActive ? 'activo' : 'inactivo'}
            <br />
            {powers.join(', ')}
        </>
    )
}

