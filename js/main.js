$(document).ready(function () {
    app.init();
    
    window.onscroll = function() {
        if ($(document).scrollTop() + $(window).height() > $('.super-block').offset().top && $(document).scrollTop() - $('.super-block').offset().top < $('.super-block').height()) {
//            console.log('aloha');
            $('img#inter').addClass('inter-ready');
            $('img#phone').addClass('phone-ready');
        }
        
    }
});


var app = {
    $humburgerEl: $('.head_search_humb'),
    $headSearhcEl: $('.head_search'),
    $headInputSearEl: $('#head_input_sear'),
    $searchSubEl: $('#search_sub'),
    $headSearchIconEl: $('.search_icon'),
    
    init: function() {
//        console.log('Aloha');
        this.event(this.$humburgerEl, 'click', this.humbAnim.bind(this));
//        this.event(this.$headSearchIconEl, 'click', this.humbReAnim.bind(this));
        
    },
    
    event: function (el, event, func) {
        $('body').on(event, el, function(e) {
            e.preventDefault();
            func(e, $(this));
        });
    },
        
    humbAnim: function() {
        this.$headSearhcEl.addClass('anim-go');  
        this.$headInputSearEl.addClass('anim-input');  
        this.$searchSubEl.addClass('anim-sub'); 
        this.$humburgerEl.addClass('disp-none');
    },
    
    humbReAnim: function() {
        this.$headSearhcEl.removeClass('anim-go');  
        this.$headInputSearEl.removeClass('anim-input');  
        this.$searchSubEl.removeClass('anim-sub'); 
        this.$humburgerEl.removeClass('disp-none');
    },
    
    
    
} 