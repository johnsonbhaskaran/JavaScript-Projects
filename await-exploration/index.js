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
