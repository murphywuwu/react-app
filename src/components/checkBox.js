const Checkbox = ({ checked, label, handleClick }) => (
  <div
    className={checked ? 'Checkbox-container checked' : 'Checkbox-container'}
    onClick={handleClick}
    role="button"
    tabIndex={0}
    data-label={label}
  >
    <p className="label" data-label={label}>{label}</p>
  </div>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

Checkbox.defaultProps = {
  checked: true
}

