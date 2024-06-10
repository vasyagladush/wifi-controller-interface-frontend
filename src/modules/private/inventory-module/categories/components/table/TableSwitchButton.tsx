import { useEffect, useState } from "react";
import { SwitchButton } from "../../../../../../components/ui-kit";
import Api from "../../../../../../util/api";
import { Row } from "react-table";

interface TableSwitchButtonProps {
  value: boolean;
  row: Row<any>;
}

export const TableSwitchButton: React.FunctionComponent<
  TableSwitchButtonProps
> = ({ value, row }) => {
  const [isVisible, setIsVisible] = useState<boolean>(value);

  useEffect(() => {
    setIsVisible(value);
  }, [value, row]);

  const updateIsVisible = (id: string) => async (e: boolean) => {
    setIsVisible(e);
    await Api.updateCategory(
      {
        isVisibleInMenu: e,
      },
      id
    );
  };

  return (
    <SwitchButton
      checked={isVisible}
      onChange={updateIsVisible(row.original._id)}
    />
  );
};
