let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


//设置图片切换
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google1.png') {
      myImage.setAttribute('src', 'images/google.png');
    } else {
      myImage.setAttribute('src', 'images/google1.png');
    }
}



//let myImage = document.querySelector('img');

//myImage.onclick = function() {
//    let mySrc = myImage.getAttribute('src');
//    if(mySrc === 'images/google_icon_131222.png'){
//	myImage.setAttribute('src', 'images/google_chrome1.png');
//	}else {
//	  myImage.setAttribute('src', 'images/google_icon_131222.png');
//	}	
//}


