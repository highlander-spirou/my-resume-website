import { For, createSignal, createEffect } from "solid-js";
import { Accordion } from "@kobalte/core";
import './Collapse.css'
import educationListing from "@i18n/EducationListing";


const AccordionItem = ({ id, header, children }) => {
    return <Accordion.Item class="accordion__item" value={id}>
        <Accordion.Header>
            <Accordion.Trigger class="accordion__trigger inline-flex justify-between items-center w-full p-4 border-b-[1px]">
                <span class="font-semibold">{header}</span>
                <svg
                    aria-hidden
                    class="accordion__trigger__icon w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content class="accordion__content__wrapper overflow-hidden border-b-[1px]">
            <p class="accordion__text p-4 leading-relaxed">
                {children}
            </p>
        </Accordion.Content>
    </Accordion.Item>
}

const Collapse = () => {
    const [contentLang, setContent] = createSignal('en')
    createEffect(() => {
        setContent(document.documentElement.getAttribute('lang'))
    })

    return (
        <>
            <Accordion.Root
                collapsible
                class="accordion w-[90%] max-w-[600px] rounded-md border-[1px] border-gray-300 mx-auto mt-5"
            >
                <For each={educationListing[contentLang()]}>
                    {content => (
                        <AccordionItem id={content.id} header={content.header}>{content.children}</AccordionItem>
                    )}
                </For>
            </Accordion.Root>
        </>
    )
}

export default Collapse