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
