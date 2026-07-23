// G4 - Promise.all() and Promise.allSettled()

async function getDashboardData() {
  try {
    // Promise.all() → All requests start together
    const [users, posts, todos] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
        res.json()
      ),
    ]);

    console.log("=== Promise.all() ===");
    console.log("Users:", users);
    console.log("Posts:", posts);
    console.log("Todos:", todos);
  } catch (error) {
    console.log("Promise.all() Failed!");
    console.log(error.message);
  }

  console.log("--------------------------------");

  // Promise.allSettled()
  const results = await Promise.allSettled([
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
      res.json()
    ),
  ]);

  console.log("=== Promise.allSettled() ===");

  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Request ${index + 1} Success`);
      console.log(result.value);
    } else {
      console.log(`Request ${index + 1} Failed`);
      console.log(result.reason);
    }
  });
}

// Function Call
getDashboardData();