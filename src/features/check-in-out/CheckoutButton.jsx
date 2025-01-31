import Button from "../../ui/Button";
import  useCheckout  from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { Checkout, isCheckingOut } = useCheckout();

  return (
    <Button
      $variations="primary"
      $size="small"
      disabled={isCheckingOut}
      onClick={() => Checkout(bookingId)}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
