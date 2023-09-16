import React, { useEffect, useCallback, useMemo } from "react";

import DrawContext from "../../context/draw-context";
import Drawing from "../Drawing/Drawing";
import { WiCloudRefresh } from "react-icons/wi";

import useFetchDrawings from "../../hooks/use-fetchDrawings";

import "./Drawings.css";

function Drawings() {
  const { drawings, setDrawings, apiUrl } = React.useContext(DrawContext);
  const url = useMemo(() => `${apiUrl}/drawings/`, [apiUrl]);

  const { sendRequest, isLoading, error } = useFetchDrawings();

  const requestFunc = useCallback(
    (json) => {
      setDrawings(json.drawings);
    },
    [setDrawings]
  );

  useEffect(() => {
    sendRequest(url, requestFunc);
  }, [sendRequest, url, requestFunc]);

  const loadDrawingsHandler = useCallback(async () => {
    sendRequest(url, requestFunc);
  }, [requestFunc, url, sendRequest]);

  return (
    <section className="drawings">
      <h2>Drawings</h2>
      <WiCloudRefresh
        className="drawings_refresh"
        onClick={loadDrawingsHandler}
      />

      {error && (
        <p className="error">Ошибка: не удалось получить данные с сервера</p>
      )}
      <div className="drawings-grid">
        {isLoading && <p>Загрузка...</p>}
        {drawings.map((drawing) => (
          <Drawing key={drawing.id} drawing={drawing} />
        ))}
      </div>
    </section>
  );
}

export default Drawings;
