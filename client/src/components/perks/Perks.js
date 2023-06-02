export default function Perks({ value, setPerks }) {
  return (
    <>
      <input
        type="checkbox"
        className="mx-2"
        value={value}
        onChange={(e) => setPerks(e.target.checked)}
      />
      <span>Wifi</span>
      <input
        type="checkbox"
        className="mx-2"
        value={value}
        onChange={(e) => setPerks(e.target.checked)}
      />
      <span>Free parking spot</span>
      <input
        type="checkbox"
        className="mx-2"
        value={value}
        onChange={(e) => setPerks(e.target.checked)}
      />
      <span>TV</span>
      <input
        type="checkbox"
        className="mx-2"
        value={value}
        onChange={(e) => setPerks(e.target.checked)}
      />
      <span>Radio</span>
      <input
        type="checkbox"
        className="mx-2"
        value={value}
        onChange={(e) => setPerks(e.target.checked)}
      />
      <span>Pets</span>
      <input
        type="checkbox"
        className="mx-2"
        value={value}
        onChange={(e) => setPerks(e.target.checked)}
      />
      <span>Private entrance</span>
    </>
  );
}
