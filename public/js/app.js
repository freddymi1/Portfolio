const txtAnim = document.querySelector('h3');
new Typewriter(txtAnim,{
    //deleteSpeed: 20
})
.typeString('<strong>FREDDY MICHEL</strong>')
.pauseFor(300)
.typeString('Developpeur <b>Full stack</b>')
.start()

let navbar = document.querySelector('.navbar')
