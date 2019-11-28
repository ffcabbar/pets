import axios from 'axios';

const rootApiURL = "http://5dd7af92505c590014d3b4ac.mockapi.io/";

const petsPath = "pets";

export const getPets = () => {
    return axios.get(rootApiURL + petsPath)
    .then(response => response.data) 
};

export const breedOptions = [
    "Cavalier King Charles Spaniel",
    "Golden Retriever",
    "Beagle",
    "French Bulldog"
];