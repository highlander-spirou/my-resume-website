import { atom, action } from 'nanostores'

const $isModalOpen = atom(0)

const toggleModalState = action($isModalOpen, 'toggleModalState', (store, value) => {
    store.set(value)
})

export { $isModalOpen, toggleModalState }

