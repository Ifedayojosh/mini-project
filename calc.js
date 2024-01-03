function display(value){
    document.getElementById('display').value += value;
}
function result(){
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error){
        display.value = 'Error';
    }
}
function cleardisplay(){
    document.getElementById('display').value = '';
}