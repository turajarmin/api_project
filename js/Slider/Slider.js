const Slider = async () => {
  try {
    let data = await fetch("https://turajarmin.github.io/json_mft/db.json");
    let res = await data.json();
    let imageSlider = res.slider.map((elem) => {
      return ` <div class="swiper-slide">
            <img src=${elem.image} alt=${elem.alt} />
      </div>
        `;
    });
    document
      .querySelector(".swiper-wrapper")
      .insertAdjacentHTML("beforeend", imageSlider.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Slider;
