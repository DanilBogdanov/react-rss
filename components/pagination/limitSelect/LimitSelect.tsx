import { PageLimit } from '@/types/api';
import { useRouter } from 'next/router';
import styles from './limitSelect.module.css';

type LimitSelectProps = {
  url: string;
  currentLimit: number;
};

export default function LimitSelect({ url, currentLimit }: LimitSelectProps) {
  const router = useRouter();
  const limits = [PageLimit.L20, PageLimit.L40, PageLimit.L60];

  function onChangePerPage(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedLimit = e.target.value;
    router.push(`${url}&limit=${selectedLimit}`);
  }

  return (
    <select
      className={styles['limit-select']}
      onChange={onChangePerPage}
      value={currentLimit.toString()}
      data-testid='limit-select'
    >
      {limits.map((limit) => (
        <option key={limit} value={limit}>
          {limit}
        </option>
      ))}
    </select>
  );
}
