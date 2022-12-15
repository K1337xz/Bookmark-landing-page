const openMobile = document.querySelector(".openMobile");
const closeMobile = document.querySelector(".closeMobile");
const showMobileMenu = document.querySelector(".navWrapper");
const featuresNav = document.querySelectorAll(".featuresItems li");
const faqItem = document.querySelectorAll(".faqWrapp");
const emailButton = document.querySelector("#emailButton");
//open Mobile menu
openMobile.addEventListener("click", () => {
	showMobileMenu.classList.add("activeMen");
});
//close Mobile menu
closeMobile.addEventListener("click", () => {
	showMobileMenu.classList.remove("activeMen");
});

//change features items

for (let i = 0; i < featuresNav.length; i++) {
	featuresNav[i].addEventListener("click", (e) => {
		e.preventDefault();
		const bookmarkWrap = document.querySelector(".bookmark");
		const inteligentWrap = document.querySelector(".inteligent");
		const shareWrap = document.querySelector(".share");
		for (let x = 0; x < featuresNav.length; x++) {
			if (featuresNav[x].classList.contains("active")) {
				let child = featuresNav[x].querySelector("a");
				featuresNav[x].classList.remove("active");
				child.classList.remove("active");
			}
		}
		let child = featuresNav[i].querySelector("a");
		featuresNav[i].classList.add("active");
		child.classList.add("active");
		if (child.textContent === `Simple Bookmarking`) {
			bookmarkWrap.style.display = `flex`;
			inteligentWrap.style.display = `none`;
			shareWrap.style.display = `none`;
		} else if (child.textContent === `Speedy Searching`) {
			bookmarkWrap.style.display = `none`;
			inteligentWrap.style.display = `flex`;
			shareWrap.style.display = `none`;
		} else {
			bookmarkWrap.style.display = `none`;
			inteligentWrap.style.display = `none`;
			shareWrap.style.display = `flex`;
		}
	});
}
//faq
for (let i = 0; i < faqItem.length; i++) {
	faqItem[i].addEventListener("click", showFaq);
}

function showFaq() {
	let answer = this.children;
	let wrappers = this;
	const allfaqWrapps = document.querySelectorAll(".faqWrapp");
	const allAnswers = document.querySelectorAll(".answer");
	const allQuestions = document.querySelectorAll(".faqQuestion");
	for (let i = 0; i < allAnswers.length; i++) {
		if (allAnswers[i].classList.contains("activeFaq")) {
			allAnswers[i].classList.remove("activeFaq");
			allAnswers[i].style.display = `none`;
		}
	}
	for (let i = 0; i < wrappers.length; i++) {
		if (wrappers[i].classList.contains("active")) {
			wrappers.classList.remove("active");
		}
	}
	for (let i = 0; i < allQuestions.length; i++) {
		if (allQuestions[i].classList.contains("active")) {
			allQuestions[i].classList.remove("active");
			allQuestions[i].classList.add("unActive");
		} else if (allQuestions[i].classList.contains("unActive")) {
			allQuestions[i].classList.remove("unActive");
		}
	}
	for (let i = 0; i < allfaqWrapps.length; i++) {
		if (allfaqWrapps[i].classList.contains("active")) {
			allfaqWrapps[i].classList.remove("active");
		}
	}
	wrappers.classList.add("active");
	answer[1].style.display = `block`;
	answer[1].classList.add(`activeFaq`);
	this.children[0].classList.add("active");
}

//email validiation
function checkEmail(e) {
	const emailInput = document.querySelector("#email");
	const error = document.querySelector(".error");
	const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
	if (emailInput.value.match(regex)) {
		return true;
	} else if (emailInput.value === `` || !emailInput.value.match(regex)) {
		error.style.display = `flex`;
		emailInput.innerHTML = ``;
		emailInput.placeholder = `example@email.com`;
		e.preventDefault();
	} else {
		error.style.display = `flex`;
		emailInput.classList.add("errorInp");
		e.preventDefault();
	}
}
emailButton.addEventListener("click", checkEmail);
