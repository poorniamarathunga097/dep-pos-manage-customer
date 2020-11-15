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
saveBtn.addEventListener('click',validateFields);

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

    if(id.length === 0){
        txtId.style.border = '2px solid red';
        return;
    }else if(id.length < 3){
        txtId.style.border = '2px solid red';
        return;
    }else{
        txtId.style.border = '1px solid #ced4da';
        validId = true;
    }

    if(name.length === 0){
        txtName.style.border = '2px solid red';
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
      alert("Wade Hari kelle");
    }
}

// Todo: add all functions
window.onload = function() {
    document.getElementById("txt-id").focus();
};