$(window).scroll(function () {
    var offset_skill = $('#section_my-skills').offset().top;
    console.log(offset_skill);
    if ($(this).scrollTop() > offset_skill - 200) {
        $('.skillbar').each(function () {
            $(this).find('.skillbar-bar').animate({
                width: $(this).attr('data-percent')
            }, 2000, 'easeOutBounce')
        })  
    } 
    });

$(window).ready(function(){
    $('#download').on('click', function(){
        $('#file').trigger('click');
    })
})