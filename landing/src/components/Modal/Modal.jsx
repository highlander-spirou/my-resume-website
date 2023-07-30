import { Dialog } from "@kobalte/core";
import { createSignal, createEffect } from "solid-js";
import { $isModalOpen, toggleModalState, $modalImg } from "@store/modalState"
import { useStore } from '@nanostores/solid';
import './Modal.css'

const Modal = () => {
    // const [open, setOpen] = createSignal(false);

    const isModalOpen = useStore($isModalOpen)
    const modalImg = useStore($modalImg)
    const handleOpenChange = (e) => {
        toggleModalState(e ? 1 : 0)
    }

    createEffect(() => {
        console.log(modalImg())
    })

    return (
        <>
            <Dialog.Root open={isModalOpen() === 1} onOpenChange={handleOpenChange}>
                <Dialog.Portal>
                    <Dialog.Overlay class="dialog__overlay" />
                    <div class="dialog__positioner">
                        <Dialog.Content class="dialog__content">
                            <Dialog.Description class="dialog__description">
                                Kobalte is a UI toolkit for building accessible web apps and design systems with
                                SolidJS. It provides a set of low-level UI components and primitives which can be the
                                foundation for your design system implementation.
                            </Dialog.Description>
                        </Dialog.Content>
                    </div>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    )
}

export default Modal