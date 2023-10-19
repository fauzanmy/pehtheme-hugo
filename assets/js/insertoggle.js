// TOGGLE BUTTON
(function () {
	// Get all elements with the "toggle-button" class
    const toggleButtons = document.querySelectorAll(".toggle-button");

    // Function to hide all elements except the target
    function hideAllExcept(targetElement) {
        document.querySelectorAll(".hidden").forEach((element) => {
            if (element !== targetElement) {
                element.classList.add("close"); // Hide the element
                element.classList.remove("open"); // Close previously open elements
            }
        });
    }

    // Function to toggle the state of an element (open/close)
    function toggleElement(targetElement) {
        const isHidden = targetElement.classList.contains("close");
        hideAllExcept(targetElement);
        targetElement.classList.toggle("close", !isHidden);
        targetElement.classList.toggle("open", isHidden);
    }

    toggleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const targetIds = this.getAttribute("data-target").split(" ");
            targetIds.forEach((targetId) => {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    toggleElement(targetElement);
                }
            });
        });
    });

    // Add event listener to the document to close elements when a click occurs outside of open elements
    document.addEventListener("click", function (event) {
        const targetElements = Array.from(document.querySelectorAll(".open"));
        const clickedOutsideAllTargets = targetElements.every((element) => {
            return !element.contains(event.target) && !event.target.closest(".toggle-button");
        });

        if (clickedOutsideAllTargets) {
            targetElements.forEach((element) => {
                element.classList.remove("open"); // Close open elements
                element.classList.add("close"); // Hide elements
            });
        }
    });

})();
