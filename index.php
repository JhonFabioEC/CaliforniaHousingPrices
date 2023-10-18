<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Predicción de Precios de Viviendas en California</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8">
                <!-- <form id="form_predict_price" action="#" method="post" class="mt-2 needs-validation" novalidate> -->
                <form id="form_predict_price" action="#" method="post" novalidate="novalidate">
                    <h1 class="text-center mb-3">Predicción de Precios de Viviendas en California</h1>

                    <div class="row mb-3">
                        <label for="longitude" class="col-sm-4 col-form-label">Longitud</label>
                        <div class="col-sm-8">
                            <input type="number" name="longitude" id="longitude" class="form-control" placeholder="Longitud" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="latitude" class="col-sm-4 col-form-label">Latitud</label>
                        <div class="col-sm-8">
                            <input type="number" name="latitude" id="latitude" class="form-control" placeholder="Latitud" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="housing_median_age" class="col-sm-4 col-form-label">Edad media de la vivienda</label>
                        <div class="col-sm-8">
                            <input type="number" name="housing_median_age" id="housing_median_age" class="form-control" placeholder="Edad media de la vivienda" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="total_rooms" class="col-sm-4 col-form-label">Habitaciones totales</label>
                        <div class="col-sm-8">
                            <input type="number" name="total_rooms" id="total_rooms" class="form-control" placeholder="Habitaciones totales" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="total_bedrooms" class="col-sm-4 col-form-label">Dormitorios totales</label>
                        <div class="col-sm-8">
                            <input type="number" name="total_bedrooms" id="total_bedrooms" class="form-control" placeholder="Dormitorios totales" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="population" class="col-sm-4 col-form-label">Población</label>
                        <div class="col-sm-8">
                            <input type="number" name="population" id="population" class="form-control" placeholder="Población" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="households" class="col-sm-4 col-form-label">Hogares</label>
                        <div class="col-sm-8">
                            <input type="number" name="households" id="households" class="form-control" placeholder="Hogares" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="median_income" class="col-sm-4 col-form-label">Ingreso medio</label>
                        <div class="col-sm-8">
                            <input type="number" name="median_income" id="median_income" class="form-control" placeholder="Ingreso medio" required>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="ocean_proximity" class="col-sm-4 col-form-label">Proximidad al mar</label>
                        <div class="col-sm-8">
                            <select class="form-select" aria-label="Default select example" name="ocean_proximity" id="ocean_proximity" required>
                                <option value="" selected>Seleccione la proximidad al mar</option>
                                <option value="<1H OCEAN">Menos de 1 hora del océano</option>
                                <option value="INLAND">En el interior</option>
                                <option value="NEAR OCEAN">Cerca del océano</option>
                                <option value="NEAR BAY">Cerca de la bahía</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <div class="col-12 text-end">
                            <button type="submit" id="btn_submit" class="btn btn-primary w-25">Predecir</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js" integrity="sha384-fbbOQedDUMZZ5KreZpsbe1LCZPVmfTnH7ois6mU1QK+m14rQ1l2bGBq41eYeM/fS" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.0/dist/jquery.validate.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="js/main.js"></script>
</body>

</html>