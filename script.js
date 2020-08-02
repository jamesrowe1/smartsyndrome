prizeWheel = $("#prizewheel");
prizeWheelResult = $("#prizeWheelResult");

const possiblePrize = [
  "More time off! Becoming so much work must have been exhausting. Take some time off.",
  "Extra Shifts! You're just so good we want you to work more!",
  "MONEY! 'Nuff said",
  "Free Food! It how they bribe you to keep working harder!",
  "Therapy Sessions! I'm a website, and I need it. I don't know how you get by.",
  "A dedicated secretary to do your paperwork! This would actually make you try to win every week wouldn't it?",
];

prizeWheel.on("click", function () {
  let chooser = Math.floor(Math.random() * possiblePrize.length);
  prizeWheelResult.text(possiblePrize[chooser]);
});
