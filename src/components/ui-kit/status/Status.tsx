import { type FC } from "react";
import styled, { css } from "styled-components";
import { type IStatusProps } from "./Status.interface";

// Green statuses
const green = css`
  background: rgba(44, 209, 158, 0.17);
  color: #00bc82;
`;

// Red statuses
const red = css`
  background: rgba(239, 99, 85, 0.17);
  color: #ef6355;
`;

// Orange statuses
const orange = css`
  background: rgba(249, 160, 0, 0.17);
  color: #f9a000;
`;

// Grey statuses
const grey = css`
  background: #dbe3eb;
  color: #495b6c;
`;

// Blue statuses
const blue = css`
  background: rgba(56, 182, 255, 0.17);
  color: #027aff;
`;

const getStatus = (variant?: string) => {
  switch (variant?.toLowerCase()) {
    case "success":
    case "completed":
    case "paid":
    case "active":
    case "high":
    case "delivered":
    case "returned":
    case "redespatched_delivered":
    case "connected":
    case "verified":
    case "enabled":
    case "received":
    case "picked":
      return green;
    case "failed":
    case "chargeback":
    case "suspended":
    case "out_of_stock":
    case "delivery_failure":
    case "redespatched_delivery_failure":
    case "disconnected":
    case "order_returned_refunded":
    case "banned":
    case "refunded":
    case "rejected":
    case "aborted":
    case "missed":
    case "overdue":
    case "cancelled":
      return red;
    case "pending":
    case "refund":
    case "low":
    case "redespatched":
    case "order_refund_requested":
    case "awaiting":
    case "awaiting_picking":
    case "awaiting_despatch":
      return orange;
    case "draft":
    case "disabled":
      return grey;
    case "sent":
    case "send":
    case "pending_invitation":
    case "medium":
    case "awaiting_delivery":
    case "awaiting_payment":
    case "preparation":
    case "delivery_in_progress":
    case "return_in_progress":
    case "redespatched_delivery_in_progress":
    case "started":
    case "in_progress":
    case "partially_paid":
    case "awaiting_confirmation":
    case "partially_picked":
      return blue;
    default:
      return grey;
  }
};

const StatusContainer = styled.span<{
  status?: string;
}>`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  border-radius: 5px;
  padding: 6px 14px;
  margin: 0;
  white-space: nowrap;
  ${({ status }) => getStatus(status)}
`;

export const Status: FC<IStatusProps> = ({ status, className, children }) => {
  return (
    <StatusContainer className={className} status={status}>
      {status
        ? `${status[0].toUpperCase()}${status?.slice(1).replaceAll("_", " ")}`
        : "n/a"}
      {children}
    </StatusContainer>
  );
};
