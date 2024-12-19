import React from "react";
import GoodsCard from "./GoodsCard";

const GoodsGallery = () => {
  const goods = [
    {
      id: 1,
      image:
        "https://lavra.com/content/images/24/chernyy-shokolad-postnyy-podarochnyy-45117459114326_small11.jpg",
      title: "Темний шоколад",
      price: 100,
    },
    {
      id: 2,
      image: "https://images.prom.ua/658244836_w600_h600_658244836.jpg",
      title: "Тоблерон",
      price: 120,
    },
    {
      id: 3,
      image:
        "https://images.silpo.ua/products/1600x1600/a166cd8c-69fa-4cee-9b01-3d5b94920e77.png",
      title: "Мілка",
      price: 150,
    },
    {
      id: 4,
      image:
        "https://happypen-photos.s3.eu-north-1.amazonaws.com/188526/sokolad-lacmi-molocnii-90g-roshen0",
      title: "Рошенка",
      price: 180,
    },
    {
      id: 5,
      image:
        "https://millennium-trade.com/image/cache/catalog/Millennium_Gold_molochnyi-470x310.jpg",
      title: "Міленіум",
      price: 200,
    },
    {
      id: 6,
      image:
        "https://cc.kz/upload/iblock/475/ygfxwzwq3mvbj3jx2kwrjwwsalgqlbx8.jpg",
      title: "Кіткат",
      price: 250,
    },
  ];

  return (
    <div style={styles.gallery}>
      {goods.map((item) => (
        <GoodsCard
          key={item.id}
          image={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
};

const styles = {
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
  },
};

export default GoodsGallery;
