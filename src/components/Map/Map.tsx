import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./Map.module.scss";
import Location from "../../assets/icons/gps2 1.svg";
import Watch from "../../assets/icons/w512h5121390855838watch 1.svg";
import Phone from "../../assets/icons/phone копия 2.svg";
import CustomZoomControls from "./CustomZoomContols/CustomZoomControls";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Map: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div id="contacts" className={styles.map_container}>
      <MapContainer
        center={[42.821669, 74.626123]}
        zoom={16}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
        className={styles.map}
      >
        <TileLayer
          url="https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}"
          attribution="&copy; OpenStreetMap contributors"
        />

        <Marker position={[42.821669, 74.626123]}>
          <Popup>6-й микрорайон, 39</Popup>
        </Marker>

        <CustomZoomControls />
      </MapContainer>

      <div className={styles.contact_card}>
        <h3>Контакты</h3>
        <div className={styles.contacts}>
          <div className={styles.row}>
            <img src={Location} alt="Location" className={styles.icon} />
            <span>
              Ваш город: <a href="#">Бишкек</a>
            </span>
          </div>
          <div className={styles.row}>
            <img src={Watch} alt="Watch" className={styles.icon} />
            <div className={styles.column}>
              Время работы: <br />
              <span className={styles.working_time}>с 9:00 - 20:00</span>
            </div>
          </div>
          <div className={styles.row}>
            <img src={Phone} alt="Phone" className={styles.icon} />
            <span>0(501) 488 113</span>
          </div>
        </div>
        <button className={styles.button} onClick={() => setOpen(true)}>
          Вызвать мастера
        </button>
        {open && <Modal onClose={() => setOpen(false)} />}
      </div>
    </div>
  );
};

export default Map;
