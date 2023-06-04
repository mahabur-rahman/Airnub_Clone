export default function Perks({ value, setPerks }) {
  const handleChecked = (ev) => {
    const { name, checked } = ev.target;

    if (checked) {
      setPerks([...value]);
    } else {
      setPerks([...value.filter((item) => item !== name)]);
    }
  };

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
