
import Countries from "@/components/Countries";
// import { Span } from "next/dist/trace";




export default function country_name({params}:{params:{
    country_name:string,population:number|string,capital_city:string
}}){
    const countries ={
        pakistan : {
            name:"Pakistan",
            population:234232342,
            capital:"Islamabad"
        },
        usa:{
            name:"USA",
            population:3423424,
            capital:"Washington dc"
        },
        china:{
            name:"China",
            population:2342323,
            capital:"Beging"
        },
        korea:{
            name:"Korea",
            population:2342342342,
            capital:"Seoul"
        },
        bhutan:{
            name:"Bhutan",
            population:234234234,
            capital:"Thimphu"
        }
    }
       if (params.country_name == "korea") {
        params.country_name = countries.korea.name ;
        params.population = countries.korea.population ;
        params.capital_city = countries.korea.capital;
    }
    else if (params.country_name == "bhutan") {
        params.country_name = countries.bhutan.name ;
        params.population = countries.bhutan.population ;
        params.capital_city = countries.bhutan.capital;
    }
    else if (params.country_name == "pakistan") {
        params.country_name = countries.pakistan.name ;
        params.population = countries.pakistan.population ;
        params.capital_city = countries.pakistan.capital;
    }
    else if (params.country_name == "china") {
        params.country_name = countries.china.name ;
        params.population = countries.china.population ;
        params.capital_city = countries.china.capital;
    }
    else if (params.country_name == "usa") {
        params.country_name = countries.usa.name ;
        params.population = countries.usa.population ;
        params.capital_city = countries.usa.capital;
    }
    else{
        params.population = "Sorry we do not have data of this country" ;
        params.capital_city = "Sorry we do not have data of this country" ;
       }
    const name = params.country_name
    const population = params.population
    const capital_city = params.capital_city
    
    return(
        <div><Countries name={name} population={population} capital={capital_city} />
        </div>
       
    )
}