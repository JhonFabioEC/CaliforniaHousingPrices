$(document).ready(function () {
    $('#form_predict_price').validate({
        rules: {
            longitude: {
                required: true
            },
            latitude: {
                required: true
            },
            housing_median_age: {
                required: true
            },
            total_rooms: {
                required: true
            },
            total_bedrooms: {
                required: true
            },
            population: {
                required: true
            },
            households: {
                required: true
            },
            median_income: {
                required: true
            },
            ocean_proximity: {
                required: true
            }
        },
        messages: {
            longitude: {
                required: "Por favor ingrese una longitud"
            },
            latitude: {
                required: "Por favor ingrese una latitud"
            },
            housing_median_age: {
                required: "Por favor ingrese la edad media de la vivienda"
            },
            total_rooms: {
                required: "Por favor ingrese la cantidad de habitaciones totales"
            },
            total_bedrooms: {
                required: "Por favor ingrese la cantidad de dormitorios totales"
            },
            population: {
                required: "Por favor ingrese la cantidad de población"
            },
            households: {
                required: "Por favor ingrese la cantidad de hogares"
            },
            median_income: {
                required: "Por favor ingrese el ingreso medio"
            },
            ocean_proximity: {
                required: "Por favor ingrese la proximidad al mar"
            }
        },
        highlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-error").removeClass("has-success");
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).parents(".col-sm-10").addClass("has-success").removeClass("has-error");
        }
    });

    $("#form_predict_price").submit(function (e) {
        e.preventDefault();

        if (isEmpty() == false) {
            getStatusbtnSubmit();
            $.post("http://localhost:5000/", $("#form_predict_price").serialize(), function (data) {
                Swal.fire({
                    title: 'El precio de la vivienda es: $' + data,
                    icon: 'success',
                    showConfirmButton: true,
                    confirmButtonText: 'Ok',
                }).then((result) => {
                    if (result.isConfirmed) {
                        resetForm();
                    } else {
                        resetForm();
                    }
                });
            });
        }
    });
})

function isEmpty() {
    const longitude = $('#longitude').val();
    const latitude = $('#latitude').val();
    const housing_median_age = $('#housing_median_age').val();
    const total_rooms = $('#total_rooms').val();
    const total_bedrooms = $('#total_bedrooms').val();
    const population = $('#population').val();
    const households = $('#households').val();
    const median_income = $('#median_income').val();
    const ocean_proximity = $('#ocean_proximity').val();

    if (longitude == '' || latitude == '' || housing_median_age == '' || total_rooms == '' ||
        total_bedrooms == '' || population == '' || households == '' || median_income == '' ||
        ocean_proximity == '') {
        return true;
    }
    return false;
}

function getStatusbtnSubmit() {
    $('#btn_submit').attr('disabled', true);
    $("#btn_submit").html(`
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Cargando...
    `);
}

function resetForm() {
    $("#form_predict_price").trigger("reset");
    $('#btn_submit').attr('disabled', false);
    $("#btn_submit").html("Predecir");
    window.location.href = "/CaliforniaHousingPrices/";
}