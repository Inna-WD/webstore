// declaring all the products as an array elements
const allProducts = [
    {
        id: `bp1`,
        name: `Black tourmaline`,
        desc: `Inlay chip, black tourmaline (natural), mini undrilled chip, Mohs hardness 7 to 7-1/2. Sold per 50-gram pkg, approximately 550-700 pieces.`,
        color: `black`,
        material: `stone`,
        soldBy: `weight`,
        price: 19.99,
        quantity: 12,
        category: `natural`,
        favorite: false,
        image: "img/blackproduct1.png"


    }, {
        id: `bp2`,
        name: `Black onyx`,
        desc: `Bead, black onyx (dyed), 8mm round, A- grade, Mohs hardness 6-1/2 to 7. Sold per 15-1/2" to 16" strand`,
        color: `black`,
        material: `stone`,
        soldBy: `strand`,
        price: 24.99,
        quantity: 25,
        category: `natural`,
        favorite: false,
        image: "img/blackproduct2.png"

    }, {
        id: `bp3`,
        name: `Lava rock`,
        desc: `Bead, lava rock (waxed), 8mm round with 0.5-1.5mm hole, B grade, Mohs hardness 3 to 3-1/2. Sold per 15-1/2" to 16" strand.`,
        color: `black`,
        material: `stone`,
        soldBy: `strand`,
        price: 29.99,
        quantity: 11,
        category: `natural`,
        favorite: false,
        image: "img/blackproduct3.png"

    }, {
        id: `bp4`,
        name: `Obsidian `,
        desc: `Bead, black obsidian (natural), 8mm round, C grade, Mohs hardness 5 to 5-1/2. Sold per pkg of (10) 15-1/2" to 16" strands.`,
        color: `black`,
        material: `stone`,
        soldBy: `strand`,
        price: 29.99,
        quantity: 11,
        category: `natural`,
        favorite: false,
        image: "img/blackproduct4.png"

    }, {
        id: `bp5`,
        name: `Agate`,
        desc: `Bead, black agate (dyed), 26x17mm-32x23mm freeform with 0.5-1.5mm hole, B grade, Mohs hardness 6-1/2 to 7. Sold per 8-inch strand, approximately 5 beads.`,
        color: `Agate`,
        material: `stone`,
        soldBy: `strand`,
        price: 34.99,
        quantity: 5,
        category: `natural`,
        favorite: false,
        image: "img/blackproduct5.png"

    }, {
        id: `wp1`,
        name: `Magnesite`,
        desc: `Focal, magnesite (stabilized), white, 20x5mm-39x5mm graduated spike fan, B grade, Mohs hardness 3-1/2 to 4. Sold per 10-piece set.`,
        color: `white`,
        material: `glass`,
        soldBy: `item`,
        price: 19.99,
        quantity: 43,
        category: `acrylic`,
        favorite: false,
        image: "img/whiteproduct1.png"
    }, {
        id: `wp2`,
        name: `Selenite`,
        desc: `Bead, selenite (natural), mini to small hand-cut undrilled chip, Mohs hardness 2 to 2-1/2. Sold per 2-ounce pkg.`,
        color: `white`,
        material: `stone`,
        soldBy: `weight`,
        price: 24.99,
        quantity: 4,
        category: `natural`,
        favorite: false,
        image: "img/whiteproduct2.png"

    }, {
        id: `wp3 `,
        name: `Howlite`,
        desc: `Bead, white howlite (natural), 8mm round, B grade, Mohs hardness 3 to 3-1/2. Sold per 15-1/2" to 16" strand.`,
        color: `white`,
        material: `stone`,
        soldBy: `strand`,
        price: 29.99,
        quantity: 5,
        category: `natural`,
        favorite: false,
        image: "img/whiteproduct3.png"

    }, {
        id: `wp4`,
        name: `Howlite`,
        desc: `Bead, white howlite (natural), 6mm round, C grade, Mohs hardness 3 to 3-1/2. Sold per pkg of (10) 15-1/2" to 16" strands.`,
        color: `white`,
        material: `stone`,
        soldBy: `strand`,
        price: 34.99,
        quantity: 45,
        category: `natural`,
        favorite: false,
        image: "img/whiteproduct4.png"

    }, {
        id: `wp5`,
        name: `Czech glass`,
        desc: `Bead, Czech pressed glass, opaque white, 9.5x3mm ring with 3.5mm hole. Sold per pkg of 50.`,
        color: `white`,
        material: `glass`,
        soldBy: `item`,
        price: 39.99,
        quantity: 21,
        category: `plastic`,
        favorite: false,
        image: "img/whiteproduct5.png"

    }, {
        id: `gp1`,
        name: `Delica`,
        desc: `Seed bead, Delica�, glass, Duracoat� opaque galvanized silver, (DB1831), #11 round. Sold per 7.5-gram pkg.`,
        color: `grey`,
        material: `glass`,
        ssoldBy: `weight`,
        price: 19.99,
        quantity: 3,
        category: `acrylic`,
        favorite: false,
        image: "img/greyproduct1.png"

    }, {
        id: `gp2`,
        name: `Cheesewood`,
        desc: `Bead, painted Taiwanese cheesewood (coated), metallic silver, 19-20mm round with 2.5-3mm hole. Sold per 15-1/2" to 16" strand.`,
        color: `grey`,
        material: `glass`,
        soldBy: `strand`,
        price: 24.99,
        quantity: 69,
        category: `plastic`,
        favorite: false,
        image: "img/greyproduct2.png"

    }, {
        id: `gp3`,
        name: `Bead`,
        desc: `Bead, acrylic, silver, 8mm round with stars, 1.75mm hole. Sold per pkg of 100.`,
        color: `grey`,
        material: `acrylic`,
        soldBy: `item`,
        price: 29.99,
        quantity: 5,
        category: `acrylic`,
        favorite: false,
        image: "img/greyproduct3.png"

    }, {
        id: `gp4`,
        name: `Bead mix`,
        desc: `Bead mix, acrylic, opaque silver and black, 7mm double-sided flat round with alphabet letters. Sold per pkg of 200.`,
        color: `grey`,
        material: `acrylic`,
        soldBy: `item`,
        price: 34.99,
        quantity: 7,
        category: `acrylic`,
        favorite: false,
        image: "img/greyproduct4.png"

    }, {
        id: `gp5`,
        name: `Bead crystals`,
        desc: `Bead, Swarovski� crystals, crystal silver night, 4mm Xilion bicone (5328). Sold per pkg of 48.`,
        color: `grey`,
        material: `glass`,
        soldBy: `item`,
        price: 39.99,
        quantity: 8,
        category: `natural`,
        favorite: false,
        image: "img/greyproduct5.png"

    }, {
        id: `blp1`,
        name: `Lampworked glass `,
        desc: `Bead, lampworked glass, multicolored, 22mm double-sided puffed flat round with heart pattern. Sold per pkg of 2.`,
        color: `blue`,
        material: `glass`,
        soldBy: `item`,
        price: 19.99,
        quantity: 54,
        category: `plastic`,
        favorite: false,
        image: "img/blueproduct1.png"

    }, {
        id: `blp2`,
        name: `Carpi blue`,
        desc: `Bead, Swarovski� crystals, Capri blue, 6mm Xilion bicone (5328). Sold per pkg of 24.`,
        color: `blue`,
        material: `glass`,
        soldBy: `item`,
        price: 24.99,
        quantity: 14,
        category: `natural`,
        favorite: false,
        image: "img/blueproduct2.png"

    }, {
        id: `blp3`,
        name: `Lapis lazuli`,
        desc: `Bead, lapis lazuli (natural), medium chip, Mohs hardness 5 to 6. Sold per 36-inch strand.`,
        color: `blue`,
        material: `stone`,
        soldBy: `strand`,
        price: 29.99,
        quantity: 45,
        category: `natural`,
        favorite: false,
        image: "img/blueproduct3.png"

    }, {
        id: `blp4`,
        name: `Celestial glass`,
        desc: `Bead, Celestial Crystal�, transparent turquoise blue, 10x3.5mm / 8x3mm / 6x2mm margarita flower. Sold per pkg of 12.`,
        color: `blue`,
        material: `glass`,
        soldBy: `item`,
        price: 34.99,
        quantity: 12,
        category: `plastic`,
        favorite: false,
        image: "img/blueproduct4.png"

    }, {
        id: `blp5`,
        name: `Turquoise glass`,
        desc: `Bead mix, lampworked glass, turquoise blue with fancy finish, 7x4mm-14x11mm mixed shapes. Sold per pkg of 100-grams, approximately 60-100 beads.`,
        color: `blue`,
        material: `acrylic`,
        soldBy: `weight`,
        price: 39.99,
        quantity: 23,
        category: `acrylic`,
        favorite: false,
        image: "img/blueproduct5.png"

    }, {
        id: `rp1 `,
        name: `Multicolored glass`,
        desc: `Bead, lampworked glass, multicolored, 28x17mm-31x17mm cardinal with folded wings and 2.6mm hole. Sold per pkg of 2.`,
        color: `red`,
        material: `acrylic`,
        soldBy: `item`,
        price: 19.99,
        quantity: 87,
        category: `acrylic`,
        favorite: false,
        image: "img/redproduct1.png"

    }, {
        id: `rp2`,
        name: `Inlay chip`,
        desc: `Inlay chip, "coral" (resin) (imitation), red, mini undrilled chip. Sold per 50-gram pkg, approximately 550-700 pieces.`,
        color: `red`,
        material: `stone`,
        soldBy: `weight`,
        price: 24.99,
        quantity: 12,
        category: `acrylic`,
        favorite: false,
        image: "img/redproduct2.png"


    }, {
        id: `rp3`,
        name: `Siam`,
        desc: `Bead, Swarovski� crystals, Siam, 10mm faceted heart (5742). Sold per pkg of 2.`,
        color: `red`,
        material: `glass`,
        soldBy: `item`,
        price: 29.99,
        quantity: 45,
        category: `natural`,
        favorite: false,
        image: "img/redproduct3.png"

    }, {
        id: `rp4`,
        name: `Pewter`,
        desc: `Bead, crystal and antique silver-plated "pewter" (zinc-based alloy), transparent red and clear, 23mm angel. Sold per pkg of 4.`,
        color: `red`,
        material: `glass`,
        soldBy: `item`,
        price: 34.99,
        quantity: 54,
        category: `plastic`,
        favorite: false,
        image: "img/redproduct4.png"

    }, {
        id: `rp5`,
        name: `Santa`,
        desc: `Bead, lampworked glass, white and red, 23x14mm Santa. Sold per pkg of 2.`,
        color: `red`,
        material: `glass`,
        soldBy: `item`,
        price: 39.99,
        quantity: 65,
        category: `natural`,
        favorite: false,
        image: "img/redproduct5.png"
    }
];
// creating the output format of each product
const getProductAsHtmlString = product => {
    return `
      <article class="product">
      <p>Id: <strong>${product.id}</strong></p>
        <h3 class="productTitle">${product.name}</h3>
        <ul>
          <li>Product Id: <strong>${product.id}</strong></li>
          <li>Product description:${product.desc}</li>
          <li>Color: <strong>${product.color} </strong></li>
          <li>Material: <strong>${product.material} </strong></li>
          <li> Sold by: ${product.soldBy}</li>
         
          <li> Qty in stock: ${product.quantity}</li>
          <li> Category: ${product.category}</li>
          <li> Favorite: ${product.favorite}</li>
          <li><img src="${product.image}"></li>
          <li>$ ${product.price}     <a href="#">     More --></a>
          <img class="fav-product" src="img/favorite.png" alt="favorite">
          <img class="fav-product" src="img/cart.png" alt="cart"></li>
          </ul>
      </article>`;
}

