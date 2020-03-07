
reg = {
    email: function(){
        return new RegExp('\\S+@\\S+\\.\\S+')
    },
    name : function(min,max){
        return new RegExp(`^[a-zA-Z0-9]{${min},${max}}$`);  
    },
    password: function(min,max){
        return new RegExp(`^.{${min},${max}}$`)
    },
}


function validate(target,type,callback,options = false){

    if(!reg[type](options.min,options.max).test(target)){
        callback()
        return false
    }
    else{
        return true
    }
}
function activateLabels(){
    $('.form-control-label').addClass('activeLabel')
}
function deactivateLabels(){
    $('.form-control-label').removeClass('activeLabel')
}
function validateDate(day,month,year){

    let age = 18;
    let setDate = new Date(year + age, month , day);
    let currdate = new Date();
    
    if (currdate >= setDate) {
      // you are above 18
      return true
    } else {
      return false
    }
}
function validateLocation(location, array){
   
    return array.findIndex(item => location.toLowerCase() === item.toLowerCase()) != -1;
}