// Select the hamburger icon and navigation menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navibar");

// Add click event listener to the hamburger icon
hamburger.addEventListener("click", function () {
    // Toggle the active class on the hamburger icon
    this.classList.toggle("active");

    // Toggle the active class on the navigation menu
    navMenu.classList.toggle("active");
});

new fullpage('#fullpage', {
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    sectionsColor: ['#F3F7EC', '#F3F7EC', '#F3F7EC', '#F3F7EC', '#F3F7EC', '#F3F7EC', '#F3F7EC', '#F3F7EC'],
    navigation: true,
    navigationPosition: 'left',
    lazyLoading: true,
    observer: false,
    credits: {
        enabled: false,
        label: ' ',
        position: 'left'
    },
});

// divswap products page 
function showDiv(divNumber) {
    // Hide all divs
    document.querySelectorAll('.swap-content').forEach(div => {
        div.classList.remove('active');
    });

    // Show the selected div
    document.getElementById(`div${divNumber}`).classList.add('active');
}


// divswap products page 
function toggleContentDiv(divNumber) {
    // Hide all divs
    document.querySelectorAll('.swap-content-2').forEach(element => {
        element.classList.remove('active');
    });

    // Show the selected div
    document.getElementById(`contentDiv${divNumber}`).classList.add('active');
}