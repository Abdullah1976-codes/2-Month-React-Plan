// G3 - Sequential API Calls

async function getUserWithPosts(userId) {
  try {
    // Step 1: Fetch User
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    // Check HTTP Error
    if (!userResponse.ok) {
      throw new Error(`HTTP Error: ${userResponse.status}`);
    }

    // Step 2: Convert Response to JavaScript Object
    const user = await userResponse.json();

    console.log("User:");
    console.log(user);

    // Step 3: Fetch Posts using user.id
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );

    // Check HTTP Error
    if (!postsResponse.ok) {
      throw new Error(`HTTP Error: ${postsResponse.status}`);
    }

    // Step 4: Convert Response to JavaScript Array
    const posts = await postsResponse.json();

    console.log("Posts:");
    console.log(posts);

  } catch (error) {

    if (error.name === "TypeError") {
      console.log("Network Error! Please check your internet connection.");
    } else {
      console.log(error.message);
    }

  }
}

// Function Call
getUserWithPosts(1);