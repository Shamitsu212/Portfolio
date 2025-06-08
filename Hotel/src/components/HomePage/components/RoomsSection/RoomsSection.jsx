import { useState } from 'react';
import styles from './RoomsSection.module.css';
import room1_1 from "../../source/pic/room1_1.png";
import room1_2 from "../../source/pic/room1_2.png";
import room1_3 from "../../source/pic/room2_1.png";
import room2_1 from "../../source/pic/room2_1.png";
import room2_2 from "../../source/pic/room1_3.png";
import room2_3 from "../../source/pic/room2_2.png";


function RoomsSection() {
  const [currentRoom, setCurrentRoom] = useState(0);

  const roomsData = [
    {
      mainImage: room1_1,
      price: 1299,
      smallImages: [room1_2, room1_3]
    },
    {
      mainImage: room2_2,
      price: 1100,
      smallImages: [room2_1, room2_3]
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