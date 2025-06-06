import { useState } from 'react';
import styles from './RoomsSection.module.css';
import room from "../../source/pic/black.jpg";

function RoomsSection() {
  const [currentRoom, setCurrentRoom] = useState(0);

  const roomsData = [
    {
      mainImage: room,
      price: 6200,
      smallImages: [room, room]
    },
    {
      mainImage: room,
      price: 7500,
      smallImages: [room, room]
    },
  ];

  const handleRadioChange = (index) => {
    setCurrentRoom(index);
  };

  return (
    <section id="rooms" className={styles.roomsSection}>
      <h2 className={styles.sectionTitle}>Номера</h2>
      <div className={styles.galleryContainer}>
        <div className={styles.mainImageWrapper}>
          <img 
            src={roomsData[currentRoom].mainImage} 
            alt={`Номер ${currentRoom + 1}`} 
            className={styles.mainImage} 
          />
          <div className={styles.mainImage__price}>
            {roomsData[currentRoom].price} ₽
          </div>
        </div>
        {roomsData[currentRoom].smallImages.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`Номер ${currentRoom + 1} - Доп. фото ${index + 1}`} 
            className={styles.smallImage} 
          />
        ))}
      </div>
      <div className={styles.galleryControls}>
        {roomsData.map((_, index) => (
          <input 
            key={index}
            type="radio" 
            name="gallery" 
            id={`slide${index + 1}`} 
            checked={currentRoom === index}
            onChange={() => handleRadioChange(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default RoomsSection;