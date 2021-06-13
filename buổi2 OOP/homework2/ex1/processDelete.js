export function processDelete(){
    const quesDelete=prompt('Nhập id muốn xóa');
    for(let employee=0;employee<listEmployee.length;employee++){
        if(quesDelete==listEmployee[employee].id){
            listEmployee.splice(employee, 1);
            console.log('List Employee After Delete:');
            console.log(listEmployee);
        }
    }  
}