console.log("Hello, Welcome to the story game! Tommorrow is Tuffy's birthday, pet dog of Riddhi.\
    Can you help her decide what all she should get to make his birthday special?")

let outfit = prompt("What should Tuffy wear - bandana or coat?").toLowerCase();

if (outfit === "bandana") {
    let color = prompt("Amazing! Which color should he wear? Red or Blue?").toLowerCase();
    
    if (color === "red") {
        console.log("Nice choice! Tuffy will look adorable in a red bandana.");
    } else if (color === "blue") {
        console.log("Cool! A blue bandana will suit him perfectly.");
    } else {
        console.log("Hmm, that color isn't available. Let's stick to red or blue.");
    }

} else if (outfit === "coat") {
    let design = prompt("Great! Which design should he wear? Polka dot or check?").toLowerCase();
    
    if (design === "polka dot") {
        console.log("✨ Wow! Tuffy will look stylish in a polka dot coat.");
    } else if (design === "check") {
        console.log("🖤 A check coat? Classic and elegant! Tuffy is a true gentleman.");
    } else {
        console.log("Oops! We don't have that design, let's pick from polka dot or check.");
    }

} else {
    console.log("Oops! Please choose either 'bandana' or 'coat'.");
}


let cake = prompt("Now, what cake should we get for Tuffy? Chicken or Peanut Butter?").toLowerCase();

if (cake === "chicken") {
    console.log("Yum! A chicken cake sounds perfect for Tuffy!");
} else if (cake === "peanut butter") {
    console.log("Sweet! Tuffy will love a peanut butter cake!");
} else {
    console.log("Hmm, we only have Chicken or Peanut Butter cakes. Pick one!");
}


let gift = prompt("What surprise gift should we get? A squeaky toy or a comfy bed?").toLowerCase();

if (gift === "squeaky toy") {
    console.log("Fun choice! Tuffy will have a blast with his new squeaky toy!");
} else if (gift === "comfy bed") {
    console.log("Cozy! Tuffy will love snuggling in his comfy new bed.");
} else {
    console.log("That's not an option, but Tuffy will still have a great birthday!");
}

console.log("🎊 Yay! Thanks for helping Riddhi plan an amazing birthday for Tuffy! 🐶🎂");
