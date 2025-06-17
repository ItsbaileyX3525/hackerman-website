function showNotification(message, type = 'success', duration = 2500) {
    const container = document.getElementById('notification-container');
    container.textContent = message;
    container.classList.remove('success', 'error', 'info');
    container.classList.add(type, 'show');
    setTimeout(() => {
        container.classList.remove('show');
        setTimeout(() => {
            container.classList.remove(type);
        }, 500);
    }, duration);
}