function filtrarProyecto(categoria) {

    const proyectos = document.querySelectorAll('.project-container');
    proyectos.forEach(p=> p.style.display = 'none');

    const seleccionados = document.querySelectorAll('.category-' + categoria);
    seleccionados.forEach(p=> p.style.display = 'flex');

    const titulo = document.getElementById('titulo-proyectos');
    if(categoria === 'java') titulo.innerText = 'Proyectos Java Spring Boot';
    if(categoria === 'cobol') titulo.innerText = 'Proyectos COBOL & Mainframe';
    if(categoria === 'mix') titulo.innerText = 'Proyectos de integración COBOL & Java';

    document.getElementById('portafolio-projects').scrollIntoView({ behavior: 'smooth' });
}