
const Validate = (values) => {

      const errors = {};
      
        if (!values.email) {
          errors.email = 'Email can not be blank';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        // else{
        //     errors.email = 'Good!';
        // }

        if (!values.password) {
          errors.password = 'Password can not be blank';
        } else if (values.password.length < 8) {
          errors.password = 'Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters';
        }

        if (values.confirmPassword !== values.password) {
          errors.confirmPassword = 'Passwords must match';
        }

        if (!values.name) {
          errors.name = 'Name is required';
        } else if (values.name.length >= 15) {
          errors.lastName = 'Must be less than 15 characters';
        }

        // if (!values.firstName) {
        //   errors.firstName = 'Required';
        // } else if (values.firstName.length > 15) {
        //   errors.firstName = 'Must be 15 characters or less';
        // }
      
     
      
      
        return errors;
}

export default Validate
