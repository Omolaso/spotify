
const Validate = (values) => {

      const errors = {};
        // if (!values.firstName) {
        //   errors.firstName = 'Required';
        // } else if (values.firstName.length > 15) {
        //   errors.firstName = 'Must be 15 characters or less';
        // }
      
        // if (!values.lastName) {
        //   errors.lastName = 'Required';
        // } else if (values.lastName.length > 20) {
        //   errors.lastName = 'Must be 20 characters or less';
        // }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        // else{
        //     errors.email = 'Good!';
        // }

        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length < 8) {
          errors.password = 'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters';
        }
      
        return errors;
}

export default Validate
