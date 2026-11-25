
const filterButtons = document.querySelectorAll(".filter-btn");
const destinationCards = document.querySelectorAll(".destination-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get the category of the button clicked
        const selectedCategory = button.dataset.filter;

        // Remove active class from every button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");


        // Check every destination card
        destinationCards.forEach(function (card) {

            const cardCategory = card.dataset.category;

            // Show all places
            if (selectedCategory === "all") {
                card.classList.remove("hidden");
            }

            // Show only matching category
            else if (cardCategory === selectedCategory) {
                card.classList.remove("hidden");
            }

            // Hide other categories
            else {
                card.classList.add("hidden");
            }

        });

    });

});
