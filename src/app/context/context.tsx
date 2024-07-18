import Spinner from "@/components/Spinner";
import React, { createContext, useEffect, useRef, useState } from "react";
import type { TelegramWebApps } from "telegram-webapps-types-new";

interface IProps {
  children: React.ReactNode;
}

type AppContext = {
  appRef: React.MutableRefObject<TelegramWebApps.WebApp>;
  ready: boolean;
};

export const webAppContext = createContext<AppContext>({
  appRef: { current: {} } as React.MutableRefObject<TelegramWebApps.WebApp>,
  ready: false,
});

export const WebAppProvider = ({ children }: IProps) => {
  const appRef = useRef<TelegramWebApps.WebApp>({} as TelegramWebApps.WebApp);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    appRef.current = window.Telegram.WebApp;
    const webApp = appRef.current;
    webApp.ready();
    webApp.expand();
    webApp.BackButton.show();
    const handleBackButtonClick = () => {
      // Logic to navigate to the previous page
      window.history.back();
    };
    // Add the event listener
    webApp.BackButton.onClick(handleBackButtonClick);
    setReady(true);
  }, []);

  return (
    <webAppContext.Provider value={{ appRef, ready }}>
      {ready ? children : <Spinner />}
    </webAppContext.Provider>
  );
};
