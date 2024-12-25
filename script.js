$(document).ready(function () {
    // Dynamic Greeting
    const now = new Date();
    const hour = now.getHours();
    let greeting = "Welcome!";
    if (hour < 12) greeting = "Good Morning!";
    else if (hour < 18) greeting = "Good Afternoon!";
    else greeting = "Good Evening!";
    $("#greeting").text(greeting);

    // Toggle Theme
    $("#theme-toggle").click(function () {
        $("body").toggleClass("dark-theme");
        const isDark = $("body").hasClass("dark-theme");
        $(this).text(isDark ? "Switch to Light Theme" : "Switch to Dark Theme");
    });

    // Accordion
    $(".accordion-item h2").click(function () {
        $(this).next(".accordion-content").slideToggle();
    });
});