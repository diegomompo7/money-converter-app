/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Favourite(props) {
  function deleteFavourite(measure) {
    console.log(measure);
    props.setSavedMeasure(props.savedMeasure.filter((delMeasure) => delMeasure !== measure));
  }

  console.log(props.savedMeasure);

  return (
    <div className="favourite">
      <h2 className="favourite__title">saved</h2>
      <div className="favourite__list">
        {props.savedMeasure.map((measure) => (
          <div className="favourite__items">
            <p className="favourite__items--title">{measure}</p>
            <button className="favourite__items--delete" onClick={() => deleteFavourite(measure)}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.06584 1.99479C9.35874 1.7019 9.35874 1.22703 9.06584 0.934132C8.77295 0.641239 8.29808 0.641239 8.00518 0.934132L4.99999 3.93933L1.99479 0.934133C1.70189 0.64124 1.22702 0.641239 0.934126 0.934133C0.641233 1.22703 0.641233 1.7019 0.934126 1.99479L3.93932 4.99999L0.934117 8.0052C0.641224 8.29809 0.641224 8.77297 0.934117 9.06586C1.22701 9.35875 1.70188 9.35875 1.99478 9.06586L4.99999 6.06065L8.00519 9.06586C8.29809 9.35875 8.77296 9.35875 9.06585 9.06586C9.35875 8.77297 9.35875 8.29809 9.06585 8.0052L6.06065 4.99999L9.06584 1.99479Z" fill="#676767" />
              </svg>
            </button>
          </div>
        ))}
        <br />
      </div>
    </div>
  );
}

export default Favourite;
