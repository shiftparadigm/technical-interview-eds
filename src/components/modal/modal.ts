type CreateModalProps = {
	contentNodes: Node[];
};
export async function createModal({
	contentNodes,
}: CreateModalProps) {
	const dialog = document.createElement('dialog');
	const dialogContent = document.createElement('div');
	dialogContent.classList.add('modal-content');
	dialogContent.append(...contentNodes);
	dialog.append(dialogContent);

	const closeDialog = () => {
        dialog.close();
	};
	const closeButton = document.createElement('button');
	closeButton.classList.add('close-button');
	closeButton.setAttribute('aria-label', 'Close');
	closeButton.autofocus = true;
	closeButton.type = 'button';
	closeButton.innerHTML = '<span class="icon icon-close"><img data-icon-name="close" src="/images/close.svg" alt="" loading="lazy"></span>';
	closeButton.addEventListener('click', () => closeDialog());
	dialog.append(closeButton);

	// close dialog on clicks outside the dialog. https://stackoverflow.com/a/70593278/79461
	dialog.addEventListener('click', (event) => {
		if (
			!dialogContent.contains(event.target as Node)
		) {
			closeDialog();
		}
	});

	const block = document.createElement('div');
    block.classList.add('modal');
	document.querySelector('main')?.after(block);

	dialog.addEventListener('close', () => {
		document.body.classList.remove('modal-open');
		block?.remove();
	});

	block.append(dialog);
	return {
		block,
		dialog,
		showModal: (contentNodes?: Node[]) => {
			if (contentNodes) {
				dialogContent.innerHTML = '';
				dialogContent.append(...contentNodes);
			}
			dialog.showModal();
			// Google Chrome restores the scroll position when the dialog is reopened,
			// so we need to reset it.
			setTimeout(() => {
				dialogContent.scrollTop = 0;
			}, 0);

			document.body.classList.add('modal-open');
		},
	};
}