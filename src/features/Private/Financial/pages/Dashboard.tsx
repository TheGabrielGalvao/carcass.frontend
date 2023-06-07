import { CardElement } from "../../../../core/components/atoms";

export const Dashboard = () => {
  return (
    <div className="flex flex-col w-full max-h-screen gap-2 overflow-y-scroll">
      <div className="flex w-full gap-2 h-80">
        <CardElement className="" />
        <CardElement className="" />
      </div>
      <div className="flex w-full gap-2 h-40">
        <CardElement className="" />
        <CardElement className="" />
        <CardElement className="" />
        <CardElement className="" />
      </div>
      <div className="flex w-full gap-2 h-96">
        <CardElement className="" />
      </div>
    </div>
  );
};
