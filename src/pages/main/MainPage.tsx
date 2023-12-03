import Tile from '@/components/tile/Tile';
import { useAppSelector } from '@/hooks/redux';
import styles from './main.module.css';

export default function MainPage(): JSX.Element {
  const { uncontrolledForms, reactHookForms, newForm } = useAppSelector(
    (state) => state.forms
  );

  return (
    <div>
      <div className={styles.tiles}>
        <div>
          <h2>React Hook Forms</h2>
          {reactHookForms.map((form, idx) => (
            <Tile
              key={form.email}
              active={idx === 0 && newForm === 'hook'}
              formData={form}
            />
          ))}
        </div>
        <div>
          <h2>Uncontrolled Forms</h2>
          {uncontrolledForms.map((form, idx) => (
            <Tile
              key={form.email}
              active={idx === 0 && newForm === 'ref'}
              formData={form}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
