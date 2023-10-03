// chairs IMG

// chairs1
import chairs1 from "img/products/chairs/chairs1/chairs1.png";
import chairs1_1 from "img/products/chairs/chairs1/chairs1_1.png";
import chairs1_2 from "img/products/chairs/chairs1/chairs1_2.png";

// chairs2
import chairs2 from "img/products/chairs/chairs2/chairs2.png";
import chairs2_1 from "img/products/chairs/chairs2/chairs2_1.png";
import chairs2_2 from "img/products/chairs/chairs2/chairs2_2.png";

// chairs3
import chairs3 from "img/products/chairs/chairs3/chairs3.png";
import chairs3_1 from "img/products/chairs/chairs3/chairs3_1.png";
import chairs3_2 from "img/products/chairs/chairs3/chairs3_2.png";

// furniture IMG
// furniture1
import furniture1 from "img/products/furniture/furniture1/furniture1.png";
import furniture1_1 from "img/products/furniture/furniture1/furniture1_1.png";
import furniture1_2 from "img/products/furniture/furniture1/furniture1_2.png";

// furniture2
import furniture2 from "img/products/furniture/furniture2/furniture2.png";
import furniture2_1 from "img/products/furniture/furniture2/furniture2_1.png";
import furniture2_2 from "img/products/furniture/furniture2/furniture2_2.png";

// kitchen IMG
// kitchen1
import kitchen1 from "img/products/kitchen/kitchen1/kitchen1.png";
import kitchen1_1 from "img/products/kitchen/kitchen1/kitchen1_1.png";
import kitchen1_2 from "img/products/kitchen/kitchen1/kitchen1_2.png";
// kitchen2
import kitchen2 from "img/products/kitchen/kitchen2/kitchen2.png";
import kitchen2_1 from "img/products/kitchen/kitchen2/kitchen2_1.png";
import kitchen2_2 from "img/products/kitchen/kitchen2/kitchen2_2.png";
// kitchen3
import kitchen3 from "img/products/kitchen/kitchen3/kitchen3.png";
import kitchen3_1 from "img/products/kitchen/kitchen3/kitchen3_1.png";
import kitchen3_2 from "img/products/kitchen/kitchen3/kitchen3_2.png";

// skinCare IMG
// skinCare1
import skinCare1 from "img/products/skinCare/skinCare1/skinCare1.png";
import skinCare1_1 from "img/products/skinCare/skinCare1/skinCare1_1.png";
import skinCare1_2 from "img/products/skinCare/skinCare1/skinCare1_2.png";

// skinCare2
import skinCare2 from "img/products/skinCare/skinCare2/skinCare2.png";
import skinCare2_1 from "img/products/skinCare/skinCare2/skinCare2_1.png";
import skinCare2_2 from "img/products/skinCare/skinCare2/skinCare2_2.png";

// skinCare3
import skinCare3 from "img/products/skinCare/skinCare3/skinCare3.png";
import skinCare3_1 from "img/products/skinCare/skinCare3/skinCare3_1.png";
import skinCare3_2 from "img/products/skinCare/skinCare3/skinCare3_2.png";

// skinCare4
import skinCare4 from "img/products/skinCare/skinCare4/skinCare4.png";
import skinCare4_1 from "img/products/skinCare/skinCare4/skinCare4_1.png";
import skinCare4_2 from "img/products/skinCare/skinCare4/skinCare4_2.png";

