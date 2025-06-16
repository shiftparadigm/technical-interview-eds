type AccordionItem = {
    title: string;
    content: string;
}

function decorateAccordion(accordion: HTMLElement) {
    console.log('decorating accordion');
}

window.addEventListener('DOMContentLoaded', () => {
    const accordion = document.querySelector<HTMLElement>('.accordion');
    if (!accordion) return;
    decorateAccordion(accordion);
});
