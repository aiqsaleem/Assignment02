export default function Countries(props:{name:string,population:number|string,capital:string,})
{
    console.log(props)


    return(
        <>
        <h1>name: {props.name}</h1>
        <h1>population: {props.population}</h1>
        <h1>capital: {props.capital}</h1>
        </>
    )
}