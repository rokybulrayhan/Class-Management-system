import axios from 'axios';


class AdminService {

    getStudents(){
        return axios.get("http://127.0.0.1:8000/api/all-student");
    }

    createStudent(student){
        return axios.post("http://127.0.0.1:8000/api/add-student", student);
    }

    getStudentById(studentId){
        return axios.get("http://127.0.0.1:8000/api/student-detail"+ '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put("http://127.0.0.1:8000/api/edit-student" + '/' + studentId, student);
    }

    deleteStudent(studentId){
        return axios.delete("http://127.0.0.1:8000/api/delete-student"+ '/' + studentId);
    }
    getCategoryWiseItem(categoryId){
        return axios.get("http://127.0.0.1:8181/api/admin/category/category-wise/"+categoryId+"/all-item");
    }
    getAllItem(){
        return axios.get("http://127.0.0.1:8181/api/admin/category/all-item");
    }
    deleteItem(itemId){
        return axios.delete("http://127.0.0.1:8181/api/admin/category/delete-item"+ '/' + itemId);
    }
   
    getItemDetail(itemId){
        return axios.get("http://127.0.0.1:8181/api/admin/category/detail-item"+ '/' + itemId);
    }
     
    createItem(item, categoryId){
        return axios.post("http://127.0.0.1:8181/api/admin/category/"+categoryId+ "/add-item", item );
    }
    updateItem(item, itemId){
        return axios.put("http://127.0.0.1:8181/api/admin/category/edit-item" + '/' + itemId, item);
    }
    registration(registration){
        return axios.post("http://127.0.0.1:8181/api/auth/signup", registration);
    }
    
    login(login){
        return axios.post("http://127.0.0.1:8181/api/auth/login", login);
    }
    createService(service){
        return axios.post("http://127.0.0.1:8181/api/admin/add-service", service);
    }
    getServices(){
        return axios.get("http://127.0.0.1:8181/api/admin/service/all-service");
    }
    deleteService(serviceId){
        return axios.delete("http://127.0.0.1:8181/api/admin/service/delete-service"+ '/' + serviceId);
    }
    getServiceById(serviceId){
    return axios.get("http://127.0.0.1:8181/api/admin/service/detail-service"+ '/' + serviceId);
    }
    updateService(service, serviceId){
        return axios.put("http://127.0.0.1:8181/api/admin/service/edit-service" + '/' + serviceId, service);
    }


    
}

export default new AdminService()