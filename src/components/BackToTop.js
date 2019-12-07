import React from 'react';

function BackToTop(props) {
    
    window.addEventListener("scroll",scrollFunc);
    function scrollFunc() {
        window.pageYOffset > 350 ? document.getElementById('back-to-top-btn').style.display='block' : document.getElementById('back-to-top-btn').style.display='none';
    } 

    window.addEventListener("click", backTopFunc);
    function backTopFunc() {
        window.scrollTo(0,0);
    }

    return (
        <div>
            <button id="back-to-top-btn"><i className="fas fa-chevron-up"></i></button>
        </div>
    );
}

export default BackToTop;
