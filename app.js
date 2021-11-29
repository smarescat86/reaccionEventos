document.addEventListener('DOMContentLoaded', () =>{
    init();
});

function init() {
    document.addEventListener('click', (e) => {
        hanHechoClick(e);
    })

    const btnAnadir = document.getElementById('btnAnadir');
    btnAnadir.addEventListener('click', () => {
        nuevaTarea();
    });
}

function hanHechoClick(e) {
    setTimeout(function() {
        alert(e.target.tagName);
    }, 5000);
    
    const p = document.getElementById('p');
    p.innerHTML = e.target.tagName;
}

function nuevaTarea() {
    const lista = document.getElementById('lista');
    let li = document.createElement('li');
    li.textContent = "Nueva tarea";
    lista.append(li);
}
