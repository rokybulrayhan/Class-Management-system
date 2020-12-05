import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class CreateItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
          id: this.props.match.params.id,
          item_name:'',
          image:'',
          day_clean_and_iron_price:'',
          wash_and_iron_price:'',
          stream_iron_price:'',
          normal_iron_price:'',
          
      
        }
        this.changeItemNameHandler = this.changeItemNameHandler.bind(this);
        this.changeImageNameHandler = this.changeImageNameHandler.bind(this);
        this.changeDayCleanAndIronPriceNameHandler = this.changeDayCleanAndIronPriceNameHandler.bind(this);
        this.changeWashAndIronPriceHandler = this.changeWashAndIronPriceHandler.bind(this);
        this.changeStreamIronPriceHandler = this.changeStreamIronPriceHandler.bind(this);
        this.changeNormalIronPriceHandler = this.changeNormalIronPriceHandler.bind(this);
 
    }
  
    // step 3
    componentDidMount(){

        // step 4
        if(this.props.match.params.id){
            return
        }else{
            AdminService.getItemById(this.state.id).then( (res) =>{
                let item = res.data;
                this.setState({
                   item_name : item.item_name,
                   image: item.image,
                   day_clean_and_iron_price: item.day_clean_and_iron_price,
                   wash_and_iron_price: item.wash_and_iron_price,
                   stream_iron_price: item.stream_iron_price,
                   normal_iron_price: item.normal_iron_price,
                });
            });
        }        
    }
    
    saveOrUpdateItem = (e) => {
        e.preventDefault();
     
       let item = {item_name: this.state.item_name,
                   image: this.state.image,
                   day_clean_and_iron_price: this.state.day_clean_and_iron_price,
                   wash_and_iron_price: this.state.wash_and_iron_price,
                   stream_iron_price:this.state.stream_iron_price,
                   normal_iron_price: this.state.normal_iron_price,
                   
      };
       console.log('item => ' + JSON.stringify(item));

        // step 5
        console.log(this.props.match.path);
        if(this.props.match.params.id){
            let cid = this.props.match.params.id;
            if(this.props.match.path ==="/update-item/:id"){
                
                AdminService.updateItem(item,cid).then(res =>{
           
                    this.props.history.push(`/item-list`);
                });
            }
            else{
            AdminService.createItem(item,cid).then(res =>{
                this.props.history.push(`/category-/item-list/${cid}`);
            });
        }
        }
     
    }
    
    changeItemNameHandler= (event) => {
        this.setState({item_name: event.target.value});
    }
    changeImageNameHandler=async (event) => {
       
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
            this.setState({image:  base64});
      
    }
  
 
    changeDayCleanAndIronPriceNameHandler= (event) => {
        this.setState({day_clean_and_iron_price: event.target.value});
    }
    changeWashAndIronPriceHandler= (event) => {
        this.setState({wash_and_iron_price: event.target.value});
    }
    changeStreamIronPriceHandler= (event) => {
        this.setState({stream_iron_price: event.target.value});
    }
    changeNormalIronPriceHandler= (event) => {
        this.setState({normal_iron_price: event.target.value});
    }

    cancel(){
        this.props.history.push('/category');
    }

    getTitle(){
        if(this.props.match.path ==="/update-item/:id"){
            return <h3 className="text-center">Update item</h3>
        }else{
            return <h3 className="text-center">Add item</h3>
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
                                            <label> Add Item: </label>
                                                <input placeholder="item Name" name="addItem" className="form-control" 
                                                value={this.state.item_name} onChange={this.changeItemNameHandler}/>
                                                <input type="file" placeholder="image" name="file" className="form-control" 
                                                 accept="image/*" onChange={this.changeImageNameHandler}/>
                                                <input placeholder="Day Clean And Iron Price" name="addItem" className="form-control" 
                                                value={this.state.day_clean_and_iron_price} onChange={this.changeDayCleanAndIronPriceNameHandler}/>
                                                <input placeholder="Wash And Iron Price" name="addItem" className="form-control" 
                                                value={this.state.wash_and_iron_price} onChange={this.changeWashAndIronPriceHandler}/>
                                                <input placeholder="Strean Iron Price" name="addItem" className="form-control" 
                                                value={this.state.stream_iron_price} onChange={this.changeStreamIronPriceHandler}/>
                                                <input placeholder="Normal Iron Price" name="addItem" className="form-control" 
                                                value={this.state.normal_iron_price} onChange={this.changeNormalIronPriceHandler}/>
                            
                                                
                                         </div>
                            
                                        

                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateItem}>Save</button>
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

export default CreateItem
