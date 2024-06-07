document.addEventListener("DOMContentLoaded", function() {
    // Capturando os elementos
    var titulo = document.getElementById("titulo");
    var listaNaoOrdenada = document.querySelector("ul");
    var link = document.querySelector("a");
    var listaOrdenada = document.getElementById("lista-ordenada");

    // Adicionando conteúdo aos elementos
    titulo.innerText = "Título do Projeto";
    link.innerText = "Link para Proz Educação";
    
    // Adicionando itens na lista não ordenada usando innerHTML
    listaNaoOrdenada.innerHTML = "<li>Item 1</li><li>Item 2</li><li>Item 3</li>";

    // Adicionando itens na lista ordenada com links usando innerHTML
    listaOrdenada.innerHTML = "<li><a href='https://exemplo.com'>Link 1</a></li><li><a href='https://exemplo.com'>Link 2</a></li><li><a href='https://exemplo.com'>Link 3</a></li>";
});
