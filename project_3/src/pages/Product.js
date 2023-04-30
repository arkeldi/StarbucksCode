import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
const BottomButton = () => {
  return (
    <Button >
      <ButtonImg src={require('../images/bag.jpg')} />
    </Button>
  );
};

const Product = () => {

  const { id } = useParams();
  
  const [sizeImage, setSizeImage] = useState(require('../images/product/size_default.png'));
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  let imgSrc = '';
  let menuText = '';
  let descriptionText = '';

  if (id === '1') {
    imgSrc = require('../images/product/order_1.png');
    menuText = 'Americano';
    descriptionText = 'Americano is a shot of espresso with hot water added. It has a rich and bold flavor.';
  } else if (id === '2') {
    imgSrc = require('../images/product/order_2.png');
    menuText = 'Cafe Latte';
    descriptionText = 'A cafe latte is a shot of espresso with steamed milk and a small layer of foam on top. It has a smooth and creamy flavor.';
  } else if (id === '3') {
    imgSrc = require('../images/product/order_3.png');
    menuText = 'Cappuccino';
    descriptionText = 'A cappuccino is a shot of espresso with equal parts steamed milk and foam. It has a strong and bold flavor.';
  } else if (id === '4') {
    imgSrc = require('../images/product/order_4.png');
    menuText = 'Caramel Macchiato';
    descriptionText = 'A caramel macchiato is a shot of espresso with steamed milk vanilla syrup and caramel sauce. It has a sweet and creamy flavor.';
  } else if (id === '5') {
    imgSrc = require('../images/product/order_5.png');
    menuText = 'Mocha';
    descriptionText = 'A mocha is a shot of espresso with chocolate syrup and steamed milk. It has a rich and chocolatey flavor.';
  } else if (id === '6') {
    imgSrc = require('../images/product/order_6.png');
    menuText = 'White Mocha';
    descriptionText = 'A white mocha is a shot of espresso with white chocolate syrup and steamed milk. It has a sweet and creamy flavor.';
  } else if (id === '7') {
    imgSrc = require('../images/product/order_7.png');
    menuText = 'Black and White Mocha';
    descriptionText = 'A black and white mocha is a shot of espresso with both white and dark chocolate syrups and steamed milk. It has a rich and decadent flavor.';
  } else if (id === '8') {
    imgSrc = require('../images/product/order_8.png');
    menuText = 'Caramel Mocha';
    descriptionText = 'A caramel mocha is a shot of espresso with chocolate syrup caramel sauce and steamed milk. It has a sweet and indulgent flavor.';
  } else if (id === '9') {
    imgSrc = require('../images/product/order_9.png');
    menuText = 'Coconut Mocha';
    descriptionText = 'A coconut mocha is a shot of espresso with coconut syrup chocolate syrup and steamed milk. It has a tropical and chocolatey flavor.';
  } else if (id === '10') {
    imgSrc = require('../images/product/order_10.png');
    menuText = 'Espresso';
    descriptionText = 'Espresso is a single shot of strong and bold coffee.';
  } else if (id === '11') {
    imgSrc = require('../images/product/order_11.png');
    menuText = 'Espresso Macchiato';
    descriptionText = 'A espresso macchiato is a shot of espresso with a small amount of milk foam on top. It has a rich and creamy flavor.';
  } else if (id === '12') {
    imgSrc = require('../images/product/order_12.png');
    menuText = 'Espresso Con Panna';
    descriptionText = 'A espresso con panna is a shot of espresso with whipped cream on top. It has a decadent and indulgent flavor.';
  } else if (id === '13') {
    imgSrc = require('../images/product/order_13.png');
    menuText = 'Brewed Coffee';
    descriptionText = 'A brewed coffee is a classic and simple cup of coffee made by pouring hot water over coffee grounds. It has a bold and robust flavor.';
  } else if (id === '14') {
    imgSrc = require('../images/product/order_14.png');
    menuText = 'Cafe Au Lait';
    descriptionText = 'A cafe au lait is a combination of brewed coffee and steamed milk. It has a smooth and creamy flavor.';
  } else if (id === '15') {
    imgSrc = require('../images/product/order_15.png');
    menuText = 'Red Eye';
    descriptionText = 'A red eye is a cup of brewed coffee with a shot of espresso added. It has a strong and bold flavor.';
  } else if (id === '16') {
    imgSrc = require('../images/product/order_16.png');
    menuText = 'Black';
    descriptionText = 'A black coffee is a simple cup of brewed coffee without any milk or sugar added. It has a strong and bold flavor.';
  } else if (id === '17') {
    imgSrc = require('../images/product/order_17.png');
    menuText = 'Hot Chocolate';
    descriptionText = 'A hot chocolate is a drink made with steamed milk and chocolate syrup. It has a rich and chocolatey flavor.';
  } else if (id === '18') {
    imgSrc = require('../images/product/order_18.png');
    menuText = 'White Hot Chocolate';
    descriptionText = 'A white hot chocolate is a drink made with steamed milk and white chocolate syrup. It has a sweet and creamy flavor.';
  } else if (id === '19') {
    imgSrc = require('../images/product/order_19.png');
    menuText = 'Black and White Chocolate';
    descriptionText = 'A black and white chocolate is a drink made with steamed milk white chocolate syrup';
  } else if (id === '20') {
    imgSrc = require('../images/product/order_20.png');
    menuText = 'Green Tea Latte';
    descriptionText = 'A green tea latte is a drink made with matcha green tea powder and steamed milk. It has a earthy and creamy flavor.';
  } else if (id === '21') {
    imgSrc = require('../images/product/order_21.png');
    menuText = 'Chai Latte';
    descriptionText = 'A chai latte is a drink made with spiced black tea and steamed milk. It has a warm and aromatic flavor.';
  } else if (id === '22') {
    imgSrc = require('../images/product/order_22.png');
    menuText = 'Brewed Tea Latte';
    descriptionText = 'A brewed tea latte is a drink made with brewed tea and steamed milk. It has a light and refreshing flavor.';
  } else if (id === '23') {
    imgSrc = require('../images/product/order_23.png');
    menuText = 'Hot Brewed Tea';
    descriptionText = 'A hot brewed tea is a simple cup of hot water and tea bag. It has a light and natural flavor.';
  } else if (id === '24') {
    imgSrc = require('../images/product/order_24.png');
    menuText = 'Iced Black Tea';
    descriptionText = 'A classic iced black tea made with tea leaves and served over ice. It has a refreshing and bold flavor.';
  } else if (id === '25') {
    imgSrc = require('../images/product/order_25.png');
    menuText = 'Iced Green Tea';
    descriptionText = 'A classic iced green tea made with green tea leaves and served over ice. It has a light and refreshing flavor.';
  } else if (id === '26') {
    imgSrc = require('../images/product/order_26.png');
    menuText = 'Iced Passion Tea';
    descriptionText = 'A passion tea is a blend of hibiscus lemongrass and apple flavors and is served over ice. It has a sweet and fruity flavor.';
  } else if (id === '27') {
    imgSrc = require('../images/product/order_27.png');
    menuText = 'Green Tea Lemonade';
    descriptionText = 'A green tea lemonade is a combination of iced green tea lemonade and simple syrup. It has a sweet and tangy flavor.';
  } else if (id === '28') {
    imgSrc = require('../images/product/order_28.png');
    menuText = 'Passion Tea Lemonade';
    descriptionText = 'A passion tea lemonade is a combination of iced passion tea lemonade and simple syrup. It has a sweet and fruity flavor.';
  } else if (id === '29') {
    imgSrc = require('../images/product/order_29.png');
    menuText = 'Iced Coffee';
    descriptionText = 'A classic iced coffee made with coffee and served over ice. It has a bold and smooth flavor.';
  } else if (id === '30') {
    imgSrc = require('../images/product/order_30.png');
    menuText = 'Iced Cafe Con Leche';
    descriptionText = 'A iced cafe con leche is a combination of iced coffee and sweetened condensed milk. It has a sweet and creamy flavor.';
  } else if (id === '31') {
    imgSrc = require('../images/product/order_31.png');
    menuText = 'Cold Brewed Iced Coffee';
    descriptionText = 'A cold brewed iced coffee is made by steeping coffee grounds in cold water for an extended period of time';
  } else if (id === '32') {
    imgSrc = require('../images/product/order_32.png');
    menuText = 'Cold Brewed Iced Coffee with Milk';
    descriptionText = 'A cold brewed iced coffee with milk is made by steeping coffee grounds in cold water for an extended period';
  } else if (id === '33') {
    imgSrc = require('../images/product/order_33.png');
    menuText = 'Coffee Frappuccino';
    descriptionText = 'A coffee frappuccino is a blended beverage made with coffee milk and ice. It has a smooth and creamy coffee flavor.';
  } else if (id === '34') {
    imgSrc = require('../images/product/order_34.png');
    menuText = 'Espresso Frappuccino';
    descriptionText = 'An expresso frappuccino is a blended beverage made with espresso milk and ice. It has a rich and bold coffee flavor.	';
  } else if (id === '35') {
    imgSrc = require('../images/product/order_35.png');
    menuText = 'Caramel Frappuccino';
    descriptionText = 'A caramel frappuccino is a blended beverage made with coffee milk ice and caramel syrup. It has a sweet and creamy caramel flavor.';
  } else if (id === '36') {
    imgSrc = require('../images/product/order_36.png');
    menuText = 'Mocha Frappuccino';
    descriptionText = 'A mocha frappuccino is a blended beverage made with coffee milk ice and chocolate syrup. It has a rich and chocolatey flavor.';
  } else if (id === '37') {
    imgSrc = require('../images/product/order_37.png');
    menuText = 'Java Chip Frappuccino';
    descriptionText = 'A java chip frappuccino is a blended beverage made with coffee milk ice chocolate chips and chocolate syrup. It has a rich and chocolatey flavor with a slight coffee kick.';
  } else if (id === '38') {
    imgSrc = require('../images/product/order_38.png');
    menuText = 'Cafe Vanilla Frappuccino';
    descriptionText = 'A cafe vanilla frappuccino is a blended beverage made with coffee milk ice and vanilla syrup. It has a sweet and creamy vanilla flavor.';
  } else if (id === '39') {
    imgSrc = require('../images/product/order_39.png');
    menuText = 'White Mocha Frappuccino';
    descriptionText = 'A white mocha frappuccino is a blended beverage made with coffee milk ice and white chocolate syrup. It has a sweet and creamy white chocolate flavor with a slight coffee kick.';
  } else if (id === '40') {
    imgSrc = require('../images/product/order_40.png');
    menuText = 'Syrup Frappuccino';
    descriptionText = 'A syrup frappuccino is a blended beverage made with coffee milk ice and any flavored syrup of your choice. It has a sweet and unique flavor depending on the syrup used.';
  } else if (id === '41') {
    imgSrc = require('../images/product/order_41.png');
    menuText = 'Vanilla Frappuccino';
    descriptionText = 'A vanilla frappuccino is a blended beverage made with milk ice and vanilla syrup. It has a sweet and creamy vanilla flavor.';
  } else if (id === '42') {
    imgSrc = require('../images/product/order_42.png');
    menuText = 'Strawberries and Frappuccino';
    descriptionText = 'A vanilla frappuccino is a blended beverage made with milk ice and vanilla syrup. It has a sweet and creamy vanilla flavor.';
  } else if (id === '43') {
    imgSrc = require('../images/product/order_43.png');
    menuText = 'Double Choclate Chip Frappuccino';
    descriptionText = 'A double chocolate chip frappuccino is a blended beverage made with milk ice chocolate chips and chocolate syrup. It has a rich and chocolatey flavor.';
  } else if (id === '44') {
    imgSrc = require('../images/product/order_44.png');
    menuText = 'Syrup Creme Frappuccino';
    descriptionText = 'A syrup creme frappuccino is a blended beverage made with milk ice and any flavored syrup of your choice. It has a sweet and unique flavor depending on the syrup used.';
  } else if (id === '45') {
    imgSrc = require('../images/product/order_45.png');
    menuText = 'Blended Strawberry Frappuccino';
    descriptionText = 'A blended strawberry frappuccino is a blended beverage made with milk ice and strawberry puree. It has a sweet and refreshing strawberry flavor. ';
  } else if (id === '46') {
    imgSrc = require('../images/product/order_46.png');
    menuText = 'Mango Smoothie';
    descriptionText = 'A blend of mangoes and ice.';
  } else if (id === '47') {
    imgSrc = require('../images/product/order_47.png');
    menuText = 'Pomegranate Smoothie';
    descriptionText = 'A blend of pomegranate and ice.';
  } else if (id === '48') {
    imgSrc = require('../images/product/order_48.png');
    menuText = 'Blueberry Smoothie';
    descriptionText = 'A blend of blueberries and ice.';
  } else if (id === '49') {
    imgSrc = require('../images/product/order_49.png');
    menuText = 'Green Tea Smoothie';
    descriptionText = 'A blend of green tea and ice.';
  } else if (id === '50') {
    imgSrc = require('../images/product/order_50.png');
    menuText = 'Blueberry Green Tea Smoothie';
    descriptionText = 'A blend of blueberries green tea and ice.';
  } else if (id === '51') {
    imgSrc = require('../images/product/order_51.png');
    menuText = 'Pomegranate Green Tea Smoothie';
    descriptionText = 'A blend of pomegranate green tea and ice.';
  } else if (id === '52') {
    imgSrc = require('../images/product/order_52.png');
    menuText = 'Silk Almond Milk Vanilla';
    descriptionText = 'A dairy-free alternative to traditional milk with a hint of vanilla flavor.';
  } else if (id === '53') {
    imgSrc = require('../images/product/order_53.png');
    menuText = 'Silk Almond Milk Chocolate';
    descriptionText = 'A dairy-free alternative to traditional chocolate milk with a rich chocolate flavor.';
  } else if (id === '54') {
    imgSrc = require('../images/product/order_54.png');
    menuText = 'Aquafina Water';
    descriptionText = 'A refreshing bottled water with a pure and crisp taste.';
  } else if (id === '55') {
    imgSrc = require('../images/product/order_55.png');
    menuText = 'Liquid IV Hydration Multiplier';
    descriptionText = 'A powdered drink mix designed to hydrate and replenish electrolytes.';
  } else if (id === '56') {
    imgSrc = require('../images/product/order_56.png');
    menuText = 'Teavana Hibiscus Spice';
    descriptionText = 'A blend of hibiscus flowers cinnamon and cloves with a tart and spicy flavor.';
  } else if (id === '57') {
    imgSrc = require('../images/product/order_57.png');
    menuText = 'Teavana Classic Chai';
    descriptionText = 'A black tea blend with cardamom cinnamon ginger clove and black pepper with a bold and spicy flavor.';
  } else if (id === '58') {
    imgSrc = require('../images/product/order_58.png');
    menuText = 'Teavana Jasmine Citrus';
    descriptionText = 'A green tea blend with jasmine petals and citrus flavors with a refreshing and floral taste.';
  } else if (id === '59') {
    imgSrc = require('../images/product/order_59.png');
    menuText = 'Teavana Chamomile Blush';
    descriptionText = 'A caffeine-free herbal tea blend with chamomile rose petals and herbs with a sweet and calming flavor.';
  } else if (id === '60') {
    imgSrc = require('../images/product/order_60.png');
    menuText = 'Teavana Radiant Green';
    descriptionText = 'A green tea blend with lemongrass and spearmint with a light and refreshing taste.';
  } else if (id === '61') {
    imgSrc = require('../images/product/order_61.png');
    menuText = 'Teavana Modern Earl Grey';
    descriptionText = 'A black tea blend with bergamot and lavender with a modern twist on the classic Earl Grey flavor.';
  } else if (id === '62') {
    imgSrc = require('../images/product/order_62.png');
    menuText = 'Flat Cheese Pizza';
    descriptionText = 'Delicious cheese pizza with a crispy crust.';
  } else if (id === '63') {
    imgSrc = require('../images/product/order_63.png');
    menuText = 'Deep Dish Pepperoni Pizza';
    descriptionText = 'A thick crust pizza topped with pepperoni mozzarella cheese and tomato sauce.';
  } else if (id === '64') {
    imgSrc = require('../images/product/order_64.png');
    menuText = 'Peanut Butter Perfect Bar';
    descriptionText = 'A protein bar made with organic peanut butter and other wholesome ingredients.';
  } else if (id === '65') {
    imgSrc = require('../images/product/order_65.png');
    menuText = 'Sargento Balanced Breaks';
    descriptionText = 'A snack pack featuring natural cheese nuts and dried fruit.';
  } else if (id === '66') {
    imgSrc = require('../images/product/order_66.png');
    menuText = 'P3 Snack';
    descriptionText = 'A protein-packed snack featuring meat cheese and nuts.';
  } else if (id === '67') {
    imgSrc = require('../images/product/order_67.png');
    menuText = 'Dippin Sticks Sliced Apples';
    descriptionText = 'Sliced apples paired with a creamy caramel sauce for dipping.';
  } else if (id === '68') {
    imgSrc = require('../images/product/order_68.png');
    menuText = 'Italian Sub';
    descriptionText = 'A classic sub sandwich with ham salami provolone cheese lettuce tomato and Italian dressing.';
  } else if (id === '69') {
    imgSrc = require('../images/product/order_69.png');
    menuText = 'Cream Cheese';
    descriptionText = 'A smooth and creamy spread perfect for bagels and other breakfast items.';
  } else if (id === '70') {
    imgSrc = require('../images/product/order_70.png');
    menuText = 'Sargento Colby Jack Cheese';
    descriptionText = 'A blend of Colby and Monterey Jack cheeses with a smooth and mild flavor.';
  } else if (id === '71') {
    imgSrc = require('../images/product/order_71.png');
    menuText = 'Babybel Cheese Balls';
    descriptionText = 'Miniature cheese rounds with a creamy texture and mild flavor.';
  } else if (id === '72') {
    imgSrc = require('../images/product/order_72.png');
    menuText = 'Blueberry Muffin';
    descriptionText = 'A fluffy muffin studded with juicy blueberries.';
  } else if (id === '73') {
    imgSrc = require('../images/product/order_73.png');
    menuText = 'Chocolate Tuxedo Muffin';
    descriptionText = 'A decadent chocolate muffin with a creamy chocolate filling.';
  } else if (id === '74') {
    imgSrc = require('../images/product/order_74.png');
    menuText = 'Banana Nut Muffin';
    descriptionText = 'A moist and flavorful muffin made with ripe bananas and crunchy nuts.';
  } else if (id === '75') {
    imgSrc = require('../images/product/order_75.png');
    menuText = 'Glazed Donut';
    descriptionText = 'A classic donut coated in a sweet glaze.';
  } else if (id === '76') {
    imgSrc = require('../images/product/order_76.png');
    menuText = 'Butter Croissant';
    descriptionText = 'A flaky and buttery pastry perfect for breakfast or a snack.';
  } else if (id === '77') {
    imgSrc = require('../images/product/order_77.png');
    menuText = 'Gluten Free Brownie';
    descriptionText = 'A rich and chocolatey brownie made without gluten-containing ingredients.';
  } else if (id === '78') {
    imgSrc = require('../images/product/order_78.png');
    menuText = 'Chocolate Chip Cookie';
    descriptionText = 'A classic cookie with chunks of chocolate in every bite.';
  } else if (id === '79') {
    imgSrc = require('../images/product/order_79.png');
    menuText = 'Chewy Marshmallow';
    descriptionText = 'A soft and fluffy marshmallow treat with a sweet flavor.';
  } else if (id === '80') {
    imgSrc = require('../images/product/order_80.png');
    menuText = 'Salted Caramel Cookie';
    descriptionText = 'A chewy cookie with a sweet and salty flavor combination.';
  } else if (id === '81') {
    imgSrc = require('../images/product/order_81.png');
    menuText = 'Toffee Crunch Brownie';
    descriptionText = 'A decadent brownie loaded with crunchy toffee bits.';
  } else if (id === '82') {
    imgSrc = require('../images/product/order_82.png');
    menuText = 'Kind Bar (Caramel)';
    descriptionText = 'A protein bar made with nuts caramel and chocolate for a sweet and salty snack.';
  } else if (id === '83') {
    imgSrc = require('../images/product/order_83.png');
    menuText = 'Belvita Blueberry Breakfast Biscuits';
    descriptionText = 'A crunchy breakfast biscuit made with whole grains and real blueberries.';
  } else if (id === '84') {
    imgSrc = require('../images/product/order_84.png');
    menuText = 'Altoids (Peppermint)';
    descriptionText = 'A classic breath mint with a refreshing peppermint flavor.';
  } else if (id === '85') {
    imgSrc = require('../images/product/order_85.png');
    menuText = 'Koffie Straw';
    descriptionText = 'A reusable stainless steel straw with a silicone tip and a carrying case perfect for sipping coffee on the go.';
  } else if (id === '86') {
    imgSrc = require('../images/product/order_86.png');
    menuText = 'Starbucks Mug';
    descriptionText = 'A ceramic mug with the Starbucks logo and a large handle for comfortable grip.';
  } else if (id === '87') {
    imgSrc = require('../images/product/order_87.png');
    menuText = 'Starbucks Cup';
    descriptionText = 'A reusable plastic cup with a lid and straw featuring the Starbucks logo and a design inspired by their seasonal promotions.';
  } else if (id === '88') {
    imgSrc = require('../images/product/order_88.png');
    menuText = 'Starbucks Tumbler';
    descriptionText = 'A double-walled insulated tumbler with a screw-on lid and straw featuring a colorful design and the Starbucks logo.';
  } else if (id === '89') {
    imgSrc = require('../images/product/order_89.png');
    menuText = 'A&M Coffee Cup';
    descriptionText = 'A ceramic coffee cup with the Texas A&M University logo and colors.';
  }

  const handleSizeButtonClick = (size) => {
    if (size === 'short') {
      setSizeImage(require('../images/product/size_s.png'));
    } else if (size === 'tall') {
      setSizeImage(require('../images/product/size_t.png'));
    } else if (size === 'grande') {
      setSizeImage(require('../images/product/size_g.png'));
    } else if (size === 'venti') {
      setSizeImage(require('../images/product/size_v.png'));
    }
  };

  const [showOverlay, setShowOverlay] = useState(false);

  const [customTypeText, setCustomText] = useState('Edit');
  const [activeForm, setActiveForm] = useState(null);

  const handleButtonClick = (buttonType) => {
    switch(buttonType) {
      case 'decaf':
        setCustomText('Decaf');
        break;
      case 'shots':
        setCustomText('Shots');
        break;
      case 'syrup':
        setCustomText('Syrup');
        break;
      case 'milk':
        setCustomText('Milk');
        break;
      case 'custom':
        setCustomText('Custom');
        break;
      default:
        setCustomText('Customizations');
        break;
    }
    setActiveForm(buttonType);
    setShowOverlay(true);
    document.body.style.overflow = 'hidden';
  };
  
  const [decafValue, setDecafValue] = useState(null);
  const [shotsValue, setShotsValue] = useState(null);
  const [syrupValue, setSyrupValue] = useState(null);
  const [milkValue, setMilkValue] = useState(null);
  const [customValue, setCustomValue] = useState(null);
  const renderForm = () => {
    switch (activeForm) {
      case 'decaf':
        return (
          <form>
            <label>
              <input type="radio" name="decaf" value="Caffeinated" checked={decafValue === 'Caffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Caffeinated</text>
          </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="Decaffeinated" checked={decafValue === 'Decaffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Decaffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="HalfCaffeinated" checked={decafValue === 'HalfCaffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Half Caffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="QuarterCaffeinated" checked={decafValue === 'QuarterCaffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Quarter Caffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="ThreeQuartersCaffeinated" checked={decafValue === 'ThreeQuartersCaffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Three Quarters Caffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="OneThirdCaffeinated" checked={decafValue === 'OneThirdCaffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>One Third Caffeinated</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="decaf" value="TwoThirdsCaffeinated" checked={decafValue === 'TwoThirdsCaffeinated'} onChange={(e) => setDecafValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Two Thirds Caffeinated</text>
            </label>
          </form>
        );
      case 'shots':
        // render form for shots
        return (
        <form>
            <label>
              <input type="radio" name="shots" value="StandardRecipeShot" checked={shotsValue === 'StandardRecipeShot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Standard Recipe</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="SoloShot" checked={shotsValue === 'SoloShot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Solo Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="DoubleShot" checked={shotsValue === 'DoubleShot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Double Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="TripleShot" checked={shotsValue === 'TripleShot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Triple Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="QuadShot" checked={shotsValue === 'QuadShot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Quad Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="FiveShot" checked={shotsValue === 'FiveShot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Five Shot</text>
            </label>
            <br/>
            <label>
              <input type="radio" name="shots" value="SixShot" checked={shotsValue === 'SixShot'} onChange={(e) => setShotsValue(e.target.value)} />
              <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Six Shot</text>
            </label>
          </form>
        );
        break;
      case 'syrup':
        // render form for syrup
        return (
          <form>
              <label>
                <input type="radio" name="syrup" value="StandardRecipeSyrup" checked={syrupValue === 'StandardRecipeSyrup'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>No Syrup / Standard Recipe</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Vanilla" checked={syrupValue === 'Vanilla'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Vanilla</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="SugarFreeVanilla" checked={syrupValue === 'SugarFreeVanilla'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Sugar Free Vanilla</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Caramel" checked={syrupValue === 'Caramel'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Caramel</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Raspberry" checked={syrupValue === 'Raspberry'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Raspberry</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Classic" checked={syrupValue === 'Classic'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Classic</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="ToffeNut" checked={syrupValue === 'ToffeNut'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Toffe Nut</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Coconut" checked={syrupValue === 'Coconut'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Coconut</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Mocha" checked={syrupValue === 'Mocha'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Mocha</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="WhiteMocha" checked={syrupValue === 'WhiteMocha'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>White Mocha</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="CaramelSauce" checked={syrupValue === 'CaramelSauce'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Caramel Sauce</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Chai" checked={syrupValue === 'Chai'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Chai</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="ItabercoBlueberry" checked={syrupValue === 'ItabercoBlueberry'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Itaberco Blueberry</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="ItabercoMango" checked={syrupValue === 'ItabercoMango'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Itaberco Mango</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="ItabercoPomegranate" checked={syrupValue === 'ItabercoPomegranate'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Itaberco Pomegranate</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="ItabercoSeasonal" checked={syrupValue === 'ItabercoSeasonal'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Itaberco Seasonal</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Sweetened" checked={syrupValue === 'Sweetened'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Sweetened</text>
              </label>
              <br/>
              <label>
                <input type="radio" name="syrup" value="Unsweetened" checked={syrupValue === 'Unsweetened'} onChange={(e) => setSyrupValue(e.target.value)} />
                <text style = {{fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif'}}>Unsweetened</text>
              </label>
              <br/>
            </form>
          );
        break;
      case 'milk':
        // render form for milk
        return (
          <form>
            <label>
              <input type="radio" name="milk" value="StandardRecipeMilk" checked={milkValue === 'StandardRecipeMilk'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Standard Recipe</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="TwoPercent" checked={milkValue === 'TwoPercent'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Two Percent</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="NonFat" checked={milkValue === 'NonFat'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Nonfat (Skim)</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="Whole" checked={milkValue === 'Whole'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Whole</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="OnePercent" checked={milkValue === 'OnePercent'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>One Percent</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="Soy" checked={milkValue === 'Soy'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Soy</text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="HalfHalf" checked={milkValue === 'HalfHalf'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Half and Half (Breve) </text>
            </label>
            <br />
            <label>
              <input type="radio" name="milk" value="Water" checked={milkValue === 'Water'} onChange={(e) => setMilkValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Water </text>
            </label>
            <br />
          </form>
        );
        break;
      case 'custom':
        // render custom form
        return (
          <form>
            <label>
              <input type="radio" name="custom" value="StandardRecipeCustom" checked={customValue === 'StandardRecipeCustom'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Standard Recipe</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="No Foam" checked={customValue === 'No Foam'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Foam</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Foam" checked={customValue === 'Add Foam'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Foam</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="No Whip" checked={customValue === 'No Whip'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Whip</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Whip" checked={customValue === 'Add Whip'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Whip</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="With Room" checked={customValue === 'With Room'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>With Room</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="No Room" checked={customValue === 'No Room'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Room</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Extra Ice" checked={customValue === 'Extra Ice'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Extra Ice</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Light Ice" checked={customValue === 'Light Ice'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Light Ice</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="No Ice" checked={customValue === 'No Ice'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Ice</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Water" checked={customValue === 'Add Water'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Water</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="No Water" checked={customValue === 'No Water'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Water</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Caramel Sauce on Top" checked={customValue === 'Caramel Sauce on Top'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Caramel Sauce on Top</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Caramel Sauce on Bottom" checked={customValue === 'Caramel Sauce on Bottom'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Caramel Sauce on Bottom</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="No Caramel Sauce" checked={customValue === 'No Caramel Sauce'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Caramel Sauce</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Chocolate Sauce on Top" checked={customValue === 'Chocolate Sauce on Top'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Chocolate Sauce on Top</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Chocolate Sauce on Bottom" checked={customValue === 'Chocolate Sauce on Bottom'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Chocolate Sauce on Bottom</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="No Chocolate Sauce" checked={customValue === 'No Chocolate Sauce'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>No Chocolate Sauce</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Nutmeg on Top" checked={customValue === 'Add Nutmeg on Top'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Nutmeg on Top</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Cinnamon on Top" checked={customValue === 'Add Cinnamon on Top'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Cinnamon on Top</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Sugar" checked={customValue === 'Add Sugar'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Sugar</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Splenda" checked={customValue === 'Add Splenda'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Splenda</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Equal" checked={customValue === 'Add Equal'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Equal</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Sweet and Low" checked={customValue === 'Add Sweet and Low'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Sweet and Low</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Sugar in the Raw" checked={customValue === 'Add Sugar in the Raw'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Sugar in the Raw</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Extra Hot" checked={customValue === 'Extra Hot'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Extra Hot</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Custom Temperature" checked={customValue === 'Custom Temperature'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Custom Temperature</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Double Blend" checked={customValue === 'Double Blend'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Double Blend</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Itaberco Energy" checked={customValue === 'Add Itaberco Energy'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Itaberco Energy</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Itaberco Matcha" checked={customValue === 'Add Itaberco Matcha'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Itaberco Matcha</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Itaberco Protein" checked={customValue === 'Add Itaberco Protein'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Itaberco Protein</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Honey" checked={customValue === 'Add Honey'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Honey</text>
            </label>
            <br />
            <label>
              <input type="radio" name="custom" value="Add Agave Syrup" checked={customValue === 'Add Agave Syrup'} onChange={(e) => setCustomValue(e.target.value)} />
              <text style={{ fontSize: '20px', fontFamily: 'Helvetica Neue, sans-serif' }}>Add Agave Syrup</text>
            </label>
            <br />
          </form>
        );
        break;
      default:
        return null; // no form selected
    }
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
    document.body.style.overflow = 'auto';
  };

  

  return (
    <>
      <div style={{marginTop: '20px'}}>
        <text style={{marginLeft: '125px', fontFamily: 'Helvetica Neue, sans-serif', fontSize: '15px'}}>Menu / {menuText}</text>
      </div>
      <TopDiv>
        <img src={imgSrc} style={{ width: '1200px'}}/>
      </TopDiv>
      <CustomizationDiv>
        <SizesDiv>
          <SizesOptionsDiv>
            <SizesText>Size options</SizesText>
            <div style={{position: 'relative'}}>
            <img src={sizeImage} style={{ position: 'absolute', marginTop: '10px', marginLeft: '50px', marginRight: '50px', width: '70%', zIndex: '0'}} />
              <div style={{marginLeft: '42px' }}>
                <SizeButton onClick={() => handleSizeButtonClick('short')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('tall')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('grande')}></SizeButton>
                <SizeButton onClick={() => handleSizeButtonClick('venti')}></SizeButton>
              </div>
            </div>
          </SizesOptionsDiv>
        </SizesDiv>
        <OptionsDiv>
          <OptionsCustomDiv>
            <CustomText>Customizations</CustomText>
              <div >
                
                <button onClick={() => handleButtonClick('decaf')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '60px 0 30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Decaf</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={() => handleButtonClick('shots')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Shots</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={() => handleButtonClick('syrup')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Syrup</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={() => handleButtonClick('milk')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Milk</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
                <button onClick={() => handleButtonClick('custom')} style={{ cursor: 'pointer', justifyContent: 'space-between', display: 'flex', margin: '30px 0', width: '410px', height: '50px', borderRadius: '10px', background: 'white'}}>
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Custom</span> 
                  <span style={{ margin: 'auto 10px', fontSize: '18px', fontFamily: 'Helvetica Neue, sans-serif'}}>Edit</span> 
                </button>
              </div>
          </OptionsCustomDiv>
        </OptionsDiv>
        <Overlay showOverlay={showOverlay}>
          <CloseButton onClick={handleCloseClick}>
            <div className="leftright"></div>
            <div className="rightleft"></div>
            <labelClose className="close">close</labelClose>
          </CloseButton>
          <selectionDiv style={{display: 'flex', flexFlow: 'column' , backgroundColor: 'white', height: '900px', width: '500px', margin: 'auto'}} >
            <customOrderText style={{fontSize: '32px', fontFamily: 'Helvetica Neue, sans-serif', fontWeight: 'bold'}}>{customTypeText}</customOrderText>
            <div  style={{marginTop: '100px'}}>
            {renderForm()}
            </div>
          </selectionDiv>
          <DoneButton
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '30px',
            border: 'none', 
            background: '#00754a',
            color: 'white',
            cursor: 'pointer',
            height: '50px',
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            padding: '10px 20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
          }}
           onClick={handleCloseClick}>Done</DoneButton>
        </Overlay>
      </CustomizationDiv>
      <InfoDiv>
        <div style={{height:"80px", width: '80px', marginRight: '100px'}}>
          <img src={require('../images/logo.png')} style={{ width: '80px'}}/>   
        </div>
        <div>
          <text style={{ color: 'white', fontSize: '18px', textAlign: 'center' }}> {descriptionText} </text>
        </div>
      </InfoDiv>
      <EndDiv >
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            width: '1200px',
            height: '300px',
            border: 'none', 
            background: 'white'}}>
          <div style={{
            display: 'flex',
            width: '1200px',
            height: '200px',
            border: 'none', 
            background: 'blue'}} >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                height: '200px',
                border: 'none', 
                background: 'white'}}> 
                  <a style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '25px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }}>About Us</a>
                  <a style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif'}} onClick={() => alert('Our Company pop-up window')}>Our Company</a>
                  <a style={{ cursor: 'pointer', fontSize: '20px', marginBottom: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }} onClick={() => alert('Our Coffee pop-up window')}>Our Coffee</a>
                  <a style={{ cursor: 'pointer', fontSize: '20px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }} onClick={() => alert('Contact pop-up window')}>Contact</a>
                </div>
              <div style={{
                display: 'flex',
                flexFlow: 'column',
                width: '50%',
                height: '200px',
                border: 'none', 
                background: 'white',

                }}> 
                <a style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '25px', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif' }}>Social Media</a>
                <div style={{ width: '100%',
                height: '100px', background: 'white'}} >
                  <a href="https://open.spotify.com/user/starbucks"><img src={require('../images/spotify.png')} alt="Image 1"></img></a>
                  <a href="https://www.facebook.com/Starbucks/"><img src={require('../images/fb.png')} alt="Image 2"></img></a>
                  <a href="https://www.pinterest.com/starbucks/"><img src={require('../images/pinterest.png')}></img></a>
                  <a href="https://www.instagram.com/starbucks/"><img src={require('../images/insta.png')} alt="Image 4"></img></a>
                  <a href="https://www.youtube.com/starbucks"><img src={require('../images/youtube.png')} alt="Image 5"></img></a>
                  <a href="https://twitter.com/starbucks/"><img src={require('../images/twitter.png')} alt="Image 6"></img></a>
                </div>
              </div>
              
            </div>
            <div style={{
                display: 'flex',
                flexFlow: 'column',
                width: '100%',
                height: '200px',
                border: 'none', 
                background: 'white',

                }}>
                  <div style={{marginBottom: '25px'}} >
                    <a style={{marginRight: '15px', textDecoration: 'none', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif'}} href="#">Privacy Notice</a>
                    <text> | </text>
                    <a style={{marginLeft: '15px', textDecoration: 'none', fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif'}} href="#">Terms of Use</a>
                  </div>
                  <div>
                    <text style = {{fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif'}}>© 2023 Starbucks Coffee Company. All rights reserved.</text>
                  </div>
                  
              </div>
        </div>
      </EndDiv>
      <BottomDiv>
        <button 
          style={{ 
            border: 'none', 
            background: '#00754a',
            color: 'white',
            cursor: 'pointer', 
            fontFamily: 'SoDoSans,Helvetica Neue,Helvetica,Arial,sans-serif', 
            fontWeight: 'bold', 
            fontSize: '16px',
            borderRadius: '50px',
            padding: '10px 20px',
            marginRight: '400px',
          }}>
          Add to Order
        </button>
        <BottomButton />
      </BottomDiv>
    </>
  );
};

const TopDiv = styled.div`
  height: 330px;
  width: 100%;
  background-color: #1e3932;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoDiv = styled.div`
  height: 230px;
  width: 100%;
  background-color: #1e3932;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EndDiv = styled.div`
  height: 430px;
  width: 100%;
  background-color: white;
  margin: auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const BottomDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #1e3932;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 50px; // add padding to the right to create the 50px margin
`;

const ButtonImg = styled.img`
  height: 50px;
  width: 50px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: black;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 250px;
`;

const CustomizationDiv  = styled.div`
  height: 520px;
  width: 100%;
  background-color: pink;
  display: flex;
`;

const SizesDiv = styled.div`
  height: 520px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionsDiv  = styled.div`
  height: 520px;
  width: 50%;
  background-color: white;
  display: flex;
  align-items: center;
`;

const SizesOptionsDiv  = styled.div`
  margin-top: 30px;
  height: 520px;
  width: 60%;
  background-color: white;
`;

const OptionsCustomDiv  = styled.div`
  margin-top: 30px;
  height: 520px;
  width: 60%;
  background-color: white;
  margin-left: 30px;
`;

const SizesText = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px; /* add margin-bottom to move the line further down */
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #d4e9e2;
  }
`;

const CustomText = styled.h2`
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px; /* add margin-bottom to move the line further down */
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #d4e9e2;
  }
`;

const SizeButton = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: inline-block;
  padding: 0px;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  z-index: 1;
  margin-left: 26px;
  margin-top: 28px;
  
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 52%;
  background-color: white;
  z-index: 999;
  transition: transform 0.3s ease-out;
  transform: ${({ showOverlay }) =>
    showOverlay ? 'translateX(0)' : 'translateX(100%)'};
    overflow-y: auto;
  
    label {
      display: flex;
      align-items: center;
      justify-content: space-between; /* this will push the radio input to the right */
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 10px;
      border: 2px solid black;
      height: 40px;
      cursor: pointer;
    }
    form input[type="radio"] {
      order: 2; /* this will move the radio input to the end of the flex container */
    }

    form input[type="radio"]::before {
      content: "";
      display: inline-block;
      width: 15px;
      height: 15px;
      margin-right: 10px;
      margin-left: -5px;
      margin-top: -5px;
      border-radius: 100%;
      border: 2.5px solid #00754a;
      background-color: white;
    }
    
    form input[type="radio"]:checked::before {
      background-color: #00754a; 
    }
`;

const CloseButton = styled.div`
  position: relative;
  margin: auto;
  width: 30px;
  height: 30px;
  margin-top: 30px;
  margin-right: 50px;
  cursor: pointer;

  .leftright {
    height: 4px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: #00754a;
    border-radius: 2px;
    transform: rotate(45deg);
    transition: all .3s ease-in;
  }

  .rightleft {
    height: 4px;
    width: 30px;
    position: absolute;
    margin-top: 24px;
    background-color: #00754a;
    border-radius: 2px;
    transform: rotate(-45deg);
    transition: all .3s ease-in;
  }

  .close {
    color: black;
    font-family: Helvetica, Arial, sans-serif; 
    font-size: .6em;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all .3s ease-in;
    opacity: 0;
    margin: 50px 0 0px -2.5px;
    position: absolute;
  }

  &:hover .leftright {
    transform: rotate(-45deg);
    background-color: #1e3932;
  }

  &:hover .rightleft {
    transform: rotate(45deg);
    background-color: #1e3932;
  }

  &:hover .close {
    opacity: 1;
  }
`;

const DoneButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export default Product;
