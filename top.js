// ФУНКЦИЯ ДЛЯ СОЗДАНИЯ ЭЛЕМЕНТА
const makeElement = function (tagName, className, text) {
    const element = document.createElement(tagName)
    element.classList.add(className)
    if (text) {
        element.textContent = text
    }
    return element
}

// Баннеры 
const bannersSection = document.querySelector('.top__banners-section')

const banners = [
    { title: 'Шаблонный заголовок', text: '', buttonText: 'Участвовать', imgUrl: 'src/banner-vip.jpg' },
    { title: 'Шаблонный заголовок', text: '', buttonText: 'Участвовать', imgUrl: 'src/banner-vip.jpg' },
    { title: 'Шаблонный заголовок', text: '', buttonText: 'Участвовать', imgUrl: 'src/banner-vip.jpg' }
]

const showBanners = function (array) {

    for (let i = 0; i < array.length; i++) {
        const bannerWrapper = makeElement('div', 'banners-section__banner')
        const bannerTitle = makeElement('p', 'banner__title', array[i].title)
        const bannerText = makeElement('p', 'banner__text', array[i].text)
        const bannerButton = makeElement('button', 'banner__button', array[i].buttonText)
        bannerWrapper.style.backgroundImage = 'url(' + array[i].imgUrl + ')'

        bannerWrapper.appendChild(bannerTitle)
        bannerWrapper.appendChild(bannerText)
        bannerWrapper.appendChild(bannerButton)
        bannersSection.appendChild(bannerWrapper)
    }
}
showBanners(banners)

// Слайдер заголовков видов спорта 
const sportTitlesSlider = document.querySelector('.top__titles-section')

const sportTitles = [
    { name: 'Супер-топ', iconUrl: 'src/supertop.svg' },
    { name: 'Подборки', iconUrl: 'src/selection.svg' },
    { name: 'Футбол', iconUrl: 'src/football_1.svg' },
    { name: 'Баскетбол', iconUrl: 'src/basketball_3x.svg' },
    { name: 'Баскетбол', iconUrl: 'src/basketball_3x.svg' },
    { name: 'Баскетбол', iconUrl: 'src/basketball_3x.svg' },
    { name: 'Баскетбол', iconUrl: 'src/basketball_3x.svg' },
    { name: 'Баскетбол', iconUrl: 'src/basketball_3x.svg' },
]

const getSportButtons = function (array) {

    for (let i = 0; i < array.length; i++) {
        const sportButtonWrapper = makeElement('div', 'titles-section__wrapper')
        const sportButton = makeElement('button', 'button-wrapper__button', array[i].name)
        const sportButtonIcon = makeElement('img', 'button-wrapper__icon')
        sportButtonIcon.src = array[i].iconUrl

        sportButtonWrapper.appendChild(sportButtonIcon)
        sportButtonWrapper.appendChild(sportButton)
        sportTitlesSlider.appendChild(sportButtonWrapper)
    }
}
getSportButtons(sportTitles)



// function generateRandomString(stringLength) {
//     const letters = ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', ' ', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю']

//     let resultString = ''
//     for (let i = 0; i < stringLength; i++) {
//         const randomIndex = Math.floor(Math.random() * letters.length)
//         resultString += letters[randomIndex]
//         if (i === 0) {
//             resultString = resultString.toUpperCase()
//         }
//     }
//     return resultString;
// }

// function renderEventsTable() {
//     const tableEl = document.querySelector('.js-events-table')
//     let tableContentString = ''
//     for (let i = 0; i < 1; i++) {
//         const q1 = (Math.random() * 6 + 1).toFixed(2)
//         const q2 = (Math.random() * 6 + 1).toFixed(2)
//         const q3 = (Math.random() * 6 + 1).toFixed(2)
//         const team1Length = Math.floor(Math.random() * 15 + 5)
//         const team2Length = Math.floor(Math.random() * 15 + 5)
//         tableContentString += `
//                 <tr class="top__table__champ-head">
//                     <td class="top__table__champ-head__title">Лига чемпионов</td>
//                     <td class="top__table__champ-head__kef">1</td>
//                     <td class="top__table__champ-head__kef">X</td>
//                     <td class="top__table__champ-head__kef">2</td>
//                 </tr>
//                 <tr>
//                     <td class="top__table__player top__table__player--first">${generateRandomString(team1Length)}</td>
//                     <td class="top__table__kef top__table__kef--1" rowspan="3">${q1}</td>
//                     <td class="top__table__kef top__table__kef--2" rowspan="3">${q2}</td>
//                     <td class="top__table__kef top__table__kef--3" rowspan="3">${q3}</td>
//                 </tr>
//                 <tr>
//                     <td class="top__table__player top__table__player--second">${generateRandomString(team2Length)}</td>
//                 </tr>
//                 <tr>
//                     <td class="top__table__time">Сегодня в 20:55</td>
//                 </tr>
//     `
//     }
//     tableEl.innerHTML = tableContentString
// }

