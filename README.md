# Technical Interview Challenge: Accordion Component

## Overview
This challenge focuses on implementing an accordion and modal component on a webpage. The goal is to demonstrate your ability to create a well-structured and maintainable component while following best practices in web development.

## Getting Started
1. Clone this repository
2. Install dependencies using `npm install`
3. Review the provided HTML structure in the components directory

## Challenge Requirements

### 1. Accordion Component Implementation
- Convert the provided HTML structure into a component resembling the provided designs 
    - Located at `src/components/accordion/accordion.html`
    - The accordion component should have a header, content, and a icon to open the modal
    - Style the accordion component using css, the stretch goals include responsive design, so keep in mind that the component should be mobile-friendly
- Implement the accordion functionality
    - Clicking on them should expand and collapse the content
- Implement load more functionality
    - Only display the first 4 items by default
    - When the user clicks on the "Load More" button, the next four items should be loaded

### 2. Modal Integration
- Located at `src/components/accordion/accordion-modal.ts`
- Open the accordion modal when clicking on the contact us button
- Add validation to the form. First name, last name, and email should be required
- Display clear and user-friendly error messages

## Technical Requirements
- Use TypeScript for type safety
- Follow component best practices
- Write clean, maintainable code

## Stretch Goals
If time permits, consider implementing these additional features:

### Responsive Design
Implement responsive design for the accordion component. The breakpoints should be as follows:
- Mobile: under 640px
- Tablet: 640px - 1279px
- Desktop: 1280px and above

### Accessibility Enhancements
- Add keyboard navigation support
- Implement ARIA attributes and roles
- Add proper focus management
- Ensure screen reader compatibility
- Add appropriate aria-labels and descriptions
