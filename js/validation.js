
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