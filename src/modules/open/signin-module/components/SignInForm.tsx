import { Control } from "react-hook-form";
import { TextFormInput } from "../../../../components/form-fields";

interface SignInFormProps {
  control: Control<any>;
}

const SignInForm: React.FunctionComponent<SignInFormProps> = ({ control }) => {
  return (
    <>
      <TextFormInput
        control={control}
        name="username"
        label="Username"
        placeholder=""
        required
      />
      <TextFormInput
        control={control}
        name="password"
        label="Password"
        placeholder="at least 8 characters"
        type="password"
        required
      />
    </>
  );
};

export default SignInForm;
