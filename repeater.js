// let dataValues = document.getElementById('dataValues');
// let formData = document.getElementById('formId');
// formData.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     let inputDiv = document.getElementsByClassName('inputDiv');
//     let dataArr = [];
//     for (let i = 0; i < inputDiv.length; i++) {
//         let inputElements = inputDiv[i].getElementsByTagName('input');
//         let name = inputElements[0].value;
//         let city = inputElements[1].value;
//         dataArr.push({
//             name,
//             city
//         });
//     }
//      console.log(dataArr);
//     // dataValues.value = dataArr;
//      dataValues.value = JSON.stringify(dataArr);
//     // console.log(dataValues.value);
// });

$(document).ready(function () {
    //initializing var
    var i = 1;
    var node = 1;
    $('#add').click(function () {
        i++;
        node++;
        //adding buttons
        $('#tableFields').append('<tr class="inputDiv" id="row' + i + '"><td><input type="text" name="data[node'+node +'][name]" placeholder="Enter your Name" class="form-control name_list" /></td><td><input type="text" name="data[node'+node +'][city]" placeholder="Enter your City" class="form-control name_list" /></td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">X</button></td></tr>');
    });
    //remove buttons
    $(this).on('click', '.btn_remove', function () {
        var button_id = $(this).attr("id");
        $('#row' + button_id + '').remove();
    });
});