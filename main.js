$('.strona.homepage').show();
$('.spa').click(function (event) { 
    event.preventDefault();
    const nazwa = this.dataset.page;
    $('.strona').hide();
    $('.'+nazwa).show();
    $(this).addClass('active').siblings().removeClass('active'); 
});