// Drag and Drop functionality
let draggedElement = null;

// Add event listeners to draggable items
document.querySelectorAll('.draggable-item').forEach(item => {
    item.addEventListener('dragstart', function(e) {
        draggedElement = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.outerHTML);
    });

    item.addEventListener('dragend', function(e) {
        this.classList.remove('dragging');
        draggedElement = null;
    });
});

// Add event listeners to drop zones
document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        this.classList.add('drag-over');
    });

    zone.addEventListener('dragleave', function(e) {
        this.classList.remove('drag-over');
    });

    zone.addEventListener('drop', function(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        this.classList.add('has-item');
        
        if (draggedElement) {
            // Create a copy of the dragged element
            const clonedElement = draggedElement.cloneNode(true);
            clonedElement.classList.add('dropped-item');
            clonedElement.classList.remove('dragging');
            
            // Clear the drop zone and add the dragged element
            this.innerHTML = '';
            this.appendChild(clonedElement);
            
            // Show success message
            showDragDropMessage('Item dropped successfully!');
        }
    });
});

function showDragDropMessage(message) {
    // Create a temporary message element
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.className = 'drag-drop-message';
    
    document.body.appendChild(messageEl);
    
    // Remove message after 2 seconds
    setTimeout(() => {
        document.body.removeChild(messageEl);
    }, 2000);
}
