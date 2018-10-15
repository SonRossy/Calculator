$( document ).ready(function() {
    let btn=$(".inputElements");
    btn.on('click',function () {
        $("#calculatorInput").append($(this).text());
    })

    $(".clear").on('click',()=>{
        $('#calculatorInput').html("");
    })

    $('.evaluate').on('click',()=>{
        try {
            let result=(eval($('#calculatorInput').text()));
            $('#calculatorInput').html(result);
        }
        catch(err) {
            $('#calculatorInput').html(err);
        }

    })
});