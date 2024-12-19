import React, { useState } from "react";
import "./App.css";

const Header = () => (
  <header>
    <h2>Єрмаков Богдан Романович</h2>
    <p>Народився 7 вересня 2005 року в місті Сімферополь, Крим.</p>
    <p>
      Вчився в гімназії #10 в Сімферополі, в 2018 перейшов до Чорнобаївської
      гімназії (смт. Чорнобай, Черкаська обл.) і там закінчив 11 клас. Зараз
      навчаюсь в КПІ.
    </p>
  </header>
);

const Image = ({ src, alt, width, onRemove }) => (
  <div style={{ display: "inline-block", margin: "10px", textAlign: "center" }}>
    <img src={src} alt={alt} style={{ width, height: "auto" }} />
    <br />
    <button onClick={onRemove} style={{ marginTop: "5px" }}>
      Видалити
    </button>
  </div>
);

const Content = () => {
  const [images, setImages] = useState([]);

  const addImage = () => {
    setImages([
      ...images,
      {
        id: Date.now(),
        src: "https://34travel.me/media/upload/images/2018/fabruary/kiev-sverhu/7c632743-9a05-4f4a-8056-7c99a3719dbf.jpg",
        width: "25%",
      },
    ]);
  };

  const increaseImageSize = () => {
    setImages(
      images.map((img, index) =>
        index === images.length - 1
          ? { ...img, width: parseFloat(img.width) * 1.1 + "%" }
          : img
      )
    );
  };

  const decreaseImageSize = () => {
    setImages(
      images.map((img, index) =>
        index === images.length - 1
          ? { ...img, width: parseFloat(img.width) / 1.1 + "%" }
          : img
      )
    );
  };

  const removeLastImage = () => {
    setImages(images.slice(0, -1));
  };

  const removeImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <main>
      <h3>Київ — столиця та найбільше місто України</h3>
      <h3 id="item-4">Мої хобі</h3>
      <ul>
        <li id="item-5">Відеоедітинг</li>
        <li>Комп'ютерні ігри</li>
        <li>Їзда на велосипеді</li>
      </ul>

      <h3>Улюблені фільми та книги</h3>
      <ol>
        <li>Магічна битва</li>
        <li>Месники: Війна нескінченності</li>
        <li>Той, хто біжить по лезу</li>
      </ol>
      <p>
        Ки́їв — столиця та найбільше місто України. Розташований у середній течії
        Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний,
        транспортний, освітньо-науковий, історичний, культурний та духовний
        центр України.
      </p>

      <div>
        <button onClick={addImage}>Додати зображення</button>
        <button onClick={increaseImageSize}>Збільшити</button>
        <button onClick={decreaseImageSize}>Зменшити</button>
        <button onClick={removeLastImage}>Видалити останнє</button>
      </div>
      <div>
        {images.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            alt="Київ"
            width={img.width}
            onRemove={() => removeImage(img.id)}
          />
        ))}
      </div>

      {/* Добавлено секция с хобби, фильмами и книгами */}
    </main>
  );
};

const App = () => (
  <div>
    <Header />
    <Content />
  </div>
);

export default App;
