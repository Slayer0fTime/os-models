document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".teacher-card");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const pagination = document.querySelector(".pagination");

    let currentPage = 1;
    let cardsPerPage = determineCardsPerPage()

    function determineCardsPerPage() {
        const screenWidth = 480
        return window.innerWidth <= screenWidth ? 4 : 6;
    }
    
    function showPage(page) {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });

        pagination.textContent = `${currentPage}/${Math.ceil(cards.length / cardsPerPage)}`;
    }

    showPage(currentPage);

    prevButton.addEventListener("click", function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener("click", function () {
        const totalPages = Math.ceil(cards.length / cardsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    window.addEventListener("resize", function () {
        const newCardsPerPage = determineCardsPerPage();
        if (newCardsPerPage !== cardsPerPage) {
            cardsPerPage = newCardsPerPage;
            currentPage = 1;
            showPage(currentPage);
        }
    });
});
