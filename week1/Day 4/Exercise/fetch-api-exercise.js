// ===============================
// Helper Function
// ===============================

async function fetchJSON(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
  }

  return await response.json();
}

// ===============================
// Sequential API Calls
// ===============================

async function getUserWithPosts(userId) {
  try {
    const user = await fetchJSON(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const posts = await fetchJSON(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );

    return {
      user,
      posts,
    };
  } catch (error) {
    if (error.name === "TypeError") {
      console.log("Network Error! Please check your internet connection.");
    } else {
      console.log(error.message);
    }
  }
}

// ===============================
// Promise.all()
// ===============================

async function getDashboardData(userId) {
  const [posts, todos] = await Promise.all([
    fetchJSON(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    ),
    fetchJSON(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    ),
  ]);

  return {
    posts,
    todos,
  };
}

// ===============================
// Promise.allSettled()
// ===============================

async function getDashboardDataSettled(userId) {
  const results = await Promise.allSettled([
    fetchJSON(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    ),
    fetchJSON(
      `https://jsonplaceholder.typicode.com/todos?userId=${userId}`
    ),
  ]);

  return results;
}

// ===============================
// AbortController
// ===============================

async function getUsers() {
  const controller = new AbortController();

  setTimeout(() => {
    controller.abort();
  }, 2000);

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        signal: controller.signal,
      }
    );

    const users = await response.json();

    console.log(users);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request Cancelled!");
    }
  }
}

// ===============================
// Performance Test
// ===============================

async function main() {
  console.time("API");

  const data = await getUserWithPosts(1);

  console.timeEnd("API");

  console.log(data);
}

main();