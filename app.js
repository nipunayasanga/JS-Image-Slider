// This code is wrapped in an immediately invoked function expression (IIFE)
// to create a private scope and avoid polluting the global namespace.
(function(){
    
    const pictures = [   // Array of image filenames (without file extensions) that will be displayed in the slider.
        "img_01",
        "img_02",
        "img_03",
        "img_04",
        "img_05",
        "img_06"
    ];

    
    const buttons = document.querySelectorAll('.btn');// Select all elements with the class 'btn' and store them in the 'buttons' variable.

    
    const imgDiv = document.querySelector('.img-container');// Select the element with the class 'img-container' and store it in the 'imgDiv' variable.

    
    let counter = 0;// Initialize a counter variable to keep track of the current image.

    
    buttons.forEach(function(button){// Iterate over each button in the 'buttons' NodeList.
        
        button.addEventListener("click", function(e){  // Add a click event listener to each button.
            
           
            if (button.classList.contains('btn-left')){  // Check if the clicked button has the class 'btn-left'.
                // Decrement the counter.
                counter--;

                
                if(counter < 0){  // If the counter goes below 0, set it to the last index of the 'pictures' array.
                    counter = pictures.length - 1;
                }

                
                imgDiv.style.background = `url('images/${pictures[counter]}.jpg')`;// Set the background of 'imgDiv' to the corresponding image.
            }

            
            if (button.classList.contains('btn-right')){// Check if the clicked button has the class 'btn-right'.
                // Increment the counter.
                counter++;

                
                if(counter > pictures.length - 1){// If the counter goes beyond the last index, set it to 0.
                    counter = 0;
                }

               
                imgDiv.style.background = `url('images/${pictures[counter]}.jpg')`;// Set the background of 'imgDiv' to the corresponding image.
            }
        });
    });
})();
