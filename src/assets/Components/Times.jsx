export default function Times(props) {

    return (
        <>
        <h2>RM98760</h2>
            <p className='text'>Melhor goleiro: {props.nome} </p>

            <ul>
                {props.time.map((item, indice) =>
                    <li key={indice}>{`${item} - ${item}`}</li>
                )}
            </ul> 
        </>
    )
}