const productList = {
  product1: {
    name: "Nature Series Cream Beige DSW",
    price: 68,
    img: chairs1,
    addImg: [chairs1_1, chairs1_2],
    type: "chairs",
    link: "/product/1",
    texture: "wood",
    des: "Each color in the Nature Series resembles the natural color created by our mother Earth, hence these colors are organically and naturally looking. These natural tones of colors are meant to blend in all kind of settings and occasions. ",
  },
  product2: {
    name: "Strandmon High Back Chair",
    price: 120,
    img: chairs2,
    addImg: [chairs2_1, chairs2_2],
    type: "chairs",
    link: "/product/2",
    texture: "wood",
    des: "You can really relax and unwind in comfort as this sofa's high back provides extra neck support. The cover is made of soft velvet fabric with wide stripes, pleasant to the touch, has a slight sheen and makes the chair cozy.",
  },
  product3: {
    name: "Halmar Armchairs SOFT",
    price: 135,
    img: chairs3,
    addImg: [chairs3_1, chairs3_2],
    type: "chairs",
    link: "/product/3",
    texture: "wood",
    des: "All furniture offered by Halmar is durable, durable, as well as functional and comfortable in everyday use. They combine modern, original design with many utility values. By choosing the Halmar brand, you can be sure that furniture and accessories will be an excellent element of interior design and will allow you to create many unique arrangements.",
  },
  product4: {
    name: "Polytrends Laguna 47'",
    price: 800,
    img: furniture1,
    addImg: [furniture1_1, furniture1_2],
    type: "furniture",
    link: "/product/4",
    texture: "polyethylene",
    des: "Designed with clean, straight lines and topped with a unique headboard, the Farmhouse Collection offers unparalleled class and waterfront style. Each piece is constructed of lumber made of durable recycled high-density polyethylene (HDPE) that provides the look of painted wood without the maintenance. ",
  },
  product5: {
    name: "FÖRHÖJA Kitchen cart",
    price: 200,
    img: furniture2,
    addImg: [furniture2_1, furniture2_2],
    type: "furniture",
    link: "/product/5",
    texture: "wood",
    des: "Solid wood is a natural material that is easy to repair, refinish and change whenever you like. Birch is a straight-grained and light-coloured hardwood with light brown knots. Over time the colour goes from cream to light amber.",
  },
  product6: {
    name: "Philips HR 3652/00",
    price: 20,
    img: kitchen1,
    addImg: [kitchen1_1, kitchen1_2],
    type: "kitchen",
    link: "/product/6",
    texture: "metal",
    des: "With ProBlend 6 3D technology, 1400 watts of power and speeds up to 35,000 RPM, enjoy smoother smoothies and blends with just the right taste and texture. Proven to motivate users to increase fruit and vegetables in their diet.",
  },
  product7: {
    name: "KitchenAid Artisan KSM15",
    price: 59,
    img: kitchen2,
    addImg: [kitchen2_1, kitchen2_2],
    type: "kitchen",
    link: "/product/7",
    texture: "metal",
    des: "Elevate your culinary creations with the KitchenAid Artisan KSM150 Stand Mixer. This iconic kitchen essential combines style and power. With its 325-watt motor and versatile attachments, it effortlessly handles everything from mixing dough to whipping up delicate meringues. ",
  },
  product8: {
    name: "Bialetti Moka Express",
    price: 70,
    img: kitchen3,
    addImg: [kitchen3_1, kitchen3_2],
    type: "kitchen",
    link: "/product/8",
    texture: "metal",
    des: "Experience the rich tradition of Italian coffee-making with the Bialetti Moka Express. This iconic stovetop espresso maker has been a beloved fixture in kitchens worldwide for generations.",
  },
  product9: {
    name: "The Ordinary Glycolic Acid 7%",
    price: 23,
    img: skinCare1,
    addImg: [skinCare1_1, skinCare1_2],
    type: "skin care",
    link: "/product/9",
    texture: "liquid",
    des: "Unlock radiant skin with The Ordinary Glycolic Acid 7%. This skincare powerhouse is formulated to exfoliate and revitalize your complexion, leaving it smoother, brighter, and more even-toned.",
  },
  product10: {
    name: "iS Clinical Super Serum Advance+",
    price: 68,
    img: skinCare2,
    addImg: [skinCare2_1, skinCare2_2],
    type: "skin care",
    link: "/product/10",
    texture: "liquid",
    des: "Elevate your skincare routine with iS Clinical Super Serum Advance+. This advanced formula is a powerful ally in your quest for healthier, more youthful skin.",
  },
  product11: {
    name: "La Roche-Posay Lipikar Fluide",
    price: 45,
    img: skinCare3,
    addImg: [skinCare3_1, skinCare3_2],
    type: "skin care",
    link: "/product/11",
    texture: "liquid",
    des: "Discover La Roche-Posay Lipikar Fluide, a gentle and hydrating body lotion designed to nourish and soothe your skin. Formulated with the utmost care and backed by dermatological expertise, this lightweight, non-greasy fluid is perfect for sensitive or dry skin.",
  },
  product12: {
    name: "Chanel La Mousse",
    price: 77,
    img: skinCare4,
    addImg: [skinCare4_1, skinCare4_2],
    type: "skin care",
    link: "/product/12",
    texture: "creame",
    des: "Elevate your skincare experience with Chanel La Mousse Anti-Pollution. This luxurious cleansing mousse is your daily defense against environmental pollutants and impurities. Crafted by CHANEL, a name synonymous with timeless elegance and quality, this mousse transforms your cleansing routine into a spa-like indulgence.",
  },
};

export default productList;
