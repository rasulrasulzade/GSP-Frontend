const ableSearch = () => {
    $('.search-icon').click(function(){
        $('.my-navbar').addClass('justify-content-center');
        $('.my-navbar').addClass('search-active'); 
        $('main').addClass('main-blur');
    })
}

const disableSearch = () => {
    $('.times-icon').click(function(){
        $('.my-navbar').removeClass('justify-content-center');
        $('.my-navbar').removeClass('search-active');
        $('main').removeClass('main-blur');
    })  

    $(document).click(function(e) {
        const _this = $(e.target);

        if(!_this.closest('.search').length && !_this.hasClass('search')) {
            $('.my-navbar').removeClass('justify-content-center');
            $('.my-navbar').removeClass('search-active');
            $('main').removeClass('main-blur');
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
