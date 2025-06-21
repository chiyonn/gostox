import StatusTip from "@/components/atomics/atoms/StatusTip";

const OfferStatus = ({ offers }: { offers: number }) => {
  const label = "出品者数"
  const value = offers
  const status = offers > 5
  return (
    <StatusTip ok={status} label={label} value={value} />
  );
};

export default OfferStatus;
