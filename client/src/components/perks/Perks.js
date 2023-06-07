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
        checked={selected.includes("wifi")}
        onChange={handleChecked}
      />
      <span>Wifi</span>

      <input
        type="checkbox"
        className="mx-2"
        name="wifi"
        checked={selected.includes("wifi")}
        onChange={handleChecked}
      />
      <span>Free parking spot</span>

      <input
        type="checkbox"
        className="mx-2"
        name="tv"
        checked={selected.includes("tv")}
        onChange={handleChecked}
      />
      <span>TV</span>

      <input
        type="checkbox"
        className="mx-2"
        name="radio"
        checked={selected.includes("radio")}
        onChange={handleChecked}
      />
      <span>Radio</span>

      <input
        type="checkbox"
        className="mx-2"
        name="pets"
        checked={selected.includes("pets")}
        onChange={handleChecked}
      />
      <span>Pets</span>

      <input
        type="checkbox"
        className="mx-2"
        name="entrance"
        checked={selected.includes("entrance")}
        onChange={handleChecked}
      />
      <span>Private entrance</span>
    </>
  );
}
