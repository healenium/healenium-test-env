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

    // Change the frame title and the id of the input field in nested iframe (demo_frame2.html)
    var iframe2 = document.getElementById('iframe_2_id');
    if (iframe2) {
        iframe2.title = "New title for nested frame" 
        var iframe2Doc = iframe2.contentDocument || iframe2.contentWindow.document;
        var nestedInputField = iframe2Doc.getElementById('iframe_2_input');
        if (nestedInputField) {
            nestedInputField.id = 'newId_iframe2';
        }
    }

    alert('Fields have been changed!');
}
