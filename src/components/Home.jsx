import { useState, useEffect } from "react"
import { getAllPets } from "../networking/api";
import HomeCard from "./HomeCard";

export default function Home(){
    const [pets, setPets] = useState([]);
    useEffect(()=> {
        const fetchData = async() => {
            const fetchedPets = await getAllPets();
            setPets(fetchedPets);
        }
        fetchData()
    }, [])

    return (<div>
        {pets.map((pet)=> {
            return <HomeCard key={pet.id} pet={pet}></HomeCard>
        })}
    </div>)
}
