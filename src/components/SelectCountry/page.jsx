export default function SelectCountry() {
  const redirect = (url) => {
    if (url === "Elige tu país") return;
    window.location.href = url;
  };

  return (
    <select
      value={"Elige tu país"}
      style={{ color: "white", appearance: "none" }}
      onChange={(e) => redirect(e.target.value)}
      id="countries"
      className="w-full text-xl py-2 px-5 cursor-pointer bg-[#000b7a] rounded-3xl "
    >
      <option className="cursor-pointer" disabled>
        Elige tu país
      </option>
      <option className="cursor-pointer" value="https://fyrlois.us">
        USA
      </option>
      <option className="cursor-pointer" value="https://fyrlois.com.ve">
        Venezuela
      </option>
    </select>
  );
}
