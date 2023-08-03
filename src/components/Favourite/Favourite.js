/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

function Favourite(props) {
  function deleteFavourite(measure) {
    console.log(measure)
    props.setSavedMeasure(props.savedMeasure.filter((delMeasure) => delMeasure !== measure))
  }

  console.log(props.savedMeasure)

  return (
    <div className="favourite">
      <h2>saved</h2>
      <div>
        {props.savedMeasure.map((measure) => (
          <div>
            <p>{measure}</p>
            <button onClick={() => deleteFavourite(measure)}>x</button>
          </div>
        ))}
        <br />
      </div>
    </div>
  );
}

export default Favourite;
