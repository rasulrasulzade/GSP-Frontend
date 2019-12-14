const ableSearch = () => {
    $('.search-icon').click(function(){
        $('.my-navbar').addClass('search-active');
        $('.my-navbar').addClass('justify-content-center');
    })
}

const disableSearch = () => {
    $('.times-icon').click(function(){
        $('.my-navbar').removeClass('search-active');
        $('.my-navbar').removeClass('justify-content-center');
    })  

    $(document).click(function(e) {
        if(!e.target.closest('.search') && !$(e.target).hasClass('search')) {
            console.log(e.target)
            $('.my-navbar').removeClass('search-active');
            $('.my-navbar').removeClass('justify-content-center');
        }
    });
}

const toggleNav = e => {
    $('.hamburger').click(function(){
        $('.nv-collapse').toggleClass('toggle-nav');
    });
    
    $('.hamburger').click(function(){
        $(this).toggleClass('hamburger-active');
    });
}

export {ableSearch, disableSearch,toggleNav}
