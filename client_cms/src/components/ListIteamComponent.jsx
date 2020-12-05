import React, { Component } from 'react'
import AdminService from '../services/AdminService'

class ListItemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                items: []
        }
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.categoryWiseItem = this.categoryWiseItem.bind(this);
        if(this.props.match.params.id){
            console.log(this.props.match.params.id);
            let id = this.props.match.params.id;
            AdminService.getCategoryWiseItem(id).then((res) => {
                this.setState({ items: res.data});
                console.log('category => ' + JSON.stringify(res.data));
             
             
            });
            
        }
       
        
    }
    deleteItem(id){
        AdminService.deleteItem(id).then( res => {
            this.setState({items: this.state.items.filter(item => item.id !== id)});
        });
    }
    viewItem(id){
        this.props.history.push(`/view-item/${id}`);
    }
    editItem(id){
        this.props.history.push(`/update-item/${id}`);
    }


    componentDidMount(){
        AdminService.getAllItem().then((res) => {
            this.setState({ items: res.data});
        });
    }

    addItem(){
        let id = this.props.match.params.id;
        console.log(this.props.match.params.id);
        if(this.props.match.params.id === undefined){
            this.props.history.push(`/category`);
        }
        else{
            this.props.history.push(`/add-item/${id}`);
        }
    }
   
    categoryWiseItem(id){
      
        AdminService.getCategoryWiseItem(id).then((res) => {
            this.setState({ items: res.data});
            console.log('category => ' + JSON.stringify(res.data));
        });  
        this.props.history.push(`/category-/item-list/${id}`);       
    }
    
  
    render() {
        return (
            <div>
                 <h2 className="text-center">Item List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addItem}> Add Item</button>
                 </div>
                 
                 <br></br>
                 <div className = "row">
                
                        <table className = "table table-striped table-bordered">
                            
                            <thead>
                                <tr>
                                    <th>item Name</th>
                                    <th>image</th>
                                    <th>Day Clean and Iron Price</th>
                                    <th>Wash And Iron Price</th>
                                    <th>Stream Iron Price</th>
                                    <th>Normal Iron Price</th>
                                    
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.items.map(
                                        item => 
                                        <tr key = {item.id}>
                                             <td> { item.item_name} </td>   
                                             <td colspan ='1'><img src = {item.image} border='3' height='100' width='100' atr=""/></td> 
                                             <td> { item.day_clean_and_iron_price} </td> 
                                             <td> { item.wash_and_iron_price} </td> 
                                             <td> { item.stream_iron_price} </td> 
                                             <td> { item.normal_iron_price} </td> 
                                             <td>
                                                 <button onClick={ () => this.editItem(item.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteItem(item.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewItem(item.id)} className="btn btn-info">View </button>
                                                 
                                             </td>
                                          
                                         
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListItemComponent
