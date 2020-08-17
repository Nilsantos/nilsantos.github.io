$(document).ready(function () {
  document.getElementById('current-year').textContent = new Date().getFullYear();

  var topMenu = $('.custom-navbar');
  var topMenuHeight = topMenu.outerHeight() + 15;

  var menuItems = topMenu.find('.nav-link');
  var scrollItems = menuItems.map((index, menuItem) => {
    var item = $($(menuItem).attr('href'));
    if (item.length) {
      return item;
    }
  });

  $(window).scroll(() => {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map((index, scrollItem) => {
      if ($(scrollItem).offset().top < fromTop) {
        return scrollItem;
      }
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : '';

    menuItems.removeClass('nav-link-selected');
    menuItems.filter("[href='#" + id + "']").addClass('nav-link-selected');
  });

  $('#btn-vehicles').click(() => {
    var showService = $('#btn-service').hasClass('btn-clicked');

    if (showService) {
      $('#btn-service').removeClass('btn-clicked');
      $('#btn-vehicles').addClass('btn-clicked');

      $('#services-description').text(`Possuímos uma frota para atende-lo com o conforto e 
            segurança que você e sua família merecem`);

      $('#services-icon1').attr('src', './Imgs/car.svg');
      $('#services-icon2').attr('src', './Imgs/van.svg');
      $('#services-icon3').attr('src', './Imgs/bus.svg');

      $('#services-icon-description1').text(
        `Se você deseja um transporte para poucas pessoas ou individual carro é a opção ideal`
      );
      $('#services-icon-description2').text(
        `Caso esteja com um grupo, van seria a melhor opção, com um espaço excelente`
      );
      $('#services-icon-description3').text(
        `Para uma excursão, temos ônibus a disposição, possui uma grande disponibilidade de vagas`
      );
    }
  });

  $('#btn-service').click(() => {
    var showVehicles = $('#btn-vehicles').hasClass('btn-clicked');

    if (showVehicles) {
      $('#btn-vehicles').removeClass('btn-clicked');
      $('#btn-service').addClass('btn-clicked');

      $('#services-description').text(`A MS TOUR tem o objetivo oferecer um transporte de excelência para
            que possa curtir ao máximo sua viagem`);

      $('#services-icon1').attr('src', './Imgs/Map-Icon.svg');
      $('#services-icon2').attr('src', './Imgs/Plane-Icon.svg');
      $('#services-icon3').attr('src', './Imgs/People-Icon.svg');

      $('#services-icon-description1').text(`Transporte com qualidade, conforto e segurança para o turismo`);
      $('#services-icon-description2').text(
        `Traslados à aeroportos, para não se preocupar com estacionamento e horário`
      );
      $('#services-icon-description3').text(
        `Oferecemos um transporte de qualidade para viagens de negócios, reuniões e eventos`
      );
    }
  });

  $('#home-btn-custom').click(() => (window.location.href = '#contats'));

  $('#whatsApp-Icon-Div').mouseover(() => $('#whatsApp-Icon').attr('fill', '#010066'));
  $('#whatsApp-Icon-Div').mouseleave(() => $('#whatsApp-Icon').attr('fill', '#FFFFFF'));
  $('#whatsApp-Icon-Div').click(() => window.open('https://api.whatsapp.com/send?phone=5515997203040', '_blank'));

  $('#facebook-Icon-Div').mouseover(() => $('#facebook-Icon').attr('fill', '#010066'));
  $('#facebook-Icon-Div').mouseleave(() => $('#facebook-Icon').attr('fill', '#FFFFFF'));
  $('#facebook-Icon-Div').click(() => window.open('https://www.facebook.com/ManoelSantosTour/', '_blank'));

  $('#outlook-Icon-Div').mouseover(() => $('.outlook-Icon').attr('fill', '#010066'));
  $('#outlook-Icon-Div').mouseleave(() => $('.outlook-Icon').attr('fill', '#FFFFFF'));
  $('#outlook-Icon-Div').click(() => (window.location.href = 'mailto:atendimento.mstour@gmail.com?subject=Orçamento'));
});
