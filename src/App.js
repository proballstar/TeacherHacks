import "./styles.css";
import { ChatEngine } from "react-chat-engine";
import "./styles.css";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";
import React from "react";

export default function App() {
  React.useEffect(() => {
    return (
      <ChatEngine
        height="100vh"
        projectID="12046f51-60e7-4623-8297-a8180e0e28fb"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => {
          return <ChatFeed {...chatAppProps} />;
        }}
      />
    );
  }, [localStorage.getItem("item")]);

  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="12046f51-60e7-4623-8297-a8180e0e28fb"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => {
        return <ChatFeed {...chatAppProps} />;
      }}
    />
  );
}
