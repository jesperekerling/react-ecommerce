export const FormInput = ({ className, errorMsg, label, id, ...rest }) => {
    return (
      <div className={`form-group ${className} p-3 text-left`}>
        <label htmlFor={id} className="form-label py-2 font-semibold">{ label }</label>
        <input id={id} className="form-control" {...rest} />
        { errorMsg && <p className="invalid-input">{ errorMsg }</p>}
      </div>
    )
}