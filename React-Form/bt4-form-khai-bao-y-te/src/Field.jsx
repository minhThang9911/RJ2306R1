function Input({ formik, fieldName }) {
    return (
        <input
            name={fieldName}
            id={fieldName}
            value={formik.values[fieldName] || ""}
            onChange={formik.handleChange}
        />
    );
}

function Field({ formik, label, fieldName, inner, styleTag }) {
    let StyleTag = "span";
    if (typeof styleTag === "string") {
        StyleTag = styleTag;
    }
    return (
        <div
            className={`custom-input ${
                formik.errors[fieldName] ? "custom-input-error" : ""
            }`}>
            <label htmlFor={fieldName}>
                <StyleTag>{label}</StyleTag>
            </label>
            {inner || (
                <Input
                    formik={formik}
                    fieldName={fieldName}
                />
            )}
            <p className="error">{formik.errors[fieldName]}</p>
        </div>
    );
}

export default Field;
