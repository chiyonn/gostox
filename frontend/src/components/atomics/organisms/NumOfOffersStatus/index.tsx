import StatusTip from "@/components/atomics/atoms/StatusTip";

const NumOfOffersStatus = ({ offers }: { offers: number }) => {
  const label = "出品者数"
  const value = offers
  const status = offers <= 5
  return (
    <StatusTip status={status} label={label} value={value} />
  );
};

export default NumOfOffersStatus;
