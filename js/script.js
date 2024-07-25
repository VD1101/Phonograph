document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackMessage = document.getElementById('feedbackMessage');
    const recentFeedbackList = document.getElementById('recentFeedbackList');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value;

        const feedbackItem = document.createElement('li');
        feedbackItem.textContent = `${name} (${rating} stars): ${comments}`;
        recentFeedbackList.appendChild(feedbackItem);

        feedbackMessage.textContent = 'Thank you for your feedback!';
        feedbackForm.reset();
    });

    const dealButton = document.getElementById('dealButton');
    dealButton.addEventListener('click', function () {
        alert('Thank you for your interest! Our sales team will contact you shortly.');
    });
});
