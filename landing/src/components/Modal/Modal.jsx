import { Dialog } from "@kobalte/core";
import { createSignal, createEffect } from "solid-js";
import { $isModalOpen, toggleModalState } from "@store/modalState"
import { useStore } from '@nanostores/solid';
import './Modal.css'

const Modal = () => {
    // const [open, setOpen] = createSignal(false);

    const isModalOpen = useStore($isModalOpen)
    const handleOpenChange = (e) => {
        toggleModalState(e ? 1 : 0)
    }

    return (
        <>
            <Dialog.Root open={isModalOpen() === 1} onOpenChange={handleOpenChange}>
                {/* <Dialog.Trigger class="dialog__trigger">Open</Dialog.Trigger> */}
                <Dialog.Portal>
                    <Dialog.Overlay class="dialog__overlay" />
                    <div class="dialog__positioner">
                        <Dialog.Content class="dialog__content">
                            <div class="dialog__header">
                                <Dialog.Title class="dialog__title">About Kobalte</Dialog.Title>
                                <Dialog.CloseButton class="dialog__close-button">
                                    X
                                </Dialog.CloseButton>
                            </div>
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