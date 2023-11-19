export default function Loader() {
  return (
    <div data-testid='loader'>
      <h3>Loading ...</h3>
      <br />
      <img src='/spinner.svg' alt='spinner' height={200} />
    </div>
  );
}
