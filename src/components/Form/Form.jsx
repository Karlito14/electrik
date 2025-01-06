import { useState } from 'react';
import style from './style.module.scss';
import { InputField } from '@components/InputField/InputField';
import { SelectField } from '@components/SelectField/SelectField';
import { TextAreaField } from '@components/TextAreaField/TextAreaField';

export const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    if (value) {
      const newValue = value[0].toUpperCase() + value.slice(1);
      setFormValues((prevState) => ({ ...prevState, [name]: newValue }));
    } else {
      setFormValues((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      window.confirm(
        'Message recu, nous vous contacterons incessament sous peu'
      );
    }
  };

  const validateForm = () => {
    const requiredFields = [
      { field: 'name', message: 'Le nom est obligatoire' },
      { field: 'phone', message: 'Le numéro de téléphone est obligatoire' },
      { field: 'email', message: "L'email est obligatoire" },
      { field: 'subject', message: 'Choisir un sujet' },
      { field: 'message', message: 'Veuillez nous expliquer votre problème' },
    ];

    const newErrors = requiredFields.reduce((errors, { field, message }) => {
      if (!formValues[field]) {
        errors[field] = message;
      }
      return errors;
    }, {});

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  console.log(formValues);
  console.log(errors);

  return (
    <form className={style.form} id="contact">
      <h2 className={style.title}>Nous contacter</h2>
      <InputField
        label={'Nom'}
        id={'name'}
        value={formValues.name}
        onChange={(value) => handleChange('name', value)}
        error={errors.name}
      />
      <InputField
        label={'Téléphone'}
        type={'tel'}
        id={'phone'}
        value={formValues.phone}
        onChange={(value) => handleChange('phone', value)}
        error={errors.phone}
      />
      <InputField
        label={'Email'}
        type={'mail'}
        id={'email'}
        value={formValues.email}
        onChange={(value) => handleChange('email', value)}
        error={errors.email}
      />
      <SelectField
        label={'Sujet'}
        id={'subject'}
        value={formValues.subject}
        onChange={(value) => handleChange('subject', value)}
        error={errors.subject}
      />
      <TextAreaField
        label={'Message'}
        id={'message'}
        value={formValues.message}
        onChange={(value) => handleChange('message', value)}
        error={errors.message}
      />
      <button className={style.button} onClick={handleSubmit}>
        Envoyer
      </button>
    </form>
  );
};
