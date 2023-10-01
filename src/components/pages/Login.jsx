import { Formik, useField } from "formik";
import { Button, StyleSheet, TextInput, View } from "react-native";
import StyledText from "../styledText";
import StyledTextInput from "../StyledTextInput";
import { longinValidationSchema } from "../../validationSchemas/login";

const initialValues = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  form: {
    margin: 12,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5,
  },
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email";
  }

  console.log(errors);

  return errors;
};

const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
      validationSchema={longinValidationSchema}
    >
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Log in" />
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
