$(document).ready(function () {

    //  TIMES

    $("#times1").on('change keyup paste', function () {
        var result = $(this).val() * $("#value1").val();
        $("#resultA1").val(result);
        $("#times_r1").val(result);
    });
    $("#times2").on('change keyup paste', function () {
        var result = $(this).val() * $("#value2").val();
        $("#resultA2").val(result);
        $("#times_r2").val(result);
    });
    $("#times3").on('change keyup paste', function () {
        var result = $(this).val() * $("#value3").val();
        $("#resultA3").val(result);
        $("#times_r3").val(result);
    });

    //  MINUS

    $("#minus1").on('change keyup paste', function () {
        var result = $("#resultA1").val() - $(this).val();
        $("#resultB1").val(result);
        $("#minus_r1").val(result);
    });
    $("#minus2").on('change keyup paste', function () {
        var result = $("#resultA2").val() - $(this).val();
        $("#resultB2").val(result);
        $("#minus_r2").val(result);
    });
    $("#minus3").on('change keyup paste', function () {
        var result = $("#resultA3").val() - $(this).val();
        $("#resultB3").val(result);
        $("#minus_r3").val(result);
    });

    //  DIVIDED

    $("#divided1").on('change keyup paste', function () {
        var result =  $("#resultB1").val() / $(this).val();
        $("#resultC1").val(result);
        $("#divided_r1").val(result);
    });
    $("#divided2").on('change keyup paste', function () {
        var result =  $("#resultB2").val() / $(this).val();
        $("#resultC2").val(result);
        $("#divided_r2").val(result);
    });
    $("#divided3").on('change keyup paste', function () {
        var result =  $("#resultB3").val() / $(this).val();
        $("#resultC3").val(result);
        $("#divided_r3").val(result);
    });

});