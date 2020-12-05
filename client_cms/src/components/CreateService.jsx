import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class CreateService extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
         id: this.props.match.params.id,
          service_name:'',
          service_image:'',
        }
        this.changeServiceNameHandler = this.changeServiceNameHandler.bind(this);
        this.changeServiceImageHandler = this.changeServiceImageHandler.bind(this);
 
    }
  
    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add_service'){
            return
        }else{
            AdminService.getServiceById(this.state.id).then( (res) =>{
                let service = res.data;
                this.setState({
                   
                   service_name : service.service_name,
                   service_image: service.service_image,
                   
                });
            });
        }        
    }
    saveOrUpdateService = (e) => {
        e.preventDefault();

       let service = {
           service_name: this.state.service_name,
           image: this.state.service_image
        };
       console.log('service => ' + JSON.stringify(service));

        // step 5
        if(this.state.id === '_add_service'){
            AdminService.createService(service).then(res =>{
                this.props.history.push('/service');
            });
        }else{
            AdminService.updateService(service, this.state.id).then( res => {
                this.props.history.push('/service');
            });
        }
    }
    
    changeServiceNameHandler= (event) => {
        this.setState({service_name: event.target.value});
    }
    changeServiceImageHandler =async(event) => {
        const file = event.target.files[0];
        const convertBase64 = (file) => {
            return new Promise((resolve, reject) => {
              const fileReader = new FileReader();
              fileReader.readAsDataURL(file);
        
              fileReader.onload = () => {
                resolve(fileReader.result);
              };
        
              fileReader.onerror = (error) => {
                reject(error);
              };
            });
          };
            const base64 = await convertBase64(file);
            console.log(base64);
            this.setState({service_image:  base64});
            
    }


    cancel(){
        this.props.history.push('/service');
    }

    getTitle(){
        if(this.state.id === '_add_service'){
            return <h3 className="text-center">Add Service</h3>
        }else{
            return <h3 className="text-center">Update Service</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Add Service: </label>
                                            <input placeholder="Add Service" name="addService" className="form-control" 
                                                value={this.state.service_name} onChange={this.changeServiceNameHandler}/>
                                             <input type="file" placeholder="image" name="file" className="form-control" 
                                                 accept="image/*" onChange={this.changeServiceImageHandler}/>
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateService}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateService
