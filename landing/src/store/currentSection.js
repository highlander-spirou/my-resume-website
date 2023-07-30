import { atom, action } from 'nanostores'

const $currentSection = atom("introduction")

const changeSection = action($currentSection, 'changeSection', (store, section) => {
    store.set(section)
})

export { $currentSection, changeSection }

