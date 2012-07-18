$.fn.resetForm = function(){
  this.find(':text,:checkbox,:radio,textarea,select').each(function(){
    switch(this.type){
      case 'select-multiple':
        $(this).find('option').removeAttr('selected');
      break;
      case 'select-one':
        $(this).find('option:first').attr('selected',1);
      break;
      case 'password':
      case 'text':
      case 'textarea':
        this.value = '';
      break;
      case 'checkbox':
      case 'radio':
        this.checked = false;
      break;
    }
  });
}