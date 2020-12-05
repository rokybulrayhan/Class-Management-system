import React, { Component } from 'react'
import AdminService from '../services/AdminService'


class ListServiceComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                services: [],
                items : []
        }
        this.addService = this.addService.bind(this);
        this.editService = this.editService.bind(this);
        this.deleteService = this.deleteService.bind(this);
        this.addService = this.addService.bind(this);
        this.show = true;
        this.ServiceButtonShow = true;
        this.itemButtonShow = true;
        this.serviceButtonShow = true;
       
       
    }

    deleteService(id){
        AdminService.deleteService(id).then( res => {
            this.setState({services: this.state.services.filter(service => service.id !== id)});
        });
    }
    viewService(id){
        this.props.history.push(`/view-service/${id}`);
    }
    editService(id){
        this.props.history.push(`/add-service/${id}`);
    }
    
    componentDidMount(){
        AdminService.getServices().then((res) => {
            this.setState({ services: res.data});
        });
    }

    addService(){
        this.props.history.push('/add-service/_add_service');
    }

    serviceItems(){
        this.props.history.push('/item-list');
    }
    

    serviceWiseItem(id){
        
        this.props.history.push(`/service-/item-list/${id}`);
        
    }
    
    showButtonService(){
        this.serviceButtonShow = true;
        this.itemButtonShow = true;
        this.serviceButtonShow = false;


    }
    showButtonService(){
       this.serviceButtonShow = false;
       this.itemButtonShow = false;
       this.serviceButtonShow = true;

    }

    render() {
        return (
            <div >
                 
                 <h2 className="text-center">Service List</h2>
                 <div >
               
                 <div className = "row">
                    <button style={{marginLeft: "10px"}} className="btn btn-danger" onClick={this.addService}> Add Service</button>
                 </div>
                 
                
                 <br></br>
                {/* {
                 this.state.show ?
                 :null
                 }*/}
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Service Name</th>
                                    <th>Service Image</th>
                                    
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.services.map(
                                        service => 
                                        <tr key = {service.id}>
                                             <td> { service.service_name} </td>
                                             <td colspan ='1'><img src = {service.image} border='3' height='100' width='100' atr=""/></td>    
                                          
                                             <td>
                                                 <button onClick={ () => this.editService(service.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteService(service.id)} className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        

                 </div>
                
     
                </div>
                            
                

            </div>
           
        )
    }
    
}

export default ListServiceComponent
