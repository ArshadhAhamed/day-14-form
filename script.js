document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        let firstName = document.getElementById('first-name').value;
        let lastName = document.getElementById('last-name').value;
        let email = document.getElementById('email').value;
        let address = document.getElementById('address').value;
        let pincode = document.getElementById('pincode').value;
        let gender = document.querySelector('input[name="gender"]:checked').value;
        
        let foods = [];
        document.querySelectorAll('input[name="food"]:checked').forEach(function(food) {
            foods.push(food.value);
        });
        if (foods.length < 2) {
            alert("Please select at least two food options.");
            return;
        }
        
        let state = document.getElementById('state').value;
        let country = document.getElementById('country').value;
        
        let table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();
        
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        let cell6 = newRow.insertCell(5);
        let cell7 = newRow.insertCell(6);
        let cell8 = newRow.insertCell(7);
        let cell9 = newRow.insertCell(8);
        
        cell1.innerHTML = firstName;
        cell2.innerHTML = lastName;
        cell3.innerHTML = email;
        cell4.innerHTML = address;
        cell5.innerHTML = pincode;
        cell6.innerHTML = gender;
        cell7.innerHTML = foods.join(', ');
        cell8.innerHTML = state;
        cell9.innerHTML = country;
        
        document.getElementById('form').reset();
    });
});