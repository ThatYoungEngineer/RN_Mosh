import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import ErrorText from '../components/ErrorText';
import Icon from 'react-native-vector-icons/AntDesign';
import {Formik} from 'formik';
import * as yup from 'yup';

const VALIDATION_SCHEMA = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('Email is required')
    .matches(
      /^[A-Za-z][A-Za-z0-9.]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      'Invalid Email Format',
    ),
  password: yup.string().trim().required('Password is required'),
});

const Login = () => {
  return (
    <Screen>
      <View
        style={{
          backgroundColor: '#f8f8f8',
        }}>
        <View
          style={{
            alignSelf: 'flex-start',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Text style={styles.headerText}>Login</Text>
          <Icon name="login" size={35} color="#6a6a6a" />
        </View>
      </View>
      <Formik
        initialValues={{email: '', password: '', rememberMe: false}}
        onSubmit={(values, {setSubmitting, resetForm}) => {
          console.log('Submitting: ', values);
          setSubmitting(false);
          resetForm();
        }}
        validationSchema={VALIDATION_SCHEMA}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          errors,
          touched,
          isValid,
          isSubmitting,
          dirty,
          values,
        }) => (
          <>
            {console.log('isValid: ', isValid)}
            {console.log('isSubmitting: ', isSubmitting)}
            {console.log('dirty: ', dirty)}
            <View style={{padding: 10, height: '100%'}}>
              <View style={{marginBottom: 10}}>
                <AppTextInput
                  icon="email"
                  placeholder="Enter email"
                  textContentType="emailAddress"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  autoCapitalize="none"
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <ErrorText message={errors.email} />
                )}
              </View>
              <View style={{marginBottom: 10}}>
                <AppTextInput
                  icon="key"
                  placeholder="Enter password"
                  password={true}
                  autoCapitalize="none"
                  autoCorrect={false}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <ErrorText message={errors.password} />
                )}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 10,
                }}>
                <Switch
                  value={values.rememberMe}
                  onValueChange={value => setFieldValue('rememberMe', value)}
                />
                <Text style={{marginLeft: 10}}>Remember Me?</Text>
              </View>
              <TouchableOpacity
                disabled={
                  isSubmitting == true || isValid == false || dirty == false
                }
                style={[
                  styles.loginBtn,
                  (isSubmitting || !isValid || !dirty) &&
                    styles.loginBtnDisabled,
                ]}
                onPress={handleSubmit}>
                <Text
                  style={{
                    color: '#04053a',
                    fontWeight: '300',
                    fontSize: 17,
                    fontFamily: 'Roboto',
                  }}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </Screen>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  loginBtn: {
    backgroundColor: '#a9f7b5',
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnDisabled: {
    opacity: 0.4,
  },
});
export default Login;
