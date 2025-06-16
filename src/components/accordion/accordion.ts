import { renderContactUsModal } from "./accordion-modal.ts";

type AccordionItem = {
    title: string;
    content: string;
}

function decorateAccordion(accordion: HTMLElement) {
    // TODO: add accordion functionality
}

window.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelector<HTMLElement>('.accordion');
    if (!accordion) return;
    decorateAccordion(accordion);
});
