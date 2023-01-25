$(document).ready(function(){
    $('#carousel-img').slick({
        autoplay: true,
    });

    $('.nav-menu').click(function(){
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`${camposIncorretos} campos não preenchidos no formulário de contato, por gentileza preencher todos os campos para enviar.`);
            }
        }
    })

    $('.lista-carros button').click(function(){
        const destino = $('#contato');
        const nomeCarros = $(this).parent().find('h3').text();
        $('#veiculo-interesse').val(nomeCarros)
        $('html').animate({
            scrollTop: destino.offset().top
        }, 500)
    })
})