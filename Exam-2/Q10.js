/*
Q10. Order Status Management: Use switch-case to handle pending, confirmed, shipped, delivered and cancelled
orders with suitable messages.
*/

const orderStatusManagement = (status) => {
  let message = "";

  switch (status.toLowerCase()) {
    case "pending":
      message = "Your order is pending. Please wait for confirmation.";
      break;

    case "confirmed":
      message = "Your order has been confirmed. We will process it soon.";
      break;

    case "shipped":
      message =
        "Your order has been shipped. You can track it using the tracking number.";
      break;

    case "delivered":
      message =
        "Your order has been delivered. We hope you enjoy your purchase!";
      break;

    case "cancelled":
      message =
        "Your order has been cancelled. If you have any questions, please contact support.";
      break;

    default:
      message = "Invalid order status. Please provide a valid status.";
      break;
  }
  return message;
};

console.log(orderStatusManagement("shipped"));
