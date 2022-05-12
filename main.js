window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
    showNavOnScroll()
    backToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    //Linha alvo
    const targetLine = scrollY + innerHeight / 2

    //Verificar se a seção passou da linha
    //Quais dados vo precisar?
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    //O topo da seção chegou ou ultrapassou a linha alvo
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    //A seção termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    //O final da seção passou da linha alvo
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    //limites da seção
    const sectionBoundaries =
        sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    //Capturando o id da da tag 'a' que possui o nome da seção
    const menuElement = document.querySelector(
        `.menu a[href*=${section.getAttribute('id')}]`
    )

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY == 0) {
        navigation.classList.remove('scroll')
    } else {
        navigation.classList.add('scroll')
    }
}

function backToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)