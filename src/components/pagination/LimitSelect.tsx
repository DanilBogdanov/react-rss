import { useNavigate } from 'react-router-dom';

type LimitSelectProps = {
  url: URL;
  currentLimit: number;
};

export default function LimitSelect({ url, currentLimit }: LimitSelectProps) {
  const navigate = useNavigate();

  function getOptions() {
    const values = [20, 40, 60];
    return values.map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ));
  }

  function onChangePerPage(e: React.ChangeEvent<HTMLSelectElement>) {
    const limitUrl = new URL(url);
    limitUrl.searchParams.set('limit', e.target.value);
    limitUrl.searchParams.delete('page');
    navigate(`${limitUrl.pathname}${limitUrl.search}`);
  }

  return (
    <select
      className='pagination__select'
      onChange={onChangePerPage}
      value={currentLimit}
      data-testid='limit-select'
    >
      {getOptions()}
    </select>
  );
}
