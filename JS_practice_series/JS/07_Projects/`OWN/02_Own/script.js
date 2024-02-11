// Select all elements with the class "box"
const boxes = document.querySelectorAll(".box");

// Loop through each box element
boxes.forEach(box => {
    // Add a click event listener to each box
    box.addEventListener("click", function () {
        // Remove background color from all boxes
        boxes.forEach(otherBox => {
            otherBox.style.backgroundColor = "transparent";
            otherBox.style.boxShadow = "none";
            otherBox.style.borderRadius = "3px";
        });

        // Set background color only for the clicked box
        this.style.backgroundColor = "crimson";
        this.style.boxShadow = "1px 1px 5px black";
        // this.style.borderRadius = "15px";
    });
});
