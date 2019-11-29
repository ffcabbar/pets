import React from 'react';
import {Pet} from "../components";
import {getPets} from "../constants";
import {stringContains} from "../helpers";


class PetList extends React.Component{
    breed;
    constructor(props){
        super(props);
        this.state = {
            _pets: [],
            pets: [],
            yukleniyor: true,
            loadPet:4
        }
    }

    componentDidMount() {
        getPets().then((data) => {
            this.setState({
                _pets: data,
                pets: data,
                yukleniyor: false
            });
        })

        window.onscroll = () => {
            if(window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
                this.setState({
                    loadPet: this.state.loadPet + 4
                });
            }    
        }


    }
    

    componentDidUpdate(prevProps) {
        if(prevProps.activeFilter !== this.props.activeFilter){
            this.filterPets();
        }
        if(prevProps.searchValue !== this.props.searchValue){
            this.filterPets();
        }
    }

    filterPets = () => {
        if(!this.props.activeFilter){
            this.setState({
                pets: this.state._pets.filter((pet) => {
                    return stringContains(pet.name, this.props.searchValue)
                })
            })
        }else{
            this.setState({
                pets: this.state._pets.filter((pet) => {
                    return pet.breed === this.props.activeFilter;
                }).filter((filteredPet) => {
                    return stringContains(filteredPet.name, this.props.searchValue)
                })
            })
        }
    }


    render(){
        const Yukleniyor = <div>Yukleniyor</div>;
        const EmptyPets = <div>Bulunamadı</div>;    // Tam buraya scroll edildikçe gelen pet sayısı yazdırdım. Ve fixed-top yaptım görmeniz için css bozuldu ama tabi.
        const Pets =  [<h3 className='fixed-top'>Gösterilen Pet Sayısı: {this.state.pets.slice(0, this.state.loadPet).length}</h3>,<div className="row">
            {
                this.state.pets.slice(0, this.state.loadPet).map((pet) => {
                    return <Pet key={Math.random()} {...pet} />
                })
            }
        </div>];
        if(this.state.yukleniyor){
            return Yukleniyor;
        }else if(this.state.pets.length === 0){
            return EmptyPets
        }else{
            return Pets;
        }
    }
}


export default PetList;
