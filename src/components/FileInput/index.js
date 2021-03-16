import './index.css';

export default function FileInput(props) {
    const { label, name, onChange, error } = props;

    return(
        <div className="text-input-container">
            <div className="text-input">
                <div className="label">{label}</div>
                <input type="file" name={name} onChange={(e) => onChange(e.target.files[0])} /> 
            </div>
            {error && <div className="error">{error}</div>}
        </div>
    )
}