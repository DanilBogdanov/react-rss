import { FormsData } from '@/types/forms/formData';
import styles from './tile.module.css';

type TileProps = {
  formData: FormsData;
  active: boolean;
};

export default function Tile({ formData, active }: TileProps) {
  return (
    <div className={active ? `${styles.tile} ${styles.active}` : styles.tile}>
      <img className={styles.img} src={formData.file} alt='img' />
      <div>
        <p>Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        <p>Email: {formData.email}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.pass}</p>
        <p>Gender: {formData.gender}</p>
        <p>Country: {formData.country}</p>
      </div>
    </div>
  );
}
