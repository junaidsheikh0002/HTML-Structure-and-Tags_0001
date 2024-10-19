document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const htmlStructure = document.getElementById('htmlStructure');

    toggleButton.addEventListener('click', function() {
        if (htmlStructure.classList.contains('hidden')) {
            htmlStructure.classList.remove('hidden');
            toggleButton.textContent = 'Hide Structure';
        } else {
            htmlStructure.classList.add('hidden');
            toggleButton.textContent = 'Show Structure';
        }
    });
});