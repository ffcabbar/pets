import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

let age,name,image, breed,description;
class PetDetailsPage extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            name:"",
            image:"",
            age:"",
            description:"",
            breed:""
        }
    }

    componentDidMount(){
        axios.get(`http://5dd7af92505c590014d3b4ac.mockapi.io/pets/${this.props.match.params.id}`)
          .then(response => response.data)
          .then(data => ({name,image,age,description,breed} = data))
          .then(data => this.setState({name, image, age, description, breed}))
        }

    render(){
        return (
            <div className="col-lg-6 col-md-4 mb-4" style={{marginLeft:"390px",marginTop:"30px"}}>
            <div className="card h-100">
                <a href="#"><img className="card-img-top" src={this.state.image} alt="" style={{height: "292px"}}/></a>
                <div className="card-body">
                    <h4 className="card-title">
                        <a href="#">{this.state.name}</a>
                        <div>
                            <span className="badge badge-primary" style={{fontSize: "12px"}}>{this.state.breed}</span>
                        </div>
                        <div>
                            <span className="badge badge-warning" style={{fontSize: "12px"}}>{this.state.age}</span>
                        </div>
                    </h4>
                    <p className="card-text">
                        {this.state.description}
                    </p>
                </div>
                <div className="card-footer">
                    <div className="btn btn-success">Favorilere Ekle</div>
                    <div className="btn btn-secondary ml-3">
                        <Link className="text-decoration-none text-white" to='/'>Geri Dön</Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default PetDetailsPage;
