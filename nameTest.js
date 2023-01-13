const getFullname = (fname,lname) =>{
    return `${fname} ${lname}`;
}
const actualFullname = getFullname('dhanush','holla');
const expectedfullname = 'dhanus holla';

if(actualFullname !== expectedfullname){
    throw new Error(`${actualFullname} is not as same as ${expectedfullname}`);
}else{
    console.log('working as expected');
}