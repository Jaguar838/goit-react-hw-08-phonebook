import PropTypes from 'prop-types';
import css from './Filter.module.scss';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      <span className={css.labelText}>Find contacts by name</span>
      <input
        type="text"
        name="name"
        value={value}
        onChange={onChange}
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        className={css.input}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
