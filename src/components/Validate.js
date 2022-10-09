
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
        } else if (values.name.length >= 24) {
          errors.name = 'Must be less than 25 characters';
        }

        if (!values.day) {
          errors.day = 'Day cannot be blank';
        } 
        else if (values.day < 1 || values.day > 31) {
          errors.day = 'Day of birth is incorrect';
        }

        if (!values.month) {
          errors.month = 'Month cannot be blank';
        } 

        if (!values.year) {
          errors.year = 'Year cannot be blank';
        } 
        else if (values.year < 1980 || values.year > 2022) {
          errors.year = 'Year of birth is incorrect';
        }
      
     
      
      
        return errors;
}

export default Validate
