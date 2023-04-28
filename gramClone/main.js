window.onload = function () {
	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');
	let clicked = false ;

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

	function sendRequests() {
		fetch('files/file1.txt')
		  .then(response => response.text())
		  .then(data => console.log(data));
		  
		fetch('files/file2.txt')
		  .then(response => response.text())
		  .then(data => console.log(data));
		  
		fetch('files/file3.txt')
		  .then(response => response.text())
		  .then(data => console.log(data));
		  
		fetch('files/file4.txt')
		  .then(response => response.text())
		  .then(data => console.log(data));
	  }
	  
	  

	  let fetchBtn = document.getElementById('fetch-btn');

	  fetchBtn.addEventListener('click', sendRequests);



	  // copying  the content of the uploaded file in the textarea

		let fileInput = document.getElementById('myFileInput');
		let textarea = document.getElementById('myTextarea');

		fileInput.addEventListener('change', function() {

		clicked = false ;

		let file = fileInput.files[0];
		let reader = new FileReader();

		reader.onload = function() {
			textarea.value = reader.result;
			countingLetters()
		};

		reader.readAsText(file);
			
		});

		
		// loading the content of the textarea to the txt file 

		textarea.addEventListener('input', function() {

			let fileName = fileInput.value.split('\\').pop(); // Get the name of the file

			let textToWrite = textarea.value;

			// saveAs is a function from the FileSaver.js library
			

			let saveTheChanges = document.getElementById('save-the-changes');

			

			saveTheChanges.addEventListener('click', function saveChanges() {
				

				if (!clicked) {
					
					clicked = true;
					
					let textToWrite = textarea.value;

					let blob = new Blob([textToWrite], {type: "text/plain;charset=utf-8"});

					saveAs(blob, fileName);
					
					textarea.value = ''               
				  }

	
			})
			countingLetters()
		});

	








		

function countingLetters() {
	const textWithoutSpaces = textarea.value.split(' ').join('');
	const textLength = textWithoutSpaces.length;
	const charCount = document.getElementById("charCount");

	  charCount.textContent = `${textLength} حرف`;
}

countingLetters()

// changing the diffrent font properties of the textarea  

let bText = document.getElementById('b-text');
let uText = document.getElementById('u-text');
let iText = document.getElementById('i-text');

bText.addEventListener('click', () => {
	textarea.classList.toggle('b-text')
})

iText.addEventListener('click', () => {
	textarea.classList.toggle('i-text')
})

uText.addEventListener('click', () => {
	textarea.classList.toggle('u-text')
})
 }



 