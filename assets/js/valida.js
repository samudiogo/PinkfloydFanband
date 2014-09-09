function fechaModal()
{
    $("#modal-board").toggle(1000);
    $("#modal-success").toggle(1000);
}

function validaForm()
{
    var txt_nome, txt_email, txt_assunto, txt_comentario;

    txt_nome = document.getElementById("txt-nome").value;
    txt_email = document.getElementById("txt-email").value;
    txt_assunto = document.getElementById("txt-assunto").value;
    txt_comentario = $.trim($("#txarea-comentario").val());

    if (!txt_nome)
    {

        $("<span class='box-msg offset-left box-name'> Ué?! Você não tem nome? </span>").insertAfter("#txt-nome");
        $("#txt-nome").focus();

    }
    else if (!txt_email)
    {
        $(".box-name").remove();
        $("<span class='box-msg offset-left box-email'> Pode digitar o seu email, prometo não passar pra ninguém!! </span>").insertAfter("#txt-email");
        $("#txt-email").focus();
        $("#txt-nome").addClass("input-success");
    }
    else if (!txt_assunto)
    {
        $(".box-email").remove();
        $("<span class='box-msg offset-left box-assunto'> Do que se trata?? Digite acima o assunto.. </span>").insertAfter("#txt-assunto");
        $("#txt-assunto").focus();
        $("#txt-email").addClass("input-success");

    }

    else if (!$.trim($("#txarea-comentario").val()))
    {
        $(".box-assunto").remove();
        $("<span class='box-msg offset-left  box-comentario'> Poxa... Digite um comentário.. pode ser um critica contrutiva ou um bug do sistema ;) </span>").insertAfter("#txarea-comentario");
        $("#txarea-comentario").focus();
        $("#txt-assunto").addClass("input-success");
    }
    else
    {
        $(".box-comentario").remove();
        $("#txarea-comentario").addClass("input-success");

        //colocando os dados na janela modal:
        $("#sp-nome").text(txt_nome);
        $("#sp-email").text(txt_email);
        $("#sp-assunto").text(txt_assunto);
        $("#sp-mensagem").text(txt_comentario)
        $("#modal-board").toggle(1000);
        $("#modal-success").toggle(1000);

    }
}

