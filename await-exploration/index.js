const userIds = [1, 2, 3, 4, 5];

/* -----------------------------------------------------------------/
                    * await - with forEach() *
/------------------------------------------------------------------*/

async function fetchUserProfiles() {
  userIds.forEach(async (id) => {
    const profile = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await profile.json();

    console.log(`User ${id}:`, data.name);
  });

  console.log("All done fetching users");
}

fetchUserProfiles();

/* -----------------------------------------------------------------/
                    * await - Using Map *
/------------------------------------------------------------------*/

async function mapAllUserData() {
  const userData = await userIds.map(async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.json();
  });

  console.log(await userData);
}

mapAllUserData();

/* -----------------------------------------------------------------/
                    * await - Using Map but with Promises.all *
/------------------------------------------------------------------*/

async function getAllUserData() {
  const userData = await Promise.all(
    userIds.map((id) => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()))
  );

  console.log(userData);
  console.log(userData.map((data) => console.log(`User ${data.id}:`, data.name)));
}

getAllUserData();

/* -----------------------------------------------------------------/
                    * await - sequential execution - for of *
/------------------------------------------------------------------*/

//? best method - BUT

async function processSequentially() {
  for (const id of userIds) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    console.log(`User ${id}:`, data.name);
  }

  console.log("All done fetching users");
}

processSequentially();

/* -----------------------------------------------------------------/
                    * await - Parallel execution with Promise.all *
/------------------------------------------------------------------*/

async function mapParallelExecPromAll() {
  const promises = userIds.map((id) =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
  );

  const userData = await Promise.all(promises);
  console.log("All results:", userData);
}

mapParallelExecPromAll();

/* -----------------------------------------------------------------/
                    * await - Promise.allSettled *
/------------------------------------------------------------------*/

// Resilient parallel operation with Promise.allSettled

async function fetchAllSources() {
  const allSources = [
    "https://pokeapi.co/api/v2/pokemon/2",
    "https://jsonplaceholder.typicode.com/users/2",
  ];

  const promises = allSources.map((url) => fetch(url).then((res) => res.json()));

  const results = await Promise.allSettled(promises);

  results.forEach((result, index) => {
    if (result.status === "fulfilled") console.log(`Source ${index} succeeded:`, result.value);
    console.error(`Source ${index} failed:`, result.reason);
  });
}

fetchAllSources();
