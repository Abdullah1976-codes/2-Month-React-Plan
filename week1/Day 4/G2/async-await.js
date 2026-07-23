// G2 - Async/Await + Try/Catch + HTTP Error + Network Error

async function getUser(userId) {
  try {
    // Fetch user data
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    // Check HTTP Error (404, 500, etc.)
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // Convert JSON to JavaScript Object
    const user = await response.json();

    console.log("User Data:");
    console.log(user);

  } catch (error) {

    // Network Error
    if (error.name === "TypeError") {
      console.log("Network Error! Please check your internet connection.");
    } else {
      // HTTP Error
      console.log(error.message);
    }

  }
}

// Existing User
getUser(1);

// Non-existing User (404)
// getUser(9999);