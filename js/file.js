var file = (function($) {
  var init = function() {
    const date = document.querySelector("#date");
    const newDate = new Date();
    date.innerHTML = `${newDate.getDate()}/${newDate.getMonth() +
      1}/${newDate.getFullYear()} `;
  };

  var eventHandlers = function() {
    const ipad = window.matchMedia("screen and (max-width: 767px)");
    ipad.addListener(validation);

    const menu = document.querySelector("#menu");
    const burgerButton = document.querySelector("#burger-menu");

    const btnSendEmail = document.querySelector("#btnSendEmail");
    const email = document.querySelector("#email");

    menu.addEventListener("click", hideShow);

    btnSendEmail.addEventListener("click", prepareEmail);

    function validation(event) {
      if (event.matches) {
        burgerButton.addEventListener("click", hideShow);
      } else {
        burgerButton.removeEventListener("click", hideShow);
      }
    }

    $("body").on("click", function() {
      if (menu.classList.contains("is-active")) {
        setTimeout(() => {
          menu.classList.remove("is-active");
        }, 2);
      }
    });

    validation(ipad);

    function hideShow() {
      setTimeout(() => {
        if (menu.classList.contains("is-active")) {
          menu.classList.remove("is-active");
        } else {
          menu.classList.add("is-active");
        }
      }, 1);
    }

    function prepareEmail() {
      event.preventDefault();
      if (email.value != undefined && email.value != "") {
        window.open(
          "mailto:tocheserrano1@gmail.com?subject=Contacto&body=" + email.value
        );
      }
    }
  };

  return {
    init: init,
    eventHandlers: eventHandlers
  };
})(jQuery);

$(document).ready(function() {
  file.init();
  file.eventHandlers();
});
