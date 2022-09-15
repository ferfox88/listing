import React from 'react';

export default function Item({ item }) {
  const {
    url,
    MainImage,
    title,
    currency_code,
    price,
    quantity,
    state
  } = item;

  let itemImage = MainImage && MainImage.url_570xN;
  let itemTitle = '';
  if (title && title.length > 50) {
    itemTitle = `${title.substring(0, 50)}...`;
  }  else if (title) { 
    itemTitle = title;
  }

  let itemPrice;
  if (currency_code === 'USD') {
    itemPrice = `$` + price;
  } else if (currency_code === 'EUR') {
    itemPrice = `€` + price;
  } else {
    itemPrice = price + currency_code;
  }

  let level;
  if (quantity <= 10) level = 'low';
  else if (quantity <= 20) level = 'medium';
  else level = 'high';

  if (state === "active") {
    return (
      <div className="item">
        <div className="item-image">
          <a href={url}>
            <img src={itemImage} alt="" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">
            {itemTitle}
          </p>
          <p className="item-price">{itemPrice}</p>
          <p className={`item-quantity level-${level}`}>
            {`${quantity} left`}
          </p>
        </div>
      </div>
    );
  }
}
