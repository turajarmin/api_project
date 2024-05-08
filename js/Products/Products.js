const Products = async () => {
  try {
    let data = await fetch("https://turajarmin.github.io/json_mft/db.json");
    let res = await data.json();
    let products = res.products.map((elem) => {
      return `<div class="w-[30%]">
            <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
              title:${elem.title}
            </h5>
            <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
              price:${elem.price}
            </h5>
            <p
              class="text-left text-[16px] mb-[15px] capitalize text-ellipsis overflow-hidden text-nowrap"
            >
              description:${elem.description}
            </p>
            <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
              category:${elem.category}
            </h5>
            <img src=${elem.image} class="block w-[50%] mx-auto mb-[15px]" alt="">
            <div class="w-[100%] flex justify-between px-[10px] box-border">
              <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
                rate:${elem.rating.rate}
              </h5>
              <h5 class="text-left text-[16px] font-bold mb-[15px] capitalize">
                count:${elem.rating.count}
              </h5>
            </div>
          </div>`;
    });
    document
      .querySelector(".products")
      .insertAdjacentHTML("beforeend", products.join(""));
  } catch (error) {
    console.log(error.message);
  }
};
export default Products;
