let sliderimages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector('#arrow-right'),
    arrowLeft = document.querySelector('#arrow-left'),
    current = 0;


    // clear all images
    function reset(){

        for(let i = 0 ;i < sliderimages.length;i++){
            sliderimages[i].style.display ='none';
        }
    }

    // intializes the slider
    function startSlide(){
        reset();
        sliderimages[0].style.display = "block"
    }

    // slide left

    function slideLeft(){
        reset();
        sliderimages[current-1].style.display = 'block';
        current --;
    }

     // slide right

     function slideRight(){
        reset();
        sliderimages[current+1].style.display = 'block';
        current ++;
    }


    // Left arrow click

    arrowLeft.addEventListener('click',function(){
        if(current == 0){
            current =sliderimages.length;
        }
        slideLeft();
    })
    arrowRight.addEventListener('click',function(){
        if(current == sliderimages.length - 1){
            current = -1;
        }
        slideRight();
    })
    startSlide();