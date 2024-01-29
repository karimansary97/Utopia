import {FC} from 'react';
import {StyleSheet} from 'react-native';
import Layout from '../../components/UIELements/Layout';
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import TextInputField from '../../components/UIELements/TextInputField';
import unit from '../../styles/unit';
import Button from '../../components/UIELements/Button';
import {useMutation} from '@tanstack/react-query';
import axios from 'axios';

type VisitorsProps = {};

const Visitors: FC<VisitorsProps> = () => {
  const {goBack} = useNavigation();

  const {...methods} = useForm();

  const {mutate, isPending} = useMutation({
    mutationFn: async () => axios.post('http://localhost:5001/predict_plate'),
    onSuccess: data => {
      console.log('🚀 ~ data:', data);
    },
    onError: err => {
      console.log('🚀 ~ err:', err);
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = dataSent => {
    mutate(dataSent);
  };

  return (
    <Layout HeaderVisablity>
      <FormProvider {...methods}>
        <TextInputField
          name="Address"
          placeholder="Enter your Address"
          maxLength={140}
          style={styles.textInputField}
          rules={{
            required: 'Please Enter Your Address ',
          }}
        />
        <TextInputField
          name="Visitor Name"
          placeholder="Enter your Visitor's Name"
          maxLength={140}
          rules={{
            required: 'Please Enter Your Visitor Name ',
          }}
          style={styles.textInputField}
        />
        <TextInputField
          name="Plate Number"
          placeholder="Enter your Plate Number"
          maxLength={140}
          rules={{
            required: 'Please Enter Your Plate Number ',
          }}
          style={styles.textInputField}
        />
        <TextInputField
          name="Date"
          placeholder="Enter your Date"
          maxLength={140}
          rules={{
            required: 'Please Enter Your Date ',
          }}
          style={styles.textInputField}
        />

        <Button
          text="Submit"
          loading={isPending}
          style={styles.logInButton}
          disabled={isPending}
          onPress={methods.handleSubmit(onSubmit)}
        />
      </FormProvider>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40 * unit,
    alignItems: 'center',
  },
  logInButton: {
    marginVertical: 49 * unit,
    alignSelf: 'center',
  },
  textInputField: {
    marginTop: 20 * unit,
  },
});

export default Visitors;
