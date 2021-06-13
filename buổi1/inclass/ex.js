
//đảo ngược chuỗi
function reverseString(str) {
    let newString='';
    for(let i=str.length-1;i>=0;i--){
        newString+=str[i];
    }
    console.log(newString);
}
reverseString('hello');


//
const checkStr=(str)=>{
    const temp =str.split('');

    for(let i=0;i<temp.length;i++){
        if(temp[i] !== temp.[temp.length-i-1])
        return false;
    }
    return true;
};
// abc1cba



// sort; search; binary search tree; linked list; hash table; graph structures

//tìm số lớn thứ 2 trong mảng

const FindSort = (arr)=>{
    const temp=arr.sort((a,b)=>b-a);
    return temp[1];
};
console.log(FindSort([2,3,6,7,2]))