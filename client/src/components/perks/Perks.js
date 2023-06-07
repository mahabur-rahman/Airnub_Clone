export default function Perks({ selected, onChange }) {
  function handleChecked(ev) {
    const { checked, name } = ev.target;
    if (checked) {
      onChange([...selected, name]);
    } else {
      onChange([...selected.filter((selectedName) => selectedName !== name)]);
    }
  }

  return (
    <>
      <input
        type="checkbox"
        className="mx-2"
        name="wifi"
        onChange={handleChecked}
      />
      <span>Wifi</span>

      <input
        type="checkbox"
        className="mx-2"
        name="parking"
        onChange={handleChecked}
      />
      <span>Free parking spot</span>

      <input
        type="checkbox"
        className="mx-2"
        name="tv"
        onChange={handleChecked}
      />
      <span>TV</span>

      <input
        type="checkbox"
        className="mx-2"
        name="radio"
        onChange={handleChecked}
      />
      <span>Radio</span>

      <input
        type="checkbox"
        className="mx-2"
        name="pets"
        onChange={handleChecked}
      />
      <span>Pets</span>

      <input
        type="checkbox"
        className="mx-2"
        name="entrance"
        onChange={handleChecked}
      />
      <span>Private entrance</span>
    </>
  );
}
