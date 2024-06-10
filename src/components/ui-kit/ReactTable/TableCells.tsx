import { FC, useState } from "react";
import { DateTime } from "luxon";
import {
  AmountCellProps,
  AnyUserCellProps,
  DateTableCellProps,
  HiddenDataTableCellProps,
} from "./TableCells.interface";
import styled from "styled-components";
import { Avatar } from "../avatar/Avatar";
import { AvatarSizeVariant } from "../avatar/Avatar.interface";
import { Typography } from "../typography/Typography";
import { TypographyVariant } from "../typography/Typography.interface";
import { Button, ButtonVariant } from "../button";

export const DateTableCell: FC<DateTableCellProps> = ({
  date,
  format = "f",
  className,
}) => {
  const localized = date ? DateTime.fromISO(date).toFormat(format) : "-";

  return <div className={className}>{localized}</div>;
};

const CreatedByWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TypographyWrapper = styled(Typography)`
  margin-left: 10px;
`;
const Clickable = styled.div`
  display: flex;
`;

// export const CreateEntityTableCell: FC<CreateEntityTableCellProps> = ({
//   createdByEntity,
//   createdBy,
//   className,
// }) => {
//   if (!createdBy) return null;
//   if (createdByEntity === CreateEntities.USER) {
//     return (
//       <CreatedByWrapper className={className}>
//         <Avatar
//           disableDropdown
//           size={AvatarSizeVariant.SMALL}
//           avatarSrc={"avatar" in createdBy ? createdBy.avatar?.url : undefined}
//         />
//         <TypographyWrapper variant={TypographyVariant.BODY2}>
//           {"firstName" in createdBy ? createdBy.firstName : ""}{" "}
//           {"lastName" in createdBy ? createdBy.lastName : ""}
//         </TypographyWrapper>
//       </CreatedByWrapper>
//     );
//   } else if (createdByEntity === CreateEntities.EXTERNAL_INTEGRATION) {
//     return (
//       <CreatedByWrapper className={className}>
//         <TypographyWrapper variant={TypographyVariant.BODY2}>
//           {"name" in createdBy ? createdBy.name : ""}{" "}
//         </TypographyWrapper>
//       </CreatedByWrapper>
//     );
//   } else if (createdByEntity === CreateEntities.SYSTEM) {
//     return (
//       <CreatedByWrapper className={className}>
//         <TypographyWrapper variant={TypographyVariant.BODY2}>
//           {"name" in createdBy ? createdBy.name : ""}{" "}
//         </TypographyWrapper>
//       </CreatedByWrapper>
//     );
//   } else {
//     return (
//       <CreatedByWrapper className={className}>
//         <TypographyWrapper variant={TypographyVariant.BODY2}>
//           {"name" in createdBy ? createdBy.name : ""}{" "}
//         </TypographyWrapper>
//       </CreatedByWrapper>
//     );
//   }
// };

export const HiddenDataTableCell: FC<HiddenDataTableCellProps> = ({ data }) => {
  const [show, setShow] = useState(false);

  const onShow = () => {
    setShow(!show);
  };

  return show ? (
    <Clickable onClick={onShow}>{data}</Clickable>
  ) : (
    <Button variant={ButtonVariant.OUTLINED} onClick={onShow}>
      Show
    </Button>
  );
};

const MemberContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

const Box = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
`;

export const AnyUserCell: FC<AnyUserCellProps> = ({
  username,
  name,
  avatarUrl,
  className,
}) => {
  return (
    <MemberContainer className={className}>
      <Avatar
        avatarSrc={avatarUrl}
        size={AvatarSizeVariant.MEDIUM}
        disableDropdown
      />
      <Box>
        <Typography variant={TypographyVariant.BODY4}>{name}</Typography>
        <Typography variant={TypographyVariant.BODY7} color="#8181a5">
          {username}
        </Typography>
      </Box>
    </MemberContainer>
  );
};

export const AmountCell: FC<AmountCellProps> = ({ amount, direction }) => {
  return (
    <Typography
      color={direction === "incoming" ? "#00bc82" : "#ef6355"}
      variant={TypographyVariant.BODY4}
    >
      {direction === "outgoing" ? `-${amount}` : amount}
    </Typography>
  );
};
