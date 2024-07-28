// 1. The logo text of the site has the wrong color. Change it to the correct one.
const elem1 = document.querySelector(".logo-text");
elem1.style.color = "rgb(56,66,65)";

// 2. The alignment of the elements inside the header element are wrong. Change it to the correct one. Hint, check the flex properties for the correct alignment. Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const elem2 = document.querySelector("header");
elem2.style.justifyContent = "normal";

// 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.
const elem3 = elem2;
elem3.style.borderBottomColor = "rgb(211,211,211)";

// 4. The recipe name is wrong, change it to the correct one.
const elem4 = document.getElementById("recipe-name");
elem4.innerHTML = "Frozen Cheesecake";

// 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.
const elem5 = document.querySelector(".time-container span:nth-child(1)");
elem5.classList.add("material-icons");

// 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.
const elem6 = document.querySelector(".time");
elem6.innerHTML = "60+ min";

// 7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder.
const elem7 = document.querySelector(".image-container img");
elem7.src = "assets/frozen-cheesecake-slice.jpg";

// 8. The background color of the ingredients list container is wrong. Fix it.
const elem8 = document.querySelector(".ingredients-container");
elem8.style.backgroundColor = "rgb(249, 249, 249)";

// 9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items. Remove the text and add those two list items.
const elem9 = document.querySelector(".ingredients-list-bottom");
let arrToAdd = ["15st digestivetex", "Lite smör"];

function addTagsToArr(arr, tag) {
	// takes array arr and wraps each array item with the provided HTML tag, then returns the resulting array.

	// example:
	// arr:     ["foo", "bar"];
	// tag:     "p";
	// returns: ["<p>foo</p>", "<p>bar</p>"]

	for (let i = 0; i < arr.length; i++) {
		let newStr = "<" + tag + ">" + arr[i] + "</" + tag + ">";
		arr[i] = newStr;
	}
	return arr;
}

function arrToLineBrokenString(arr) {
	// takes an array and returns a string containing each arr item, delimited by "\n". Fit for applying to element.innerHTML

	// example:
	// arr:     ["<p>foo</p>", "<p>bar</p>"];
	// returns: "<p>foo</p>\n<p>bar</p>"

	returnStr = "";
	for (let i = 0; i < arr.length; i++) {
		if (i != 0) {
			returnStr += "\n";
		}
		returnStr += arr[i];
	}
	return returnStr;
}

arrToAdd = addTagsToArr(arrToAdd, "li");
// console.log(arrToAdd);
elem9.innerHTML = arrToLineBrokenString(arrToAdd);
// console.log(elem9.innerHTML);

// 10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.
const elem10 = document.querySelector(".ingredients-list-paste li:nth-of-type(3)");
elem10.innerText = "3tsk vaniljsocker";
// console.log(elem10.innerText);

// 11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.
const elem11 = document.querySelector(".ingredients-list-paste");
// console.log(elem11.innerHTML);
elem11.innerHTML += "\t<li>400g naturell philadelphiaost</li>";
// console.log(elem11.innerHTML);

// 12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.
const elem12 = document.querySelector(".instructions-container .instructions");
console.log(elem12);
elem12.classList.remove("shadow");

// 13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.
const elem13 = document.querySelector(".instructions-container .instructions-list li:nth-child(2)");
const elem13_2 = document.querySelector(".instructions-container .instructions-list li:nth-child(9)");

console.log(elem13.innerText);
elem13.innerText = "Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
console.log(elem13_2.innerText);
elem13_2.innerText = "Ställ in i frysen över natten.";
