import './index.css';

export default function TextInput(props) {
    const { label, type, name, value, onChange, error } = props;

    return(
        <div className="text-input-container">
            <div className="text-input">
                <div className="label">{label}</div>
                <input type={type || 'text'} name={name} value={value} onChange={(e) => onChange(e.target.value)} /> 
            </div>
            {error && <div className="error">{error}</div>}
        </div>
    )
}