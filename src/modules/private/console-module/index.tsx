import React, { useState } from "react";
import styled from "styled-components";
import {
  PageTitle,
  DateFilterDropdown,
  FilterOption,
  Typography,
  TypographyVariant,
} from "../../../components/ui-kit";
import ReactConsole from "@webscopeio/react-console";
import { usePostConsole } from "./hooks/usePostConsole";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const ConsoleModule = () => {
  const [history, setHistory] = useState<Array<string>>([]);

  const addHistoryItem = (entry: string) => {
    setHistory(history.concat(entry));
  };

  const { postToConsole } = usePostConsole();

  return (
    <Container>
      <TopLine>
        <div style={{ flexDirection: "column", marginRight: "auto" }}>
          <PageTitle
            title="Console"
            subtitle={`Control the network directly via console.`}
          />
        </div>
      </TopLine>

      <Typography
        style={{ marginBottom: "20px" }}
        variant={TypographyVariant.BODY13_REGULAR}
      >
        Use 'clear' to clear the console.
      </Typography>

      <ReactConsole
        autoFocus
        welcomeMessage="Welcome to SKN Telephoners..."
        history={history}
        onAddHistoryItem={addHistoryItem}
        noCommandFound={async (...args: Array<string>) => {
          const res = await postToConsole(args);
          return res ?? "Unknown command";
        }}
        commands={{}}
      />
    </Container>
  );
};

export default ConsoleModule;