//   check what values were checked in the filter window//
const getCheckedValues = id => {
    let checkedValues = [];
    const inputSet = document.getElementById(id);
    let inputElements = inputSet.getElementsByTagName('input');
    for (let i = 0; i < inputElements.length; i++) {
        if (inputElements[i].checked) {
            checkedValues.push(inputElements[i].value);
        }
    };
    return checkedValues;
};
// console.log("checkedValues")

const getSortingType = () => {
    const select = document.getElementById("sort");
    let optionValue = select.value;
    return optionValue;

    const getSearchType = () => {
        const searchInput = document.getElementById("find");
        const searchInputValue = searchInput.value;
        return searchInputValue;

        // Filtering by color and by material
        const getFilteredProducts = () => {
            const colorValues = getCheckedValues("colourFilter");
            const materialValues = getCheckedValues("materialFilter");
            let filteredProducts = allProducts;
            if (colorValues.length > 0) {
                filteredProducts = filteredProducts.filter(product => colorValues.includes(product.color));
            }

            if (materialValues.length > 0) {
                filteredProducts = filteredProducts.filter(product => materialValues.includes(product.material));
            }

            // Sort
            const sortingType = getSortingType();

            switch (sortingType) {
                case "price-high":
                    filteredProducts.sort((a, b) => b.price - a.price);
                    break;
                case "price-low":
                    filteredProducts.sort((a, b) => a.price - b.price);
                    break;
                case "fav":
                    filteredProducts.sort((a, b) => {
                        if (a.favorite === b.favorite) {
                            return 0;
                        };

                        if (a.favorite === true) {
                            return -1;
                        };

                        return 1;
                    });
                    break;
            };

            // Searching 
            const inputValue = getSearchType();
            if (inputValue.length !== 0) {
                filteredProducts = filteredProducts.filter(product => product.name.toUpperCase().includes(inputValue.toUpperCase()));
            };

            document.getElementById('products').innerHTML = filteredProducts.map(getProductAsHtmlString).join('\n');
        };

        document.getElementById('products').innerHTML = allProducts.map(getProductAsHtmlString).join('\n')

    }