export default function InputField(props) {
  return (
    <input
      ref={props.value.inputRef}
      style={{ width: "100%" }}
      type="text"
      placeholder="Mention"
      onChange={(e) => props.value.onTextType(e.target.value)}
    />
  );
}
