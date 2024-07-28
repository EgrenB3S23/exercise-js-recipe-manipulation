// 1. What is the name of the recipe?
// const ans1 = "Frozen cheesecake";
// const ans1 = document.querySelector("#recipe-name").innerText;
const ans1 = document.getElementById("recipe-name").innerText;

console.log(`1. What is the name of the recipe?\n\n${ans1}`);

// 2. What HTML tag is used to display the Recipe name?
const ans2 = document.getElementById("recipe-name").tagName;
console.log(`2. What HTML tag is used to display the Recipe name?\n\n${ans2}`);

// 3. What is the font size of the paragraph tag with the class _"description"_.
const ans3Element = document.querySelector(".description");
const ans3Style = window.getComputedStyle(ans3Element);
const ans3 = ans3Style.fontSize;
console.log(`3. What is the font size of the paragraph tag with the class _"description"_.\n\n${ans3}`);

// 4. What is the value of the `alt` atrribute on the image?
const ans4Element = document.querySelector("img");
const ans4 = ans4Element.alt;
console.log(`4. What is the value of the "alt" atrribute on the image?\n\n${ans4}`);

// 5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
// {
//   url: string
//   height: number,
//   width: number,
// }
const ans5Element = ans4Element;
let ans5 = {
	url: ans5Element.src,
	height: ans5Element.naturalHeight,
	width: ans5Element.naturalWidth,
};
console.log(`5. What is the dimensions and the url of the image? Create an object that looks like this:\n{
  url: string
  height: number,
  width: number,
	}\nand log it to the console:`);
console.log(ans5);

// 6. How many ingredients has the paste?
const ans6Element = document.querySelector(".ingredients-list-paste");
const ans6 = ans6Element.childElementCount;
console.log(`6. How many ingredients does the paste have?\n\n${ans6}`);

// 7. Which is the forth element in the list containing the ingredients for the paste?
const ans7Element = ans6Element;
const ans7 = ans6Element.querySelector("li:nth-of-type(4)").innerText;
console.log(`7. Which is the forth element in the list containing the ingredients for the paste?\n\n${ans7}`);

// 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
// {
// 	order: number;
// 	text: instruction;
// }
ans8Element = document.querySelectorAll(".instructions-list li");
let ans8 = [];
for (let i = 0; i < ans8Element.length; i++) {
	const arrElem = { order: i, text: ans8Element[i].innerText };
	ans8.push(arrElem);
}

console.log(`8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:\{
  order: number;
  text: instruction;
	}\nand log it to the console:`);
console.log(ans8);
