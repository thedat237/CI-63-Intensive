export function processUpdate(){
    const ques1=prompt('Thay đổi data ở id nào:')
    for(let employee of listEmployee){
        // console.log(i.id);
        if(ques1==employee.id){
            const ques2=prompt('Tên mới:');
            const ques3=prompt('Ảnh mới');
            const ques4=prompt('Ngày tạo')
            employee.name=ques2;
            employee.img=ques3;
            employee.createdAt=ques4;
            const newUpdateEmployee=new Employee(employee.id, ques2, ques3, ques4);
            console.log('Before Update:');
            console.log({newUpdateEmployee});
            console.log('List Employee After Update: ');
            console.log(listEmployee);
            
        }
    }
}

