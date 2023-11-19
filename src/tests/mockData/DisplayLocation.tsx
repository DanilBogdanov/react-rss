import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function DisplayLocation(): JSX.Element {
  const [param] = useSearchParams();
  const [page, setPage] = useState<string>();
  useEffect(() => setPage(param.get('page') ?? '1'), [param]);

  return (
    <div>
      <div> param: {param.get('page')}</div>
      <div data-testid='current-page'>{page}</div>
    </div>
  );
}
