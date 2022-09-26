/* 
[1] Word Lenght Before The Last Word 
[2] Word Length More Than One Letter
[3] If The Sentence Include Only One Word Return => false
[4] If The Sentence Includes Two Words Return => first word
[5] 
 */

function wordBeforeLastLength(sentence) {
	console.log(sentence.split(" "));
	// if(sentence.includes(" ")) {

	// }
}

wordBeforeLastLength("Elzero Web School"); // Web => 3
wordBeforeLastLength("Hello Elzero Web School    A "); // Web => 3
wordBeforeLastLength("Hello Elzero    Web   School  "); // Web => 3
wordBeforeLastLength("Hello"); // False
wordBeforeLastLength("Hello Elzero"); // Hello
wordBeforeLastLength("Hello Elzero    A"); // Hello
