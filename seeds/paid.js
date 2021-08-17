const orders_paid = [
    {order_number: 1, total_cost: 160.99, paid: true},
    {order_number: 2, total_cost: 750.00},
  ]
  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('paid').del()
      .then(function () {
        // Inserts seed entries
        return knex('paid').insert(orders_paid);
      });
  };