// renderEventsTable()

// Футер 
const socialIconWrapper = document.querySelector('.contacts-section__social-icons')

const socialIcons = [
    { iconUrl: 'src/telegram.svg' },
    { iconUrl: 'src/vk.svg' },
    { iconUrl: 'src/instagram.svg' },
    { iconUrl: 'src/facebook.svg' },
    { iconUrl: 'src/youtube.svg' },
    { iconUrl: 'src/whatsapp.svg' },
    { iconUrl: 'src/twitter.svg' }
]
const renderSocialIconsFooter = function (array) {
    for (let i = 0; i < array.length; i++) {
        const socialIconElement = makeElement('img', 'contacts-section__social-icon')
        socialIconElement.src = array[i].iconUrl
        socialIconWrapper.appendChild(socialIconElement)
    }
}

renderSocialIconsFooter(socialIcons)

const infoPartnersWrapper = document.querySelector('.partners-section__info')
const partnersWrapper = document.querySelector('.partners-section__sponsors')

const partners = [
    { infoPartner: 'src/logo-laLiga.svg', partner: 'src/logo-sportexpress.svg' },
    { infoPartner: 'src/logo-khl.svg', partner: 'src/logo-sssr.svg' },
    { infoPartner: 'src/logo-karate.svg', partner: 'src/logo-match.svg' },
    { infoPartner: 'src/logo-vtb.svg', partner: 'src/logo-league.svg' },
    { infoPartner: 'src/logo-fonbet.svg', partner: 'src/logo-sports.svg' }
]

const getInfoPartners = function (array) {
    for (let i = 0; i < array.length; i++) {
        const infoPartnerElement = makeElement('img', 'partners-section__icon')
        infoPartnerElement.src = array[i].infoPartner
        partnersWrapper.appendChild(infoPartnerElement)
    }
}
getInfoPartners(partners)

const getPartners = function (array) {
    for (let i = 0; i < array.length; i++) {
        const infoPartnerElement = makeElement('img', 'partners-section__icon')
        infoPartnerElement.src = array[i].partner
        infoPartnersWrapper.appendChild(infoPartnerElement)
    }
}
getPartners(partners)

// Открываем и скрываем секцию с партнерами 
const rollupSectionTitle = document.querySelector('.rollup-section__title')
const partnersSection = document.querySelector('.partners-section')
const rollupSectionButton = document.querySelector('.rollup-section__button')

let isClosed = true

rollupSectionButton.addEventListener('click', function () {
    if (isClosed) {
        partnersSection.classList.remove('_hidden')
        rollupSectionTitle.textContent = 'Свернуть'
        rollupSectionButton.classList.add('rollup-section__button_close')
        isClosed = false
    } else {
        partnersSection.classList.add('_hidden')
        rollupSectionButton.classList.remove('rollup-section__button_close')
        rollupSectionTitle.textContent = 'Партнеры'
        isClosed = true
    }

})

//Table
const tableHeader = document.querySelector('.sticky-header')

const topTableButtons = [
    { name: 'Исходы' },
    { name: 'Победы' },
    { name: 'Двойные шансы' },
    { name: 'Тоталы' },
    { name: 'Форы' },
    { name: 'Забьют гол' }
]

const getTopTableButtons = function (array) {
    for (let i = 0; i < array.length; i++) {
        const topTableButtonsWrapper = makeElement('div', 'result-buttons-wrapper')
        const topTableButton = makeElement('button', 'result-button', array[i].name)

        topTableButtonsWrapper.appendChild(topTableButton)
        tableHeader.appendChild(topTableButtonsWrapper)
    }

}
getTopTableButtons(topTableButtons)




const buttonEl = document.querySelector('.js-drawer-trigger')
const mainWrapperEl = document.querySelector('.main-header__logo-section')
const overlayBgEl = document.querySelector('.overlay-bg')

buttonEl.addEventListener('click', () => {
    mainWrapperEl.classList.add('_withDrawer')
})

overlayBgEl.addEventListener('click', () => {
    mainWrapperEl.classList.remove('_withDrawer')
})