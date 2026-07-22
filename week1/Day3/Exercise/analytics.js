// =========================
// Orders Dataset
// =========================

const orders = [
  {
    id: 1,
    product: "Laptop",
    category: "electronics",
    price: 80000,
    qty: 1,
    status: "completed",
    userId: 101,
  },
  {
    id: 2,
    product: "Mobile",
    category: "electronics",
    price: 50000,
    qty: 2,
    status: "completed",
    userId: 102,
  },
  {
    id: 3,
    product: "Headphones",
    category: "electronics",
    price: 7000,
    qty: 1,
    status: "pending",
    userId: 103,
  },
  {
    id: 4,
    product: "Keyboard",
    category: "electronics",
    price: 3500,
    qty: 2,
    status: "completed",
    userId: 104,
  },
  {
    id: 5,
    product: "Mouse",
    category: "electronics",
    price: 2500,
    qty: 3,
    status: "refunded",
    userId: 105,
  },
  {
    id: 6,
    product: "T-Shirt",
    category: "clothing",
    price: 1500,
    qty: 2,
    status: "completed",
    userId: 106,
  },
  {
    id: 7,
    product: "Jeans",
    category: "clothing",
    price: 3000,
    qty: 1,
    status: "pending",
    userId: 107,
  },
  {
    id: 8,
    product: "Jacket",
    category: "clothing",
    price: 6000,
    qty: 1,
    status: "completed",
    userId: 108,
  },
  {
    id: 9,
    product: "Shoes",
    category: "clothing",
    price: 4500,
    qty: 2,
    status: "completed",
    userId: 109,
  },
  {
    id: 10,
    product: "Cap",
    category: "clothing",
    price: 1200,
    qty: 1,
    status: "refunded",
    userId: 110,
  },
  {
    id: 11,
    product: "Pizza",
    category: "food",
    price: 1800,
    qty: 2,
    status: "completed",
    userId: 111,
  },
  {
    id: 12,
    product: "Burger",
    category: "food",
    price: 900,
    qty: 3,
    status: "pending",
    userId: 112,
  },
  {
    id: 13,
    product: "Juice",
    category: "food",
    price: 300,
    qty: 5,
    status: "completed",
    userId: 113,
  },
  {
    id: 14,
    product: "Sandwich",
    category: "food",
    price: 700,
    qty: 2,
    status: "completed",
    userId: 114,
  },
  {
    id: 15,
    product: "Coffee",
    category: "food",
    price: 500,
    qty: 4,
    status: "refunded",
    userId: 115,
  },
];

// =========================
// Step 2
// =========================

function getCompletedRevenue(orders) {
  return orders
    .filter((order) => order.status === "completed")
    .map((order) => ({
      product: order.product,
      revenue: order.price * order.qty,
    }));
}

// Test Cases
console.log(getCompletedRevenue(orders));
console.log(getCompletedRevenue(orders).length);

// =========================
// Step 3
// =========================

function getCategorySummary(orders) {
  return orders.reduce((acc, order) => {
    const category = order.category;

    if (!acc[category]) {
      acc[category] = {
        totalRevenue: 0,
        orderCount: 0,
      };
    }

    acc[category].totalRevenue += order.price * order.qty;
    acc[category].orderCount++;

    return acc;
  }, {});
}

// Test Cases
console.log(getCategorySummary(orders));
console.log(getCategorySummary(orders).electronics);

// =========================
// Step 4
// =========================

function updateOrderStatus(orders, id, newStatus) {
  return orders.map((order) =>
    order.id === id
      ? {
          ...order,
          status: newStatus,
        }
      : order
  );
}

// Test Cases
console.log(updateOrderStatus(orders, 3, "completed"));
console.log(updateOrderStatus(orders, 7, "refunded"));

// =========================
// Step 5
// =========================

function canProcessBatch(orders) {
  return (
    orders.every((order) => order.qty > 0) &&
    orders.some((order) => order.status === "pending")
  );
}

// Test Cases
console.log(canProcessBatch(orders));

const testOrders = [
  {
    id: 1,
    qty: 0,
    status: "completed",
  },
];

console.log(canProcessBatch(testOrders));

// =========================
// Step 6
// =========================

function getTopProducts(orders, n) {
  return Object.values(
    orders
      .filter((order) => order.status === "completed")
      .reduce((acc, order) => {
        if (!acc[order.product]) {
          acc[order.product] = {
            product: order.product,
            revenue: 0,
          };
        }

        acc[order.product].revenue += order.price * order.qty;

        return acc;
      }, {})
  )
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, n);
}

// Test Cases
console.log(getTopProducts(orders, 3));
console.log(getTopProducts(orders, 5));