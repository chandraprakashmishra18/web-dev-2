arr1=[1,2,3,4,5];
arr2=['a','b','c','d','e'];
for (i=0;i<arr1.length;i++){
    arr3=arr1[i]+arr2[i]
    console.log(arr3);}


arrr1=[2,4,5,4,65]
arrr2=[23,56,45,8,5,154,2]
for (j=0;j<arrr2.length;j++){
    arrr1.push(arrr2[j])
    console.log(arrr1);
}
obj1={name:"john",age:23,city:"new york"}
obj2={name:"doe",age:25,city:"san francisco"}
obj3={}
for (key in obj1){
    obj3[key]=obj1[key]
    obj3[value]=obj2[value]
    console.log(obj3);
}