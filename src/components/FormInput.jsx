export const FormInput = ({ className, errorMsg, label, ...rest }) => {
    return (
      <div className={`form-group ${className} p-3 text-left`}>
        <label htmlFor="firstName" className="form-label py-2 font-semibold">{ label }</label>
        <input className="form-control" {...rest} />
        { errorMsg && <p className="invalid-input">{ errorMsg }</p>}
      </div>
    )
}