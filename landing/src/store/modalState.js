import { atom, action } from 'nanostores'


const $isModalOpen = atom(0)

const toggleModalState = action($isModalOpen, 'toggleModalState', (store, value) => {
    store.set(value)
})

const $modalImg = atom("IELTS")

const switchImg = action($modalImg, 'switchImg', (store, value) => {
    store.set(value)
})

export { $isModalOpen, toggleModalState, $modalImg, switchImg }

