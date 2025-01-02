const URL_API = 'http://127.0.0.1:5000/api';
let map = L.map('map').setView([36.7783, -119.4179], 6);
let marker;

$(document).ready(function () {
    $('#form_predict_price').validate({
        rules: {
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

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    function addMarker(e) {
        const latitude = $('#latitude').val(e.latlng.lat);
        const longitude = $('#longitude').val(e.latlng.lng);
    
        if (marker) {
            marker.remove();
            marker = null;
        }
    
        marker = L.marker([latitude.val(), longitude.val()]).addTo(map);
		marker.bindPopup(`<b>Coordenadas</b><br> [${longitude.val()}, ${latitude.val()}]`).openPopup();
    }

    map.on('click', function (e) {
        addMarker(e);
    });

    $("#form_predict_price").submit(handlePredictPrice);
});

async function handlePredictPrice(e) {
    e.preventDefault();

    if (isEmpty() === true) return;

    toggleLoadingState("#btn_submit", true, "Calculando...", null);
    disable(".btn", true);

    var isDisabled = false;

    try {    
        await $.post(`${URL_API}/`, $("#form_predict_price").serialize(), function (data) {
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

        isDisabled = true;
    } catch (error) {
        console.error("Error al calcular: ", error);
        isDisabled = false;
    } finally {
        disable("#btn_submit", isDisabled);
        toggleLoadingState("#btn_submit", false, "Calcular", null);
    }
}

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

function disable(selector, isDisabled) {
    const btn = $(selector);
    if (isDisabled) {
        btn.attr('disabled', true);
    } else {
        btn.removeAttr("disabled");
    }
}

function toggleLoadingState(id, isLoading, text, icon) {
    const btn = $(id);
    if (isLoading) {
        btn.html(`<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> ${text}`);
    } else {
        btn.html(`<i class="fa-solid ${icon}"></i> ${text}`);
    }
}

function resetForm() {
    $("#form_predict_price").trigger("reset");
    disable(".btn", false);
    $("#btn_submit").html("Calcular");

    if (marker) {
        marker.remove();
        marker = null;
    }
}