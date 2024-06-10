import styled from "styled-components";
import {
  Button,
  ButtonVariant,
  Typography,
  ModalHeader,
  DropZone,
} from "../../../../../../components/ui-kit";
import { useState } from "react";
import { CheckboxFormField } from "../../../../../../components/form-fields";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import api from "../../../../../../util/api";
import { DropZoneFileTypes } from "../../../../../../components/ui-kit/drop-zone/DropZone.interface";
import {
  NotificationTypes,
  useNotification,
} from "../../../../../../hooks/useNotification";
const Wrapper = styled.div`
  width: 650px;
`;

const Content = styled.div`
  padding: 30px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const CancelButton = styled(Button)`
  margin-right: 10px;
`;

interface ImportProductsModalProps {
  handleClose: () => void;
}

const StyledCheckBoxFormField = styled(CheckboxFormField)`
  margin-top: 15px;
`;

const StyledLink = styled(Link)`
  margin-top: 31px;
  text-decoration: underline;
  color: #027aff;
  &:visited {
    color: #027aff;
  }
`;

const DropZoneContainer = styled.div`
  margin: 20px 0px;
`;

const Banner = styled.div`
  padding: 15px;
  margin-bottom: 15px;

  background-color: rgba(239, 99, 85, 0.15);
  border-radius: 5px;
  border: 1px solid #ef6355;
  color: #556CB1;
  max-height: 250px;
  overflow-y: scroll;
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

interface FormValues {
  overrideExisting: boolean;
  publish: boolean;
}

export const ImportProductsModal: React.FunctionComponent<
  ImportProductsModalProps
> = ({ handleClose }) => {
  const { showNotification } = useNotification();
  const [file, setFile] = useState<File>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);
  // const [createdCount, setCreatedCount] = useState(0);
  const { handleSubmit, control } = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      publish: false,
      overrideExisting: true,
    },
  });

  const onSubmit = async (formValues: FormValues) => {
    setLoading(true);
    // try {
    if (file) {
      const result =  {} as any
      // await api.importProductsCSV(
      //   formValues.overrideExisting,
      //   formValues.publish,
      //   file
      // );
      if (result.responseError) {
        setError(result?.responseError?.error?.message);
      } else {
        showNotification(
          "Import scheduled successfully, you can leave this page",
          NotificationTypes.SUCCESS
        );
        handleClose();
      }
    }
    // } catch (e: any) {}
    setLoading(false);
  };
  return (
    <Wrapper>
      <ModalHeader title="Import products by CSV" handleClose={handleClose} />
      <Content>
        {error && (
          <Banner>
            There was as error importing your CSV file. After you fix the error,
            try importing the CSV file again:
            <ul>
              <li>{error}</li>
            </ul>
          </Banner>
        )}
        <Typography>
          Download{" "}
          <StyledLink
            to={
              "https://google.com/1.csv"
            }
          >
            sample CSV template
          </StyledLink>{" "}
          to see an example of format required
        </Typography>
        <DropZoneContainer style={{ margin: "20px 0px" }}>
          <DropZone setFile={setFile} fileType={DropZoneFileTypes.ONLY_CSV} />
        </DropZoneContainer>

        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledCheckBoxFormField
            label={
              <Typography style={{ marginTop: "20px" }}>
                Overwrite any current products that have the same handle.
                Existing values will be used for any missing columns.{" "}
                {/* <StyledLink to={""}>Learn more</StyledLink> */}
              </Typography>
            }
            name="overrideExisting"
            control={control}
          />
          <StyledCheckBoxFormField
            label="Synchronize products with all sales channels"
            name="publish"
            control={control}
          />
          <FormFooter>
            {/* tmp until guide is ready */}
            <div></div>
            {/* <StyledLink to={"mailto: support@kolo.kt.agh.edu.pl"}>
              Need help importing products?
            </StyledLink> */}
            <Buttons>
              <CancelButton
                variant={ButtonVariant.OUTLINED}
                onClick={handleClose}
              >
                Cancel
              </CancelButton>
              <Button
                disabled={!file}
                loading={loading}
                loadingText="Validating the CSV"
              >
                Upload and continue
              </Button>
            </Buttons>
          </FormFooter>
        </form>
      </Content>
    </Wrapper>
  );
};
