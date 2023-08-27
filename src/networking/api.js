const startURL = "http://localhost:8080";
const url = "/api/v1/pets";
const BASEURL = startURL + url;

const getAllPets = async() => {
    try{
        const response = await fetch(BASEURL);
        const data = await response.json();
        console.log(data);
        return data
    }catch(error){
        console.log(error);
    }
}

const getPetOwner = async(owner) => {
    try{const endpoint = "owner";
        const url = `${BASEURL}/${endpoint}`
        const response = await fetch(`${url}?owner=${owner}`)
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.log(error)
    }
}

const getPetByName = async(petName) => {
    try{
        const url = `${BASEURL}/${petName}`;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
        
    }catch(error){
        console.log(error);
    }

}

export{getAllPets, getPetOwner, getPetByName}