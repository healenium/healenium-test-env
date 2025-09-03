$('.js-tilt').tilt({
    scale: 1.1
})

function showValidate() {
    // Change the id of the input field
    var inputField = document.getElementById('iframe_input');
    if (inputField) {
        inputField.id = 'iframe_input_changed';
    }
    
    // Change the name of the select field
    var selectField = document.getElementById('iframe_select_item');
    if (selectField) {
        selectField.name = 'iframe_item_changed';
    }
    
    alert('Fields have been changed!');
}
