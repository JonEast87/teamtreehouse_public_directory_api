$(document).ready(function () {
    'use strict';
    const getData = function () {
        return $.ajax({
            url: 'https://randomuser.me/api/',
            data: {
                format: 'json',
                results: '12',
                nat: 'us',
                exc: 'login'
            },
            dataType: 'json',
        });
    };

    getData().done(function (data) {

        const employeeObject = {
            addEmployee: function (data) {
                const employeeObjects = data.results;
                let employees = employeeObjects.map((x) => x);
                return employees;
            },

            closeModalWindow: function () {
                $('#overlay').css('display', 'none');
                $('#modal').css('display', 'none');
            },

            currentIndex: (value) => value,

            displayEmployees: function (data) {
                let employee = '<ul class="employee-grid">';
                $.each(data.results, function (index, value) {
                    employee += `<li class="employee">
                    <img class="photo" src=${value.picture.large}>
                    <div><p id="name">${value.name.first} ${value.name.last}</p>
                    <p id="email">${value.email}</p>
                    <p id="city">${value.location.city}</p></div>`;
                });
                employee += '</ul>';
                $('.employees').html(employee);
            },

            employeeIndex: function (currentIndex) {
                return currentIndex < 1 ? $('#prev').css('display', 'none') :
                    currentIndex > 10 ? $('#next').css('display', 'none') :
                    $('#prev').css('display', 'inline') && $('#next').css('display', 'inline');
            },

            fillModalWindow: function (data) {
                let content = `<div class="modal_info">
                    <img class="photo" src=${data.picture.large}>
                    <div><h3>${data.name.first} ${data.name.last}</h3>
                    <p>${data.email}</p>
                    <p>${data.location.city}</p>
                    <hr>
                    <p>${data.cell}</p>
                    <p>${data.location.street} ${data.location.city} ${data.location.state} ${data.location.postcode}</p>
                    <p>Birthday: ${data.dob}</p></div>`;
                $('#content').html(content);
                $('div.modal_info').css('display', 'inline');
            },

            searchEmployees: function (data, terms) {
                const employees = data.results;
                return employees.map((x) => {
                    const name = `${x.name.first} ${x.name.last}`;
                    if (terms === name) {
                        this.showModalWindow();
                        return this.fillModalWindow(x);
                    }
                });
            },

            showNextEmployee: function (data) {
                employeeHandler.storeHandler = employeeHandler.storeHandler + 1;
                this.employeeIndex(employeeHandler.storeHandler);
                this.fillModalWindow(employeeObject.addEmployee(data)[employeeHandler.storeHandler]);
            },

            showPreviousEmployee: function (data) {
                employeeHandler.storeHandler = employeeHandler.storeHandler - 1;
                this.employeeIndex(employeeHandler.storeHandler);
                this.fillModalWindow(employeeObject.addEmployee(data)[employeeHandler.storeHandler]);
            },

            showModalWindow: function () {
                $('#overlay').css('display', 'block');
                $('#modal').css('display', 'inline-block');
            },
        };

        const employeeHandler = {
            searchHandler: (data, terms) => {
                employeeObject.searchEmployees(data, terms);
            },
            showHandler: (selected) => {
                let index = employeeObject.currentIndex($(selected).index());
                employeeObject.employeeIndex(index);
                employeeObject.showModalWindow();
                employeeObject.fillModalWindow(employeeObject.addEmployee(data)[index]);
            },
            storeHandler: undefined
        };

        $('form').on('submit', function () {
            event.preventDefault();
            const terms = $('input').val();
            employeeHandler.searchHandler(data, terms);
        });

        $('body').on('click', 'li.employee', function (event) {
            employeeHandler.showHandler(this);
            employeeHandler.storeHandler = $(this).index();
        });

        $('body').on('click', '#prev', function (event) {
            event.preventDefault();
            employeeObject.showPreviousEmployee(data);
        });

        $('body').on('click', '#next', function (event) {
            event.preventDefault();
            employeeObject.showNextEmployee(data);
        });

        $('body').on('click', '#close', function (event) {
            event.preventDefault();
            employeeObject.closeModalWindow();
        });

        employeeObject.displayEmployees(data);
    });
});