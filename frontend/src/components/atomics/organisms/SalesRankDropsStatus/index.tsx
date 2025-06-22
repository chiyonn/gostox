import StatusTip from "@/components/atomics/atoms/StatusTip";

const SalesRankDropsStatus = ({ times }: { times: number }) => {
  const label = "ランキング下降回数(30日)"
  const value = times
  const status = times >= 25
  return (
    <StatusTip status={status} label={label} value={value} />
  );
};

export default SalesRankDropsStatus;

