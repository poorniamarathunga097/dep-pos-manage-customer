/*
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *                     Version 2, December 2004
 *
 *  Copyright (C) 2020 IJSE
 *
 *  Everyone is permitted to copy and distribute verbatim or modified
 *  copies of this license document, and changing it is allowed as long
 *  as the name is changed.
 *
 *             DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 *    TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION
 *
 *   0. You just DO WHAT THE FUCK YOU WANT TO.
 */

/**
 * @author : Ranjith Suranga <suranga@ijse.lk>
 * @since : 11/15/20
 **/

/*===============================================================================
 * Global Variables
 *===============================================================================*/

// Todo: add all global variable declaration here

/*===============================================================================
 * Init
 *===============================================================================*/

init();

function init(){
    // Todo: add the initialization code if any
}

/*===============================================================================
 * Event Handlers and Timers
 *===============================================================================*/

// Todo: add all event listeners and handlers here

var saveBtn = document.getElementById('btn-save');
/*saveBtn.addEventListener('click',validateFields);*/
var newRow;
var row = 1;

function validateFields(){
    var id = document.getElementById('txt-id').value;
    var name = document.getElementById('txt-name').value;
    var address = document.getElementById('txt-address').value;

    var txtId = document.getElementById('txt-id');
    var txtName = document.getElementById('txt-name');
    var txtAddress = document.getElementById('txt-address');

    var validId = false;
    var validName = false;
    var validAddress = false;

    var regex1 = /[{4}\d]+$/;
    if(id.length === 0){
        txtId.style.border = '2px solid red';
        return;
    }else if(regex1.test(id) === false){
        txtId.style.border = '2px solid red';
        return;
    }else if(id.length < 3){
        txtId.style.border = '2px solid red';
        return;
    }else{
        txtId.style.border = '1px solid #ced4da';
        validId = true;
    }

    var regex2 = /^[a-zA-Z\s]+$/;
    if(name.length === 0){
        txtName.style.border = '2px solid red';
        return;
    }else if(regex2.test(name) === false) {
        txtName.style.border = '2px solid red';
        alert('regex');
        return;
    }else if(name.length < 3){
        txtName.style.border = '2px solid red';
        return;
    }else{
        txtName.style.border = '1px solid #ced4da';
        validName = true;
    }

    if(address.length === 0){
        txtAddress.style.border = '2px solid red';
        return;
    }else if(address.length < 4){
        txtAddress.style.border = '2px solid red';
        return;
    }else{
        txtAddress.style.border = '1px solid #ced4da';
        validAddress = true;
    }

    if(validId || validName || validAddress){
        var display = document.getElementById('tbl-customers');

        newRow = display.insertRow(row);
        newRow.className = 'tbl-row';

        var tId = newRow.insertCell(0);
        var tName = newRow.insertCell(1);
        var tAddress = newRow.insertCell(2);
        var tDelete = newRow.insertCell(3);

        tId.innerHTML = id;
        tName.innerHTML = name;
        tAddress.innerHTML = address;
        tDelete.innerHTML = '<img onclick="removeRow(this)" src="img/trash.png" id="delete-image">';

        row++;

        var table = document.getElementById('tbl-customers');

        for(var i = 0; i < table.rows.length; i++){
            table.rows[i].onclick = function (){
                document.getElementById("txt-id").value = this.cells[0].innerHTML;
                document.getElementById("txt-name").value = this.cells[1].innerHTML;
                document.getElementById("txt-address").value = this.cells[2].innerHTML;
            }
        }

        /*for(var i = 0; i <table.rows.length; i++){
            table.rows[i].onclick = function (){
                rIndex = this.rowIndex;
                console.log(rIndex);
            }
        }*/
    }

}
/*

function removeRow(td){
    if(confirm("Are you sure to delete the rocord?"))
    var row = td.parentElement.parentElement;
    document.getElementById('tbl-customers').deleteRow(row.rowIndex);
}
*/

/*var tableRow = document.querySelector('#tbl-customers');
tableRow.addEventListener('click', function(){
    console.log('click');
});*/



// Todo: add all functions
window.onload = function() {
    document.getElementById("txt-id").focus();
};

