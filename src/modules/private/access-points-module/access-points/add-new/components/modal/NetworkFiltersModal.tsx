import styled from "styled-components";
import {
  Button,
  ButtonVariant,
  ModalHeader,
} from "../../../../../../../components/ui-kit";
import { useModalManager } from "../../../../../../../context/ModalManager";
// import { AdvancedSearch } from "../../../../../../../components/advanced-search/AdvancedSearch";
// import { networksSearchConfig } from "../../networks-search-config/SearchConfig";
import { useEffect, useState } from "react";
import { AccessPointsFilters } from "../../../access-points-list/hooks/useAccessPointsList";
// import { ChangeType } from "../../../../../../../components/advanced-search/AdvancedSearch.interface";

const Wrapper = styled.div``;

const Content = styled.div`
  padding: 0 20px 20px;
`;

const Buttons = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-end;
`;

const CancelButton = styled(Button)`
  margin-left: 10px;
`;

interface FilterModalProps {
  onFiltersChange: (val: Record<string, any>) => void;
  filterValues: Partial<AccessPointsFilters>;
}

const NetworksFilterModal: React.FunctionComponent<FilterModalProps> = ({
  onFiltersChange,
  filterValues,
}) => {
  const [filterInternalValues, setFilterInternalValues] =
    useState<Partial<AccessPointsFilters>>(filterValues);

  useEffect(() => {
    setFilterInternalValues(filterValues);
  }, [filterValues]);
  const { removeLastModal } = useModalManager();
  const handleClose = () => {
    setFilterInternalValues(filterValues);
    removeLastModal();
  };
  const handleApply = () => {
    onFiltersChange(filterInternalValues);
    handleClose();
  };
  return (
    <Wrapper>
      <ModalHeader title="Filter networks" handleClose={handleClose} />
      <Content>
        {/* <AdvancedSearch
          config={networksSearchConfig}
          onChange={setFilterInternalValues}
          changeType={ChangeType.ON_CHANGE}
          isLive
          defaultOpen
          withoutFilterButton
          restoredValues={filterInternalValues}
        /> */}

        <Buttons>
          <Button onClick={handleApply}>Apply</Button>
          <CancelButton
            onClick={removeLastModal}
            variant={ButtonVariant.OUTLINED}
          >
            Cancel
          </CancelButton>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

export default NetworksFilterModal;
