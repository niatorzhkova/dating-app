$.getJSON("./json/girls.json", function (data) {
  function mapQuestionnaire() {
    let template = "";

    for (let index = 0; index < data.girls.length; index++) {
      template += `
          <div class="swiper-slide">
                               <div class="girls__item">
                                          <div class="top">
                    <img src="${data.girls[index].photo}"  />
                </div>
          <div class="middle">
            <div class="button__container">
              <div class="button">
                <button class="skip">
                  <svg
                    viewBox="4 3 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                      fill="#a66d45"
                    />
                  </svg>
                </button>
              </div>
              <div class="button like">
                <button class="heart-btn">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"
                      fill="#fd9584"
                    />
                  </svg>
                </button>
              </div>
              <div class="button">
                <button class="save">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                      fill="#a7a155"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="name">${data.girls[index].name}</div>
            <div class="extra-info text">
              <div class="occupation">${data.girls[index].occupation}</div>
              <div class="distance">${data.girls[index].km}</div>
            </div>
            <div class="about">
              <div class="about__title title">Обо мне</div>
              <div class="about__subtitle text">
                ${data.girls[index].about}
              </div>
            </div>
            <div class="interests">
              <div class="interests__title title">Мои интересы</div>
              <div class="interests__badges">
                <div class="badge">${data.girls[index].interests[0]}</div>
                <div class="badge">${data.girls[index].interests[1]}</div>
                <div class="badge">${data.girls[index].interests[2]}</div>
              </div>
            </div>
          </div></div>
           </div>
         `;
    }
    document.querySelector(".swiper-wrapper").innerHTML = template;
  }

  mapQuestionnaire();

  const swiper = new Swiper(".swiper", {
    // Swiper configuration
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    preloadImages: true,
    resistance: true,
    resistanceRatio: 0.85,

    // // iOS-specific fixes
    // edgeSwipeDetection: true,
    // iOSEdgeSwipeDetection: true,

    // Smooth transitions
    speed: 300,
    followFinger: false,
    perSlideOffset: 1,
    perSlideRotate: 1,
    rotate: true,
    effect: "cards",
  });

  $(".heart-btn").click(function () {
    setTimeout(() => {
      swiper.slideNext();
    }, 500);
  });
});
$(document).ready(function () {
  $(document).on("click", ".button.like", function () {
    $(this).toggleClass("active");
  });
  $(document).on("click", ".heart-btn", function (e) {
    e.preventDefault();
    // e.stopPropagation();

    var $btn = $(this);

    // Button press effect
    $btn.addClass("active");
    setTimeout(() => $btn.removeClass("active"), 150);

    // Create multiple hearts with staggered timing
    for (let i = 0; i < 18; i++) {
      setTimeout(() => {
        createHeart($btn, e);
      }, i * 30); // Stagger creation
    }
  });

  function createHeart($button, event) {
    // Create heart with random characteristics
    const sizes = [18, 20, 22, 24, 26];
    const $heart = $("<div>", {
      class: "heart-fountain",
      html: "❤",
      css: {
        color: randomColor(),
        fontSize: sizes[Math.floor(Math.random() * sizes.length)] + "px",
        animationName: "heart-float",
        animationDuration: 1 + Math.random() * 0.5 + "s",
        "--random-x1": (Math.random() - 0.5) * 80 + "px",
        "--random-x2": (Math.random() - 0.5) * 120 + "px",
        "--random-x3": (Math.random() - 0.5) * 160 + "px",
        "--random-rot1": (Math.random() - 0.5) * 60 + "deg",
        "--random-rot2": (Math.random() - 0.5) * 120 + "deg",
        "--random-rot3": (Math.random() - 0.5) * 180 + "deg",
      },
    });

    // Position at button center
    const btnPos = $button.offset();
    const btnWidth = $button.outerWidth();
    const btnHeight = $button.outerHeight();

    $heart.css({
      left: btnPos.left + btnWidth / 2 - 10,
      top: btnPos.top + btnHeight / 2,
    });

    $("body").append($heart);

    // Auto-remove after animation
    $heart.on("animationend", function () {
      $heart.remove();
    });
  }

  function randomColor() {
    const hues = [340, 350, 0, 10, 20]; // Pink/red spectrum
    const hue = hues[Math.floor(Math.random() * hues.length)];
    return `hsl(${hue}, 100%, ${70 + Math.random() * 15}%)`;
  }
});
