import React, { Component } from 'react'
import AdminService from '../services/AdminService';

class CreateStudent extends Component {
    constructor(props) {
        super(props)
// 'student_name', 'semester_name', 'section','id_number','birth_date','email'
        this.state = {
         id: this.props.match.params.id,
         student_name:'',
         semester_name:'',
         section:'',
         id_number:'',
         birth_date:'',
         email:'',
         student_image:'',
        }
        this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
        this.changeSemesterNameHandler = this.changeSemesterNameHandler.bind(this);
        this.changeSectionHandler = this.changeSectionHandler.bind(this);
        this.changeIdNumberHandler = this.changeIdNumberHandler.bind(this);
        this.changeBirthDateHandler = this.changeBirthDateHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeStudentImageHandler = this.changeStudentImageHandler.bind(this);
 
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            AdminService.getStudentById(this.state.id).then( (res) =>{
                let student = res.data;
                this.setState({
                   // 'student_name', 'semester_name', 'section','id_number','birth_date','email'
                    student_name : student.student_name,
                    semester_name : student.semester_name,
                    section : student.section,
                    id_number : student.id_number,
                    birth_date : student.birth_date,
                    email: student.email,
                   // student_image: this.state.student_image
                   
                });
            });
        }        
    }
    saveOrUpdateStudent = (e) => {
        e.preventDefault();

       let student = {
           student_name : this.state.student_name,
           semester_name :this.state.semester_name,
           section : this.state.section,
           id_number : this.state.id_number,
           birth_date : this.state.birth_date,
           email: this.state.email,
        };
       console.log('student => ' + JSON.stringify(student));

  
        if(this.state.id === '_add'){
            AdminService.createStudent(student).then(res =>{
                this.props.history.push('/student');
            });
        }else{
            AdminService.updateStudent(student, this.state.id).then( res => {
                this.props.history.push('/student');
            });
        }
    }
    // 'student_name', 'semester_name', 'section','id_number','birth_date','email'
    changeStudentNameHandler= (event) => {
        this.setState({student_name: event.target.value});
    }
    changeSemesterNameHandler= (event) => {
        this.setState({semester_name: event.target.value});
    }
    changeSectionHandler= (event) => {
        this.setState({section: event.target.value});
    }
    changeIdNumberHandler= (event) => {
        this.setState({id_number: event.target.value});
    }
    changeBirthDateHandler= (event) => {
        this.setState({birth_date: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeStudentImageHandler =async(event) => {
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
            this.setState({student_image:  base64});
            
    }


    cancel(){
        this.props.history.push('/student');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
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
                                            <label> Add Student: </label>
                                            <input placeholder="Student Name" name="addStudent" className="form-control" 
                                                value={this.state.student_name} onChange={this.changeStudentNameHandler}/>
                                           <input placeholder="Semester Name" name="addStudent" className="form-control" 
                                                value={this.state.semester_name} onChange={this.changeSemesterNameHandler}/>
                                           <input placeholder="Section" name="addStudent" className="form-control" 
                                                value={this.state.section} onChange={this.changeSectionHandler}/>
                                           <input placeholder="ID Number" name="addStudent" className="form-control" 
                                                value={this.state.id_number} onChange={this.changeIdNumberHandler}/>
                                           <input placeholder="Birth Date" name="addStudent" className="form-control" 
                                                value={this.state.birth_date} onChange={this.changeBirthDateHandler}/>
                                            <input placeholder="Email" name="addStudent" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                            {/*<input type="file" placeholder="image" name="file" className="form-control" 
                                                 accept="image/*" onChange={this.changeStudentImageHandler}/>
                            */}
                                        </div>
                                        
                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
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

export default CreateStudent
