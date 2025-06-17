import { createModal } from "../modal/modal.ts";


export async function renderAccordionModal() {
    const modalContent = document.createElement('form');
    modalContent.classList.add('contact-us-modal');
    modalContent.innerHTML = `
        <h2>Contact Us</h2>
        <div>
            <div class="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName">
            </div>
            <div class="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName">
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email">
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4"></textarea>
            </div>
            <button class="button secondary" type="submit">Submit</button>
        </div>
    `;

    modalContent.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(modalContent);
        const data = Object.fromEntries(formData.entries());
        alert('Form submitted successfully!\n\n' + JSON.stringify(data, null, 2));
    });

    const {block, showModal} = await createModal({
        contentNodes: [modalContent],
    });
    document.body.appendChild(block);
    showModal();
}