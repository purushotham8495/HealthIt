








("use strict");
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(item.price * 100),
            },
            quantity: product.attributes.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US"] },
        payment_method_types: ['card'],
        customer_email: 'purushotham8495@gmail.com',
        mode: "payment",
        success_url: process.env.CLIENT_URL + "/success",
        cancel_url: process.env.CLIENT_URL + "?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { userName,products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));








// const Razorpay = require('razorpay');

// // Assuming you have your Razorpay key and secret
// const razorpay = new Razorpay({
//   key_id: 'rzp_test_EjUHfiLobbeXPE',
//   key_secret: 'Bz0MZk9MvDEDcdedmHvejB7A',
// }); 

// const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::order.order', ({ strapi }) => ({
//   async create(ctx) {
//     const { products, orderId } = ctx.request.body; // Assuming orderId is passed in the request body
//     try {
//       const lineItems = await Promise.all(
//         products.map(async (product) => {
//           const item = await strapi
//             .service('api::product.product')
//             .findOne(product.id);

//           return {
//             description: item.title,
//             amount: Math.round(item.price * 100), // Amount should be in smallest currency unit (e.g., paisa for INR)
//             currency: 'INR', // Replace with appropriate currency code
//             quantity: product.attributes.quantity,
//           };
//         })
//       );

//       // Calculate the total amount based on the line items
//       const totalAmount = lineItems.reduce((acc, lineItem) => {
//         return acc + lineItem.amount * lineItem.quantity;
//       }, 0);

//       // Create an order with Razorpay including a hardcoded recipient ID and order ID
//       const order = await razorpay.orders.create({
//         amount: totalAmount, // Total order amount
//         currency: 'INR', // Currency code
//         notes: {
//           description: 'Order payment', // Add any additional notes
//           recipient_id: 'qwsaq1', // Hardcoded recipient ID
//           order_id: orderId,
          
//           msg:'Order Created',
         
//           amount:totalAmount,
//           key_id:'rzp_test_EjUHfiLobbeXPE',
          
//           contact:"8567345632",
//           name: "Sandeep Sharma",
//           email: "sandeep@gmail.com"
//            // Set order ID in the notes
//         },
//       });
      

//       // Save order details in your Strapi backend
//       await strapi
//         .service('api::order.order')
//         .create({ data: { products, razorpayOrderId: order.id } });

//       return { razorpayOrder: order };
//     } catch (error) {
//       ctx.response.status = 500;
//       return { error };
//     }
//   },
// }));
