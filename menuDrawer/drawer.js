// Переключатель Лайв\линия и поиск
let drawerButtonChangeLiveLine = document.querySelectorAll('.drawer-button-change')
// let drawerLineButton = document.querySelector('.drawer-line-button')

let addRedBorder = function (buttons) {
    for (let i = 0; i < buttons.length; i++) {
        let button = buttons[i]
        button.addEventListener('click', function () {
            let activeElement = document.querySelector('.drawer-button-change--active')
            activeElement.classList.remove('drawer-button-change--active')
            button.classList.add('drawer-button-change--active')
        })
    }

}
addRedBorder(drawerButtonChangeLiveLine)

// Виды спорта
let drawerSportContainer = document.querySelector('.drawer-sport-container')

let sportEventsDrawer = [
    { name: 'Футбол', iconUrl: 'menuDrawer/src/football_1.svg' },
    { name: 'Баскетбол', iconUrl: 'menuDrawer/src/basketball_3x.svg' },
    { name: 'Волейбол', iconUrl: 'menuDrawer/src/volleyball_9.svg' },
    { name: 'Теннис', iconUrl: 'menuDrawer/src/tennis_4.svg' },
]

let renderSportEventsLinksDrawer = function (array) {
    for (let i = 0; i < array.length; i++) {
        let drawerSport = makeElement('div', 'drawer-sport')
        let drawerSportLink = makeElement('div', 'drawer-sport-link', array[i].name)
        let drawerSportIcon = makeElement('img', 'drawer-sport-icon')
        drawerSportIcon.src = sportEventsDrawer[i].iconUrl
        drawerSport.appendChild(drawerSportIcon)
        drawerSport.appendChild(drawerSportLink)
        drawerSportContainer.appendChild(drawerSport)
    }
}

renderSportEventsLinksDrawer(sportEventsDrawer)

// ЛИНКИ В ДРОВЕРЕ
let drawerBottomLinksWrapper = document.querySelector('.drawer-links-bottom')
let drawerUpperLinksWrapper = document.querySelector('.drawer-links-upper')

let drawerBottomLinks = [
    { name: 'VIP статус', withPulse: true, },
    { name: 'Результаты' },
    { name: 'Статистика' },
    { name: 'Акции' },
    { name: 'Новости' },
    { name: 'Справочный центр' },
    { name: 'О сервисе Фонбет' },
    { name: 'Приложения' },
    { name: 'Наши клубы' }
]
let drawerUpperLinks = [
    { name: 'Топ' },
    { name: 'Блиц' }
]
let renderLinksDrawer = function (array, parent) {
    for (let i = 0; i < array.length; i++) {
        let drawerLinksWrapper = makeElement('div', 'drawer-link-wrapper')
        let drawerLink = makeElement('div', 'drawer-link', array[i].name)
        let drawerLinkChevron = makeElement('img', 'drawer-link-icon')
        drawerLinkChevron.src = 'menuDrawer/src/chevron-right.svg'
        drawerLinksWrapper.appendChild(drawerLink)


        if (array[i].withPulse) {
            let pulseWrapper = makeElement('div', 'pulse-wrapper')
            let pulseCenter = makeElement('div', 'pulse--center')
            let pulseFull = makeElement('div', 'pulse--full')
            let pulseChevroneWrapper = makeElement('div', 'pulse-chevrone-wrapper')
            pulseCenter.appendChild(pulseFull)
            pulseWrapper.appendChild(pulseCenter)
            pulseChevroneWrapper.appendChild(pulseWrapper)
            pulseChevroneWrapper.appendChild(drawerLinkChevron)
            drawerLinksWrapper.appendChild(pulseChevroneWrapper)


        } else {
            drawerLinksWrapper.appendChild(drawerLinkChevron)
        }

        parent.appendChild(drawerLinksWrapper)
    }
}
renderLinksDrawer(drawerBottomLinks, drawerBottomLinksWrapper)
renderLinksDrawer(drawerUpperLinks, drawerUpperLinksWrapper)


