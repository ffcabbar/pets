import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Pet extends React.Component {
    constructor(props){
        super(props);
    }

    addToFavorites(pet) {

        const url = "http://5dd7af92505c590014d3b4ac.mockapi.io/favorites";

        axios.post(url,{pet});
    }

    
render() { 
    const {name, image, age, description, breed, id} = this.props;   
    return (
        <div className="col-lg-6 col-md-4 mb-4">
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src={image} alt="" style={{height: "292px"}}/></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{name}</a>
                        <div>
                            <span className="badge badge-primary" style={{fontSize: "12px"}}>{breed}</span>
                        </div>
                        <div>
                            <span className="badge badge-warning" style={{fontSize: "12px"}}>{age}</span>
                        </div>
                    </h4>
                    <p className="card-text">
                        {description}
                    </p>
                </div>
                <div className="card-footer">
                    <div className="btn btn-success" onClick={() => {
                        this.addToFavorites(this.props.pet);
                    }}>Favorilere Ekle</div>

                    <div className="btn btn-secondary ml-3">
                        <Link className="text-decoration-none text-white" to={`/detay/${id}`}>Detay</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

}

export default Pet;
