import React, { Component } from 'react'
import AdminService from '../services/AdminService'


class ListStudentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                students: [],
                items : []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
         
    }

    deleteStudent(id){
        AdminService.deleteStudent(id).then( res => {
            this.setState({students: this.state.students.filter(student => student.id !== id)});
        });
    }
    viewStudent(id){
        this.props.history.push(`/view-student/${id}`);
    }
    editStudent(id){
        this.props.history.push(`/add-student/${id}`);
    }
    
    componentDidMount(){
        AdminService.getStudents().then((res) => {
            this.setState({ students: res.data});
        });
        
    }

    addStudent(){
        this.props.history.push('/add-student/_add');
    }
  
    studentWiseItem(id){
        
        this.props.history.push(`/student-/item-list/${id}`);
        
    }
    
    showButtonStudent(){
        this.studentButtonShow = true;
        this.itemButtonShow = true;
        this.serviceButtonShow = false;


    }
    showButtonService(){
       this.studentButtonShow = false;
       this.itemButtonShow = false;
       this.serviceButtonShow = true;

    }
    
    


    render() {
        return (
            <div >
                 
                 <h2 className="text-center">Student List</h2>
                 <div >
               
                 <div className = "row">
                    
                    <button style={{marginLeft: "10px"}} className="btn btn-primary" onClick={this.addStudent}> Add Student</button>
                 </div>
                 
                
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Semester Name</th>
                                    <th>Section</th>
                                    <th>Id Number</th>
                                    <th>Birth Date</th>
                                    <th>Email</th>
                                    
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {    
                                    this.state.students.map(
                                        student => 
                                        <tr key = {student.id}>
                                             <td> { student.student_name} </td>
                                             <td> { student.semester_name} </td>
                                             <td> { student.section} </td>
                                             <td> { student.id_number} </td>
                                             <td> { student.birth_date} </td>
                                             <td> { student.email} </td>
                                             {/*<td colspan ='1'><img src = {student.student_image} border='3' height='100' width='100' atr=""/></td> */}   
                                          
                                             <td>
                                                 <button onClick={ () => this.editStudent(student.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.id)} className="btn btn-danger">Delete </button>
                                                 {/*<button style={{marginLeft: "10px"}} onClick={ () => this.viewCategory(category.id)} className="btn btn-info">View </button> */}
                                                 {/*<button style={{marginLeft: "10px"}}  
                                               onClick={ () => this.studentWiseItem(student.id)  }
                                                  
                                                 className="btn btn-info">Item List </button>
                                    */}
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

export default ListStudentComponent
