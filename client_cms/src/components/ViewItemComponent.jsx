import React, { Component } from 'react'
import AdminService from '../services/AdminService'

class ViewitemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            item: [{}],
            items:''
        }
    }

    componentDidMount(){
        AdminService.getItemDetail(this.state.id).then( res => {
             this.setState({ item: res.data});
            console.log('category => ' + JSON.stringify( res.data));
            //console.log('item id => ' +this.state.item[0].image);
            
        })
        
    }
    
    render() {
        return (
            
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View item Details</h3>
                    <div className = "card-body">
                      
                        <div className = "row">
                            <label> Item Name :  </label>
                            <div> { this.state.item[0].item_name}</div>
                                                    
                        </div>
                        <div className = "row">
                            <label> image : </label>
                            <div> <img src = { this.state.item[0].image} border='3' height='100' width='100' atr=""/></div>
                                                    
                        </div>
                        <div className = "row">
                            <label> Day Clean And Iron Price : </label>
                            <div> { this.state.item[0].day_clean_and_iron_price}</div>
                                                    
                        </div>
                        <div className = "row">
                            <label> Wash And Iron Price : </label>
                            <div> { this.state.item[0].wash_and_iron_price}</div>
                                                    
                        </div>
                        <div className = "row">
                            <label> Stream Iron Price : </label>
                            <div> { this.state.item[0].stream_iron_price}</div>
                                                    
                        </div>
                        <div className = "row">
                            <label> Normal Iron Price : </label>
                            <div> { this.state.item[0].normal_iron_price}</div>
                                                    
                        </div>
                        <div className = "row">
                            <label> Category Id : </label>
                            <div> { this.state.item[0].category_id}</div>
                                                    
                        </div>

                        
                        
                       
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewitemComponent
