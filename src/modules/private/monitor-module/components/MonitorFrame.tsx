const MonitorFrame = () => {
  return (
    <iframe
      src={process.env.REACT_APP_MONITOR_URL}
      title="Monitor"
      style={{ border: "none", height: "500px" }}
    />
  );
};

export default MonitorFrame;
