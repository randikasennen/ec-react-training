import './index.css';

export default function TextInput(props) {
    const { label, name, value, onChange } = props;

    return(
        <div className="text-input">
          <div className="label">{label}</div>
          <input type="text" name={name} value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}